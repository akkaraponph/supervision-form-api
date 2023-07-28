import db from "../../../database/models";
import { Request, Response } from "express";
import { FormType, SupervisionFormTypeAttributes, supervisionFormTypeEnum } from "../supervision-form-type.types";
import { SupervisionFormAttributes } from "../supervision-form.types";
import { SchoolSupervisionFormAttributes } from "./school-supervision-form.types";
import { createResponse } from "../../../common/utils/response.util";
import { RSFQuestionAttributes, RSFSectionAttributes, ResultRSFAttributes } from "../rating-scale-form/rsf.types";
import { IFormReport, IResultRsf } from "./report.type";

const SchoolSupervisionForm = db.SchoolSupervisionForm

export const create = async (req: Request, res: Response) => {
	try {

		const payload = await SchoolSupervisionForm.create(req.body)

		return res.json({
			msg: `Create school supervision form was successfully`,
			payload
		})
	} catch (error) {

		return res.status(400).json({
			msg: "Encountered an error when create school supervision form!",
			payload: {}
		})
	}
}

export const getOne = async (req: Request, res: Response) => {
	try {
		const query = req.query;
		let whereClauseSupervisionFormType: Partial<SupervisionFormTypeAttributes> = {}; // Initialize an empty object for the where clause

		if (query.type) {
			whereClauseSupervisionFormType.type = query.type as supervisionFormTypeEnum; // Add a condition for the "term" query parameter
		}
		if (query.form_type) {
			whereClauseSupervisionFormType.formType = query.form_type as FormType; // Add a condition for the "term" query parameter
		}

		let whereClauseSupervisionForm: Partial<SupervisionFormAttributes> = {}; // Initialize an empty object for the where clause

		let whereClauseSchoolSupervisionForm: Partial<SchoolSupervisionFormAttributes> = {}; // Initialize an empty object for the where clause

		if (query.school_id) {
			whereClauseSchoolSupervisionForm.schoolId = query.school_id as string; // Add a condition for the "term" query parameter
		}
		if (query.supervision_form_id) {
			whereClauseSchoolSupervisionForm.supervisionFormId = query.supervision_form_id as string; // Add a condition for the "term" query parameter
		}
		const payload = await SchoolSupervisionForm.findOne({
			include: [
				{
					model: db.SupervisionForm,
					include: [
						{
							model: db.SupervisionFormType,
							where: {
								...whereClauseSupervisionFormType
							}
						}
					],
					where: { ...whereClauseSupervisionForm }
				}
			],
			where: { id: req.params.id, ...whereClauseSchoolSupervisionForm }
		})
		return res.status(200).json({
			msg: "retrieved the data of school supervision form was successfully",
			payload
		})
	} catch (error) {
		return res.status(400).json({
			msg: `Encoutered an error when retrieved the school supervision form by ${req.params.id}`,
			payload: {}
		})
	}
}

