import db from "../../../database/models";
import { Request, Response } from "express";
import { FormType, SupervisionFormTypeAttributes, supervisionFormTypeEnum } from "../supervision-form-type.types";
import { SupervisionFormAttributes } from "../supervision-form.types";
import { SchoolSupervisionFormAttributes } from "./school-supervision-form.types";
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

		// if (query.supervisor_name) {
		// 	whereClauseSupervisionForm.supervisorName = query.supervisor_name as string; // Add a condition for the "year" query parameter
		// }

		if (query.year) {
			whereClauseSupervisionForm.year = query.year as string; // Add a condition for the "year" query parameter
		}

		if (query.term) {
			whereClauseSupervisionForm.term = query.term as string; // Add a condition for the "term" query parameter
		}
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

		// if (query.supervisor_name) {
		// 	whereClauseSupervisionForm.supervisorName = query.supervisor_name as string; // Add a condition for the "year" query parameter
		// }

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

		// if (query.supervisor_name) {
		// 	whereClauseSupervisionForm.supervisorName = query.supervisor_name as string; // Add a condition for the "year" query parameter
		// }

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
		console.log("===============================");
		console.log(whereClauseSupervisionFormType)
		console.log("===============================");

		let whereClauseSupervisionForm: Partial<SupervisionFormAttributes> = {}; // Initialize an empty object for the where clause

		// if (query.supervisor_name) {
		// 	whereClauseSupervisionForm.supervisorName = query.supervisor_name as string; // Add a condition for the "year" query parameter
		// }

		if (query.year) {
			whereClauseSupervisionForm.year = query.year as string; // Add a condition for the "year" query parameter
		}

		if (query.term) {
			whereClauseSupervisionForm.term = query.term as string; // Add a condition for the "term" query parameter
		}
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
		// console.log("==============")
		// console.log(error);
		// console.log("==============")

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
	getOneByTermAndYearBySchoolId
}