import { Op } from "sequelize";
import { Request, Response } from "express";
import { QuestionTypeEnum } from "./custom-form/cf.types";
import { FormType, SupervisionFormTypeAttributes, supervisionFormTypeEnum } from "./supervision-form-type.types";
import { SupervisionFormAttributes } from "./supervision-form.types";
import { getPaginationMeta } from "../../common/utils/meta.util";
import { createResponse } from '../../common/utils/response.util';
import { v4 as uuidv4 } from 'uuid';

import db from "../../database/models";
import { Sequelize, Transaction } from 'sequelize';

import { CloneRSFSectionAttributes, RSFQuestionAttributes, RSFSectionAttributes } from "./rating-scale-form/rsf.types";
const SupervisionFormModel = db.SupervisionForm
const SupervisionFormTypeModel = db.SupervisionFormType
const RSFSectionModel = db.RSFSection
const RSFQuestionModel = db.RSFQuestion

export const cloningByTermAndYear = async (req: Request, res: Response) => {
	const t = await db.sequelize.transaction();
	try {
		const { cloneTerm, cloneYear, newTerm, newYear } = req.body
		if (!cloneTerm && !cloneYear && !newTerm && !newYear) return createResponse(res, 400, {
			msg: 'The cloneTerm, cloneyear, newTerm and newYear is required'
		})

		// const allSupervisionFormType = await SupervisionFormTypeModel.findAll({
		// 	raw: true
		// })
		const Include = [
			{
				model: SupervisionFormTypeModel,
				where: {
					formType: {
						[Op.or]: [FormType.RATING_SCALE, FormType.CUSTOM, FormType.QUESTION],
					},
				},
			},
			{
				model: RSFSectionModel,
				include: [
					{
						model: db.RSFQuestion,

					},
				],

			},
			{
				model: db.CFSection,
				include: [
					{
						model: db.CFSubSection,
						include: [
							{
								model: db.CFQSubSection,
							}
						]
					},
					{
						model: db.CFQSection
					}
				]
			},
			{
				model: db.QF,
			},

		]
		//  ค้นหาข้อมูล แบบฟอร์มนิเทศติดตาม ทั้งหมดตามปีที่ต้องการโคลน
		const allSupervisionFormWhereCloneQuery = await SupervisionFormModel.findAll({
			where: {
				term: cloneTerm,
				year: cloneYear
			},
			// include: Include
		})
		// ประกาศ interface ไว้สำหรับ จับคู่ id ของฟอร์ม นิเทศติดตาม
		interface SupervisionFormValuePair { previousId: string, presentId: string, typeId: string };
		// ประกาศ interface ไว้สำหรับ จับคู่ id ของฟอร์มต่าง ๆ 
		interface CloneValuePair { previousId: string, presentId: string };
		// ประกาศ ตัวแปร listSupervisionPair ไว้ทำการ keep list
		let listSupervisionPair: SupervisionFormValuePair[] = [];
		// ทำการ แมพ ข้อมูลที่ได้จากการ คิวรี ก่อนหน้า เพื่อใช้ในการ clone
		const clonedRows = allSupervisionFormWhereCloneQuery.map((row: any) => {
			// แทนข้อมูล ตัวแปร clonedRow สำหรับ ในแต่ละ แบบฟอร์มนิเทศติดตาม
			const clonedRow = { ...row };
			// สร้าง ไอดี ใหม่สำหรับ แบบฟอร์มนิเทศติดตามตัวใหม่
			const supervisionFormUUID = uuidv4();
			// จับคู่ไอดีของแบบฟอร์มเดิม กับแบบฟอร์มใหม่
			const valuePair: SupervisionFormValuePair = {
				previousId: clonedRow['dataValues'].id,
				typeId: clonedRow['dataValues'].supervisionFormTypeId,
				presentId: supervisionFormUUID
			}
			// push into list
			listSupervisionPair.push(valuePair)

			// Set new values
			clonedRow.id = supervisionFormUUID;
			clonedRow.term = newTerm;
			clonedRow.year = newYear;
			clonedRow.name = clonedRow['dataValues'].name;
			clonedRow.detail = clonedRow['dataValues'].detail;
			clonedRow.suggestion = clonedRow['dataValues'].suggestion;
			clonedRow.supervisorName = clonedRow['dataValues'].supervisorName;
			clonedRow.supervisionFormTypeId = clonedRow['dataValues'].supervisionFormTypeId;

			return clonedRow;
		});

		// Bulk create the cloned SupervisionForm rows
		const resultSupervisionFormCreated = await SupervisionFormModel.bulkCreate(clonedRows, { transaction: t })
		await t.commit();
		
		/**
		 * ========================================================
		 * ===============>> clone supervision form
		 * ========================================================
		 */
		resultSupervisionFormCreated.map(async (row: any) => {
			const newSupervisionFormId = row['dataValues'].id
			const checkType = await SupervisionFormTypeModel.findOne({
				where: { id: row['dataValues'].supervisionFormTypeId },
				raw: true
			})
			const SupervisionFormidValuePair = listSupervisionPair.find(item => item.presentId === newSupervisionFormId);
			const indexToRemove = listSupervisionPair.findIndex(item => item.presentId === newSupervisionFormId);
			if (indexToRemove !== -1) {
				listSupervisionPair.splice(indexToRemove, 1);
			}

			if (checkType.formType === FormType.RATING_SCALE) {

				const RSFSections = await RSFSectionModel.findAll({
					where: { supervisionFormId: SupervisionFormidValuePair?.previousId },
				})

				let listRSFSectionPair: CloneValuePair[] = [];

				const RSFSectionClones = RSFSections.map((row: any) => {
					const RSFSectionClone = { ...row };

					const newRSFSectionId = uuidv4();

					listRSFSectionPair.push({
						previousId: RSFSectionClone['dataValues'].id,
						presentId: newRSFSectionId
					})

					// Set new values
					RSFSectionClone.id = newRSFSectionId;
					RSFSectionClone.type = RSFSectionClone['dataValues'].type;
					RSFSectionClone.supervisionFormId = newSupervisionFormId;

					return RSFSectionClone;
				});

				const RSFSectionTransaction = await db.sequelize.transaction();
				// Bulk create the cloned SupervisionForm rows
				try {
					const resultRSFSectionCreated = await db.RSFSection.bulkCreate(RSFSectionClones, { transaction: RSFSectionTransaction })
					await RSFSectionTransaction.commit();
					/**
					 * ========================================================
					 * ===============>> clone rating sacle question
					 * ========================================================
					 */
					// const newRSFSectionId = row['dataValues'].id
					// const RSFSectionValuePair = listRSFSectionPair.find(item => item.presentId === newRSFSectionId);
					// const indexToRemove = listRSFSectionPair.findIndex(item => item.presentId === newRSFSectionId);
					// if (indexToRemove !== -1) {
					// 	listRSFSectionPair.splice(indexToRemove, 1);
					// }
					// const RSFQuestions = await RSFQuestionModel.findAll({
					// 	where: { RSFSectionId: RSFSectionValuePair?.previousId },
					// })

					// const RSFQuestionClones = RSFQuestions.map((row: any) => {
					// 	const RSFQuestionClone = { ...row };
	
					// 	const newRSFSectionId = uuidv4();
	
					// 	// Set new values
					// 	RSFQuestionClone.id = newRSFSectionId;
					// 	RSFQuestionClone.question = RSFQuestionClone['dataValues'].question;
					// 	RSFQuestionClone.RSFSectionId = newRSFSectionId;
	
					// 	return RSFQuestionClone;
					// });
	
					// const RSFQuestionTransaction = await db.sequelize.transaction();
					// try {
					// 	await db.RSFQuestion.bulkCreate(RSFQuestionClones, { transaction: RSFQuestionTransaction })
					// 	await RSFQuestionTransaction.commit();
					// } catch (error) {
					// 	RSFQuestionTransaction.rollback()
					// 	throw new Error()
					// }
				} catch (error) {
					RSFSectionTransaction.rollback()
					throw new Error()
				}

				// console.log("=====================")
				// console.log(resultRSFSectionCreated)
				// console.log("=====================");
			}

			if (checkType.formType === FormType.QUESTION) {
				// console.log("=====================")
				// console.log(checkType)
				// console.log("=====================");
			}
			if (checkType.formType === FormType.CUSTOM) {
				// console.log("=====================")
				// console.log(checkType)
				// console.log("=====================");
			}

			// throw new Error()

		})


		// const ids = resultSupervisionFormCreated.map((item: any) => item['dataValues'].id);

		// const results = await SupervisionFormModel.findAll({
		// 	where: {
		// 		id: ids
		// 	},
		// 	include: Include
		// });
		createResponse(res, 200, {
			msg: 'success',
			payload: resultSupervisionFormCreated
		})
	} catch (error) {
		console.error(error)
		t.rollback();
		return createResponse(res, 400, {
			msg: 'Encountered an error when clone supervision form!'
		})
	}
}