export const getOneByTermAndYearBySchoolId = async (req: Request, res: Response) => {
	try {
		const query = req.query;
		let whereClauseSupervisionFormType: Partial<SupervisionFormTypeAttributes> = {}; // Initialize an empty object for the where clause

		if (query.type) {
			whereClauseSupervisionFormType.type = query.type as supervisionFormTypeEnum; // Add a condition for the "term" query parameter
		}
		if (query.type_id) {
			whereClauseSupervisionFormType.id = query.type_id as string; // Add a condition for the "term" query parameter
		}
		if (query.form_type) {
			whereClauseSupervisionFormType.formType = query.form_type as FormType; // Add a condition for the "term" query parameter
		}

		let whereClauseSupervisionForm: Partial<SupervisionFormAttributes> = {}; // Initialize an empty object for the where clause



		let whereClauseSchoolSupervisionForm: Partial<SchoolSupervisionFormAttributes> = {}; // Initialize an empty object for the where clause
		if (query.year) {
			whereClauseSchoolSupervisionForm.year = query.year as string; // Add a condition for the "year" query parameter
		}

		if (query.term) {
			whereClauseSchoolSupervisionForm.term = query.term as string; // Add a condition for the "term" query parameter
		}

		if (query.school_id) {
			whereClauseSchoolSupervisionForm.schoolId = query.school_id as string; // Add a condition for the "term" query parameter
		}

		if (query.supervision_form_id) {
			whereClauseSchoolSupervisionForm.supervisionFormId = query.supervision_form_id as string; // Add a condition for the "term" query parameter
		}

		const payload = await SchoolSupervisionForm.findOne({
			include: [
				{
					model: db.SupervisionForm,
					include: [
						{
							model: db.SupervisionFormType,
							where: {
								...whereClauseSupervisionFormType
							}
						}
					],
					where: { ...whereClauseSupervisionForm }
				}
			],
			where: { ...whereClauseSchoolSupervisionForm }
		})
		return res.status(200).json({
			msg: "retrieved the data of school supervision form was successfully",
			payload
		})
	} catch (error) {
		return res.status(400).json({
			msg: `Encoutered an error when retrieved the school supervision form by ${req.params.id}`,
			payload: {}
		})
	}
}


export const getAllReport = async (req: Request, res: Response) => {
	try {
		const year = req.query?.year
		const term = req.query?.term
		const typeParam = req.query?.type as string

		const allSchoolAnswer = await db.SchoolSupervisionForm.findAll({
			include: [
				{
					model: db.ResultRSF,
					include: [
						{
							model: db.RSFQuestion,
							include: [
								{
									model: db.RSFSection,
								}
							]
						}
					]
				},
				{
					model: db.SupervisionForm,
					include: [
						{
							model: db.SupervisionFormType,
							where: {
								type: typeParam
							},
							required: false,
						}
					]
				}
			],
			where: {
				[db.Sequelize.Op.and]: [
					{ year },
					{ term },
					{ '$SupervisionForm.SupervisionFormType.type$': { [db.Sequelize.Op.ne]: null } },
				],
			}, raw: true,
			returning: true
		})

		// Calculate mean scores for each section and question using for loop
		const sectionMeanLabel: string[] = [];
		const sectionMean: string[] = [];
		interface AnswerObject {
			section: string,
			sectionId: string,
			questionId: string,
			question: string,
			answer: number
		}

		let answerArray: AnswerObject[] = []

		let resultQuestionArray: {
			[key: string]: any[]
		} = {}

		//  allSchoolAnswer.map((spf: IFormReport) => {
		// 	spf.ResultRSFs.map((result: IResultRsf) => {
		// 	  const question = result.RSFQuestion.question;
		// 	  const resultScore = result.score;
		// 	  const rsfQuestionId = result.RSFQuestion.id;

		// 	  console.log("----------------");
		// 	  console.log("Question:", question);
		// 	  console.log("Score:", resultScore);
		// 	  console.log("RSF Question ID:", rsfQuestionId);
		// 	  console.log("----------------");
		// 	});
		//   });
		allSchoolAnswer.forEach((element: any) => {
			console.log(element)
			if (!resultQuestionArray[element['ResultRSFs.RSFQuestion.question']]) {
				resultQuestionArray[element['ResultRSFs.RSFQuestion.question']] = []
			}
			resultQuestionArray[element['ResultRSFs.RSFQuestion.question']].push(element['ResultRSFs.score'])
		});
		
		const meanScores: { [question: string]: number } = {};

		Object.keys(resultQuestionArray).forEach((question) => {
		  const scoresArray = resultQuestionArray[question];
		  const sum = scoresArray.reduce((acc, score) => acc + score, 0);
		  const mean = sum / scoresArray.length;
		  // Round the mean value to two decimal places
		  const roundedMean = parseFloat(mean.toFixed(2));
		  meanScores[question] = roundedMean;
		});
		// Separate the keys (questions) and values (mean scores) into separate arrays.
		const questionsArray = Object.keys(meanScores);
		const meanScoresArray = Object.values(meanScores);

		// console.log("Questions Array:", questionsArray);
		// console.log("Mean Scores Array:", meanScoresArray);
			
				




		const result = {
			sectionMeanLabel,
			sectionMean
		}

		return createResponse(res, 200, {
			msg: "get success",
			payload: {
				questionsArray,
				meanScoresArray
			},
		}, 'success')
	} catch (error) {
		return createResponse(res, 400, {
			msg: "can't get report",
			payload: error
		}, "failed")
	}
}

