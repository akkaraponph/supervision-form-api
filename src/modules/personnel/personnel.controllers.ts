import { Request, Response } from "express";
import db from "../../database/models";
const PersonnelModel = db.Personnel
const UserModel = db.User

export const create = async (req: Request, res: Response) => {
	try {
		const body = req.body;
		const user = await UserModel.findOne({
			where: { id: body.userId },
			raw: true
		})
		if (!user) {
			return res.status(400).json({
				msg: "create personnel was failed userId is required",
				payload: {}
			})
		}

		const personnel = await PersonnelModel.create({ ...body});

		return res.json({
			msg: `create personnel was successfully`,
			payload: personnel
		})
	} catch (error) {
		return res.status(400).json({
			msg: "create personnel was failed",
			payload: {}
		})
	}
}

export const getByUser = async (req: Request, res: Response) => {
	try {
		console.log("test")
		const userId = req.user?.id
		const personnel = await PersonnelModel.findOne({
			where: { userId }
		});

		res.json({
			msg: `get one by user personnel was successfully`,
			payload: personnel
		})
	} catch (error) {
		res.status(400).json({
			msg: "get one by userpersonnel was failed",
			payload: {}
		})
	}
}

export const getOne = async (req: Request, res: Response) => {
	try {
		const id = req.params?.id
		const personnel = await PersonnelModel.findOne({
			where: { id }
		});

		res.json({
			msg: `get one personnel was successfully`,
			payload: personnel
		})
	} catch (error) {
		res.status(400).json({
			msg: "get one personnel was failed",
			payload: {}
		})
	}
}

export const getAll = async (req: Request, res: Response) => {
	try {
		const personnel = await PersonnelModel.findAll({
			attributes: {
				exclude: ['user_id']
			}
		});
		res.json({
			msg: `get one personnel was successfully`,
			payload: personnel
		})
	} catch (error) {
		res.status(400).json({
			msg: "get one personnel was failed",
			payload: {}
		})
	}
}

export const update = async (req: Request, res: Response) => {
	try {
		const id = req.params?.id
		const body = req.body;
		const personnel = await PersonnelModel.update({ ...body }, {
			where: { id }
		});
		res.json({
			msg: `update personnel was successfully`,
			payload: personnel
		})
	} catch (error) {
		res.status(400).json({
			msg: "update personnel was failed",
			payload: {}
		})
	}
}

export const updateByUser = async (req: Request, res: Response) => {
	try {
		const userId = req.user?.id
		const body = req.body;
		const personnel = await PersonnelModel.update({ ...body },{
			where: { userId }
		});

		res.json({
			msg: `update user was successfully`,
			payload: personnel
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
		const personnel = await PersonnelModel.destroy({
			where: { id }
		});
		res.json({
			msg: `delete personnel was successfully`,
			payload: personnel
		})
	} catch (error) {
		res.status(400).json({
			msg: "delete personnel was failed",
			payload: {}
		})
	}
}


export default {
	create,
	update,
	getAll,
	getOne,
	getByUser,
	updateByUser,
	remove
}