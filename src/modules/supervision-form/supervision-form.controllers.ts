import { Op } from "sequelize";
import { Request, Response } from "express";
import { QuestionTypeEnum } from "./custom-form/cf.types";
import { FormType, SupervisionFormTypeAttributes, supervisionFormTypeEnum } from "./supervision-form-type.types";
import { SupervisionFormAttributes } from "./supervision-form.types";
import { getPaginationMeta } from "../../common/utils/meta.util";
import { createResponse } from '../../common/utils/response.util';

import db from "../../database/models";

const SupervisionFormModel = db.SupervisionForm
const SupervisionFormTypeModel = db.SupervisionFormType

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
		const forms = await db.SupervisionForm.findAll({
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
					model: db.RatingScaleSection,
					include: [
						{
							model: db.RatingScaleQuestion,

						},
					],
					// required: {
					//   model: SupervisionFormTypeModel,
					//   where: {
					// 	formType: FormType.RATING_SCALE,
					//   },
					// },
				},
				{
					model: db.CustomFormSection,
					include: [
						{
							model: db.CustomFormSubSection,
							include: [
								{
									model: db.CustomFormQuestionOfSubSection,
								}
							]
						},
						{
							model: db.CustomFormQuestionOfSection
						}
					]
				},
				{
					model: db.QuestionForm,
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
	getAllExistingYears
}