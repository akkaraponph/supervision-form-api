import { Request, Response } from "express";
import db from "../../database/models";
import { destroy } from './../supervision-form/supervision-form-type.controllers';
const SchoolModel = db.School
const UserModel = db.User
const RatingScaleScoreModel = db.RatingScaleScore
const RatingScaleTypeModel = db.RatingScaleType
const RatingScaleQuestionModel = db.RatingScaleQuestion
const SupervisionFormModel = db.SupervisionForm

export const create = async (req: Request, res: Response) => {
	try {
		const body = req.body;
		const user = await UserModel.findOne({
			where: { id: body.userId },
			raw: true
		})
		// console.log("==================")
		// console.log("body")
		// console.log(body)
		// console.log("==================")
		// console.log("user")
		// console.log(user)
		if (body.userId) {
			delete body.userId
		}
		if (!user) {
			res.status(400).json({
				msg: "create school was failed userId is required",
				payload: {}
			})
		}
		const schoolData = { ...body, userId: user.id }
		// console.log("==================")
		// console.log(schoolData)
		const school = await SchoolModel.create(schoolData);

		return res.json({
			msg: `create school was successfully`,
			payload: school
		})
	} catch (error) {
		console.log(error)
		return res.status(400).json({
			msg: "create school was failed",
			payload: {}
		})
	}
}

export const getOne = async (req: Request, res: Response) => {
	try {
		const id = req.params?.id
		const school = await SchoolModel.findOne({
			where: { id }
		});

		res.json({
			msg: `get one school was successfully`,
			payload: school
		})
	} catch (error) {
		res.status(400).json({
			msg: "get one school was failed",
			payload: {}
		})
	}
}

export const getByUser = async (req: Request, res: Response) => {
	try {
		console.log("test")
		const userId = req.user?.id
		const school = await SchoolModel.findOne({
			where: { userId }
		});

		res.json({
			msg: `get one by user school was successfully`,
			payload: school
		})
	} catch (error) {
		res.status(400).json({
			msg: "get one by user school was failed",
			payload: {}
		})
	}
}

export const getAll = async (req: Request, res: Response) => {
	try {

		const school = await SchoolModel.findAll({
			include: [
				{
					model: db.User,
					attributes: {
						exclude: ['password']
					}
				}
			],
			attributes: {
				exclude: ['user_id']
			},
		});
		// const formData = await SupervisionFormModel.findAll({
		// 	include: [
		// 		{
		// 			model: RatingScaleTypeModel,
		// 			include: [
		// 				{
		// 					model: RatingScaleQuestionModel,
		// 					include: [
		// 						{
		// 							model: RatingScaleScoreModel,
		// 							where: { schoolId: "e26263e9-cd10-4bd8-b040-ff550a0d5ba1" }
		// 						}
		// 					]
		// 				}
		// 			]
		// 		}
		// 	]
		// })
		res.json({
			msg: `get all school was successfully`,
			payload: school,
			// formData
		})
	} catch (error) {
		res.status(400).json({
			msg: "get all school was failed",
			payload: {}
		})
	}
}

export const update = async (req: Request, res: Response) => {
	try {
		const id = req.params?.id
		const body = req.body;
		const school = await SchoolModel.update({ ...body }, {
			where: { id }
		});
		res.json({
			msg: `update school was successfully`,
			payload: school
		})
	} catch (error) {
		res.status(400).json({
			msg: "update school was failed",
			payload: {}
		})
	}
}

export const updateByUser = async (req: Request, res: Response) => {
	try {
		const userId = req.user?.id
		const body = req.body;
		const school = await SchoolModel.update({ ...body }, {
			where: { userId }
		});

		res.json({
			msg: `update user was successfully`,
			payload: school
		})
	} catch (error) {
		res.status(400).json({
			msg: "update user was failed",
			payload: {}
		})
	}
}


export const remove = async (req: Request, res: Response) => {
	try {
		const id = req.params?.id
		// const schoolSupervisionForm = await db.SchoolSupervisionForm.findOne({
		// 	where: { schoolId: id }, raw: true
		// })
		// console.log("----------------")
		// console.log(schoolSupervisionForm)
		// console.log("----------------")
		// await db.ResultRSF.destroy({
		// 	where: { schoolSupervisionFormId: schoolSupervisionForm.id }
		// })
		// await db.SchoolSupervisionForm.destroy({
		// 	where: { schoolId: id }
		// })
		const school = await SchoolModel.destroy({
			where: { id }
		});
		res.json({
			msg: `delete school was successfully`,
			payload: school
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
	getByUser,
	updateByUser,
	getAll,
	getOne,
	remove
}