export const create = async (req: Request, res: Response) => {
	try {
		const body = req.body;
		const validateSupervisionFormType = await SupervisionFormTypeModel.findOne({
			where: { id: req.body.supervisionFormTypeId }
		})
		if (!validateSupervisionFormType) return res.status(400).json({
			msg: `Encountered an error supervision form type where ${req.body.supervisionFormTypeId} not founded`
		})
		const newSupervisionForm = await SupervisionFormModel.create(req.body)
		return res.json({
			msg: `Create supervision form name ${body.name}  was successfully`,
			payload: newSupervisionForm
		})
	} catch (error) {
		return res.status(400).json({
			msg: "Encountered an error when create the supervision form",
			payload: {}
		})
	}
}

export const getAllExistingYears = async (req: Request, res: Response) => {
	try {
		const forms = await SupervisionFormModel.findAll({
			attributes: ['year'],
			group: ['year'],
			raw: true,
		});


		const years = forms.map((form: any) => form.year);

		//   const yearsAndTerms = forms.map((form: any) => ({
		// 	year: form.year,
		// 	term: form.term,
		//   }));

		createResponse(res, 200, {
			msg: 'Retrieved the years and terms of the forms successfully',
			payload: years,
		});
	} catch (error) {
		createResponse(res, 400, {
			msg: 'Encountered an error when getting all existing years and terms of the forms',
		});
	}
};