// export const getAllReport = async (req: Request, res: Response) => {
// 	try {
// 		const year = req.query?.year
// 		const term = req.query?.term
// 		const typeParam = req.query?.type 

// 		const allSchoolAnswer = await db.SchoolSupervisionForm.findAll({
// 			include: [
// 				{
// 					model: db.ResultRSF,
// 					include: [
// 						{
// 							model: db.RSFQuestion,
// 							include: [
// 								{
// 									model: db.RSFSection,
// 								}
// 							]
// 						}
// 					]
// 				},
// 				{
// 					model: db.SupervisionForm,
// 					include: [
// 						{
// 							model: db.SupervisionFormType,
// 							where: {
// 								type: typeParam
// 							},
// 							required: false,
// 						}
// 					]
// 				}
// 			],
// 			where: {
// 				[db.Sequelize.Op.and]: [
// 					{ year },
// 					{ term },
// 					{ '$SupervisionForm.SupervisionFormType.type$': { [db.Sequelize.Op.ne]: null } },
// 				],
// 			},
// 			group: [
// 				'ResultRSFs.RSFQuestion.RSFSection.id',
// 				'ResultRSFs.RSFQuestion.RSFSection.type',
// 				'ResultRSFs.RSFQuestion.id',

// 			],
// 			attributes: [
// 				'ResultRSFs.RSFQuestion.RSFSection.id',
// 				'ResultRSFs.RSFQuestion.RSFSection.type',
// 				'ResultRSFs.RSFQuestion.id',
// 				[db.sequelize.fn('AVG', db.sequelize.col('ResultRSFs.score')), 'meanScore'],
// 			]
// 		})
// 		return createResponse(res, 200, {
// 			msg: "get success",
// 			payload: allSchoolAnswer,
// 		}, 'success')
// 	} catch (error) {
// 		return createResponse(res, 400, {
// 			msg: "can't get report",
// 			payload: error
// 		}, "failed")
// 	}
// }

export const getOneByTermAndYear = async (req: Request, res: Response) => {
	try {
		const userId = req.user?.id
		const school = await db.School.findOne({
			where: { userId },
			raw: true
		})

		const query = req.query;
		let whereClauseSupervisionFormType: Partial<SupervisionFormTypeAttributes> = {}; // Initialize an empty object for the where clause

		if (query.type) {
			whereClauseSupervisionFormType.type = query.type as supervisionFormTypeEnum; // Add a condition for the "term" query parameter
		}
		if (query.type_id) {
			whereClauseSupervisionFormType.id = query.type_id as string; // Add a condition for the "term" query parameter
		}
		if (query.form_type) {
			whereClauseSupervisionFormType.formType = query.form_type as FormType; // Add a condition for the "term" query parameter
		}

		let whereClauseSupervisionForm: Partial<SupervisionFormAttributes> = {}; // Initialize an empty object for the where clause


		let whereClauseSchoolSupervisionForm: Partial<SchoolSupervisionFormAttributes> = {}; // Initialize an empty object for the where clause
		if (query.year) {
			whereClauseSchoolSupervisionForm.year = query.year as string; // Add a condition for the "year" query parameter
		}

		if (query.term) {
			whereClauseSchoolSupervisionForm.term = query.term as string; // Add a condition for the "term" query parameter
		}

		if (query.school_id) {
			whereClauseSchoolSupervisionForm.schoolId = query.school_id as string; // Add a condition for the "term" query parameter
		}
		if (school.id) {
			whereClauseSchoolSupervisionForm.schoolId = school.id as string; // Add a condition for the "term" query parameter
		}
		if (query.supervision_form_id) {
			whereClauseSchoolSupervisionForm.supervisionFormId = query.supervision_form_id as string; // Add a condition for the "term" query parameter
		}

		const payload = await SchoolSupervisionForm.findOne({
			include: [
				{
					model: db.SupervisionForm,
					include: [
						{
							model: db.SupervisionFormType,
							where: {
								...whereClauseSupervisionFormType
							}
						}
					],
					where: { ...whereClauseSupervisionForm }
				}
			],
			where: { ...whereClauseSchoolSupervisionForm }
		})
		return res.status(200).json({
			msg: "retrieved the data of school supervision form was successfully",
			payload
		})
	} catch (error) {
		return res.status(400).json({
			msg: `Encoutered an error when retrieved the school supervision form by ${req.params.id}`,
			payload: {}
		})
	}
}

