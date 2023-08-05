import { Request, Response } from "express";
import db from "../../database/models";

export const create = async (req: Request, res: Response) => {
	try {
		const body = req.body;
		const school = await db.School.findOne({
			where: { id: body.schoolId },
			raw: true
		})

		if (!school) {
			res.status(400).json({
				msg: "create school was failed",
				payload: {}
			})
		}

		const personnel = await db.Personnel.findOne({
			where: { id: body.personnelId },
			raw: true
		})

		if (!personnel) {
			res.status(400).json({
				msg: "create personnel was failed",
				payload: {}
			})
		}
		const personnelSchool = await db.PersonnelSchool.create(body);

		return res.json({
			msg: `create personnelSchool was successfully`,
			payload: personnelSchool
		})
	} catch (error) {
		console.log(error)
		return res.status(400).json({
			msg: "create personnelSchool was failed",
			payload: {}
		})
	}
}

export const getOne = async (req: Request, res: Response) => {
	try {
		const id = req.params?.id
		const response = await db.PersonnelSchool.findOne({
			where: { id }
		});

		res.json({
			msg: `get one personnel school was successfully`,
			payload: response
		})
	} catch (error) {
		res.status(400).json({
			msg: "get one personnel school was failed",
			payload: {}
		})
	}
}

export const getByPersonnel = async (req: Request, res: Response) => {
	try {
		const personnelId = req.params?.id
		const personnel = await db.Personnel.findOne({
			where: { id: personnelId }
		})
		if (!personnel) {
			res.status(400).json({
				msg: "get all personnel school by personnel was failed",
				payload: {}
			})
		}
		const response = await db.PersonnelSchool.findAll({
			include: [
				{
					model: db.School
				}
			],
			where: { personnelId: personnelId }
		});
		res.json({
			msg: `get all by personnel school by personnel was successfully`,
			payload: response
		})
	} catch (error) {
		res.status(400).json({
			msg: "get one by persoonel school was failed",
			payload: {}
		})
	}
}

export const getAll = async (req: Request, res: Response) => {
	try {

		const response = await db.PersonnelSchool.findAll({
			include: [
				{
					model: db.Personnel,
				},
				{
					model: db.School
				}
			],
		});

		res.json({
			msg: `get all personnel school was successfully`,
			payload: response,
			// formData
		})
	} catch (error) {
		res.status(400).json({
			msg: "get all personnel school was failed",
			payload: {}
		})
	}
}

export const update = async (req: Request, res: Response) => {
	try {
		const id = req.params?.id
		const body = req.body;
		const response = await db.PersonnelSchool.update({ ...body }, {
			where: { id }
		});
		res.json({
			msg: `update personnel school was successfully`,
			payload: response
		})
	} catch (error) {
		res.status(400).json({
			msg: "update personnel school was failed",
			payload: {}
		})
	}
}


export const remove = async (req: Request, res: Response) => {
	try {
		const id = req.params?.id
		const response = await db.PersonnelSchool.destroy({
			where: { id }
		});
		res.json({
			msg: `delete school was successfully`,
			payload: response
		})
	} catch (error) {
		res.status(400).json({
			msg: "delete school was failed",
			payload: {}
		})
	}
}


export default {
	create,
	update,
	getByPersonnel,
	getAll,
	getOne,
	remove
}