export const getOne = async (req: Request, res: Response) => {
	try {
		const payload = await SupervisionFormModel.findOne({
			where: { id: req.params.id },
			include: [
				{
					model: SupervisionFormTypeModel,
					where: {
						formType: {
							[Op.or]: [FormType.RATING_SCALE, FormType.CUSTOM, FormType.QUESTION],
						},
					},
				},
				{
					model: RSFSectionModel,
					include: [
						{
							model: db.RSFQuestion,

						},
					],

				},
				{
					model: db.CFSection,
					include: [
						{
							model: db.CFSubSection,
							include: [
								{
									model: db.CFQSubSection,
								}
							]
						},
						{
							model: db.CFQSection
						}
					]
				},
				{
					model: db.QF,
				},

			],
		})
		return res.status(200).json({
			msg: "retrieved the data of supervision form was successfully",
			payload
		})
	} catch (error) {
		// console.log("================");
		// console.error(error)
		// console.log("================");
		return res.status(400).json({
			msg: `Encoutered an error when retrieved the supervision form by ${req.params.id}`,
			payload: {}
		})
	}
}


export const getAll = async (req: Request, res: Response): Promise<Response> => {
	try {
		const query = req.query;
		const page = parseInt(query.page as string) || 1; // Current page number
		const limit = parseInt(query.limit as string) || 10; // Number of records per page
		const offset = (page - 1) * limit; // Offset calculation
		const req_endpoint = `${req.protocol}://${req.get('host')}${req.originalUrl}`;

		let whereClauseSupervisionFormType: Partial<SupervisionFormTypeAttributes> = {}; // Initialize an empty object for the where clause

		if (query.type) {
			whereClauseSupervisionFormType.type = query.type as supervisionFormTypeEnum; // Add a condition for the "term" query parameter
		}
		if (query.form_type) {
			whereClauseSupervisionFormType.formType = query.form_type as FormType; // Add a condition for the "term" query parameter
		}
		
		
		const Include = [
			{
				model: SupervisionFormTypeModel,
				
				where: {
					formType: {
						[Op.or]: [FormType.RATING_SCALE, FormType.CUSTOM, FormType.QUESTION],
					},
					...whereClauseSupervisionFormType
				},
				attributes: {
					exclude: [
						'SupervisionFormId',
						'supervisionFormId',
					]
				}
			},
			{
				model: db.RSFSection,
				include: [
					{
						model: db.RSFQuestion,
					},
				],
				attributes: {
					exclude: [
						'SupervisionFormId',
						'supervisionFormId',
					]
				}
			},
			{
				model: db.CFSection,
				include: [
					{
						model: db.CFSubSection,

						include: [
							{
								model: db.CFQSubSection,
							}
						]
					},
					{
						model: db.CFQSection
					}
				],
				attributes: {
					exclude: [
						'SupervisionFormId',
						'supervisionFormId',
					]

				}
			},
			{
				model: db.QF,
				attributes: {
					exclude: [
						'SupervisionFormId',
						'supervisionFormId',
					]

				}
			},
		]
		let whereClause: Partial<SupervisionFormAttributes> = {}; // Initialize an empty object for the where clause

		if (query.supervisor_name) {
			whereClause.supervisorName = query.supervisor_name as string; // Add a condition for the "year" query parameter
		}

		if (query.year) {
			whereClause.year = query.year as string; // Add a condition for the "year" query parameter
		}

		if (query.term) {
			whereClause.term = query.term as string; // Add a condition for the "term" query parameter
		}

		const payload = await db.SupervisionForm.findAll({
			where: whereClause,
			include: Include,
			offset: offset,
			limit: limit,
			attributes: {
				exclude: ['supervisionFormTypeId', 'SupervisionFormTypeId']
			}
		});


		const count = await db.SupervisionForm.count({
			where: whereClause,
		});

		const meta = getPaginationMeta(req_endpoint, page, limit, count);

		const data = {
			msg: 'Retrieved all data of supervision form successfully',
			meta,
			payload,
		};

		return createResponse(res, 200, data);
	} catch (error) {
		console.log(error)
		const data = {
			msg: 'Encountered an error when retrieving all data of supervision form',
			payload: { error },
		};
		return createResponse(res, 400, data);
	}
};


