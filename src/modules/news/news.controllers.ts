import { Request, Response } from "express";
import db from "../../database/models";
const NewsModel = db.News


export const create = async (req: Request, res: Response) => {
	try {
        const body = req.body;
		const news = await NewsModel.create({ ...body});

		return res.json({
			msg: `create news was successfully`,
			payload: news
		})
	} catch (error) {
		console.log(error)
		return res.status(400).json({
			msg: "create news was failed",
			payload: {}
		})
	}
}

export const getAll = async (req: Request, res: Response) => {
	try {
		const news = await NewsModel.findAll();
		
        res.json({
			msg: `get all news was successfully`,
			payload: news
		})
	} catch (error) {
		res.status(400).json({
			msg: "get one news was failed",
			payload: {}
		})
	}
}

export const getOne = async (req: Request, res: Response) => {
	try {
		const id = req.params?.id
		const news = await NewsModel.findOne({
			where: { id }
		});

		res.json({
			msg: `get one news was successfully`,
			payload: news
		})
	} catch (error) {
		res.status(400).json({
			msg: "get one news was failed",
			payload: {}
		})
	}
}

export const update = async (req: Request, res: Response) => {
	try {
		const id = req.params?.id
		const body = req.body;
		const news = await NewsModel.update({ ...body }, {
			where: { id }
		});
		res.json({
			msg: `update news was successfully`,
			payload: news
		})
	} catch (error) {
		res.status(400).json({
			msg: "update news was failed",
			payload: {}
		})
	}
}

export const remove = async (req: Request, res: Response) => {
	try {
		const id = req.params?.id
		const news = await NewsModel.destroy({
			where: { id }
		});
		res.json({
			msg: `delete news was successfully`,
			payload: news
		})
	} catch (error) {
		res.status(400).json({
			msg: "delete news was failed",
			payload: {}
		})
	}
}


export default {
	create,
    getAll,
    getOne,
    update,
    remove
}