export const getAll = async (req: Request, res: Response) => {
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
		if (query.type_id) {
			whereClauseSupervisionFormType.id = query.type_id as string; // Add a condition for the "term" query parameter
		}

		let whereClauseSupervisionForm: Partial<SupervisionFormAttributes> = {}; // Initialize an empty object for the where clause


		let whereClauseSchoolSupervisionForm: Partial<SchoolSupervisionFormAttributes> = {}; // Initialize an empty object for the where clause

		if (query.school_id) {
			whereClauseSchoolSupervisionForm.schoolId = query.school_id as string; // Add a condition for the "term" query parameter
		}
		if (query.supervision_form_id) {
			whereClauseSchoolSupervisionForm.supervisionFormId = query.supervision_form_id as string; // Add a condition for the "term" query parameter
		}
		const payload = await SchoolSupervisionForm.findAll({
			include: [
				{
					model: db.SupervisionForm,
					include: [
						{
							model: db.SupervisionFormType,
							where: {
								...whereClauseSupervisionFormType
							}
						}
					],
					where: { ...whereClauseSupervisionForm }
				}
			],
			where: { ...whereClauseSchoolSupervisionForm }
		})
		return res.status(200).json({
			msg: "retrieved the all data of school supervision form was successfully",
			payload
		})
	} catch (error) {

		return res.status(400).json({
			msg: `Encoutered an error when retrieved all data of school supervision form `,
			payload: {}
		})
	}
}

export const update = async (req: Request, res: Response) => {
	try {
		const payload = await SchoolSupervisionForm.update({
			...req.body,
		},
			{
				where: { id: req.params.id }
			})
		return res.status(200).json({
			msg: `Update the data of school supervision form was successfully`,
			payload
		})
	} catch (error) {
		return res.status(400).json({
			msg: `Encoutered an error when update the school supervision form id: ${req.params.id}`,
			payload: {}
		})
	}
}

export const destroy = async (req: Request, res: Response) => {
	try {
		const valid = await SchoolSupervisionForm.findOne({ where: { id: req.params.id } })
		if (!valid) return res.status(400).json({
			msg: `The data where ${req.params.id} not found`,
			payload: {}
		})
		const payload = await SchoolSupervisionForm.destroy({
			where: {
				id: req.params.id
			}
		})

		return res.status(200).json({
			msg: `Delete the data of school supervision form where id : ${req.params.id} was successfully`,
			payload
		})


	} catch (error) {
		return res.status(400).json({
			msg: `Encoutered an error when destroy the school supervision form by id: ${req.params.id}`,
			payload: {}
		})
	}
}

export default {
	create,
	getOne,
	getAll,
	getOneByTermAndYear,
	update,
	destroy,
	getOneByTermAndYearBySchoolId,
	getAllReport
}