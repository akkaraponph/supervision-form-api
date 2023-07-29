import { Request, Response } from "express";
import db from "../../database/models";
import fs from 'fs';
import path from 'path';
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

		const personnel = await PersonnelModel.create({ ...body });

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

		// console.log("===============")
		// console.log(id);
		// console.log(body);
		// console.log("===============")

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
		console.log("===================")
		console.log(body)
		console.log("===================")

		const personnel = await PersonnelModel.update({ ...body }, {
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
export const getImage = async (req: Request, res: Response) => {
	try {
		const imageName = req.params.name;
		const imagePath = path.join(__dirname, '../../../public/uploads/', imageName);
		// const imagePath = `public/uploads/${imageName}`// No need to add 'public/uploads/'
    	res.sendFile(imagePath);
	} catch (err) {
		console.error(err);
		res.status(400).json({ error: 'Internal server error' });
	}
}

export const uploadImage = async (req: Request, res: Response) => {
	try {
		const uid = req.user?.id;
		const resPrsonnel = await db.Personnel.findOne({
			where: { userId: uid }, raw: true
		})

		const personnelId = resPrsonnel.id

		// Check if the file was uploaded successfully
		if (!req.file) {
			return res.status(400).json({ error: 'No image file uploaded' });
		}
		const imageFilePath = req.file.filename;

		// Find the personnel by id
		const personnel = await db.Personnel.findOne({ where: { id: personnelId }, raw: true });

		if (!personnel) {
			return res.status(404).json({ error: 'Personnel not found' });
		}
		console.log(personnel.image)
		if (personnel.image) {
			// Construct the full path to the image file
			
			const imagePath = `public/uploads/${personnel.image}`
			if (fs.existsSync(imagePath)) {
				try {
					fs.unlinkSync(imagePath);
					console.log('Previous image removed:', imagePath);
				} catch (err) {
					console.error('Error removing previous image:', err);
				}
			}
		}

		// Update the personnel's image property with the file path
		await db.Personnel.update({ ...personnel, image: imageFilePath }, {
			where: { id: personnelId }
		})

		// Respond with a success message or other response
		res.json({ message: 'Personnel image uploaded successfully!' });
	} catch (err) {
		console.error(err);
		res.status(500).json({ error: 'Internal server error' });
	}
}

export default {
	create,
	update,
	getAll,
	getOne,
	getByUser,
	updateByUser,
	remove,
	uploadImage,
	getImage
}