export const update = async (req: Request, res: Response) => {
	try {
		const payload = await SupervisionFormModel.update({
			...req.body,
		},
			{
				where: { id: req.params.id }
			})

		return createResponse(res, 200, {
			msg: `Update the data of supervision form was successfully`,
			payload
		});
	} catch (error) {
		return createResponse(res, 400, {
			msg: `Encoutered an error when update the supervision form id: ${req.params.id}`,
			payload: {}
		});
	}
}

export const destroy = async (req: Request, res: Response) => {
	try {
		const valid = await SupervisionFormModel.findOne({ where: { id: req.params.id } })
		if (!valid) return res.status(400).json({
			msg: `The data where ${req.params.id} not found`,
			payload: {}
		})
		const payload = await SupervisionFormModel.destroy({
			where: {
				id: req.params.id
			}
		})
		return createResponse(res, 200, {
			msg: `Delete the data of supervision form where id  : ${req.params.id} was successfully`,
			payload
		});

	} catch (error) {
		return createResponse(res, 400, {
			msg: `Encoutered an error when destroy the supervision by id: ${req.params.id}`,
			payload: {}
		});

	}
}

export default {
	create,
	getOne,
	getAll,
	update,
	destroy,
	getAllExistingYears,
	cloningByTermAndYear
}