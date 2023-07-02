import { JWT_SECRET } from "../common/constants/common.constants";
import { NextFunction, Request, Response } from "express";
import jwt from 'jsonwebtoken';
import { TokenPayload } from "../modules/user/user.types";
import db from "../database/models"

const UserModel = db.User

export const authMiddleware = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
	try {
		// Bearer token
		// ['Bearer', 'token']
		const token = req.headers.authorization?.split(' ')[1] as string;
		// console.log("======== middleware ==========")
		// console.log(req.headers.authorization?.split(' '))
		if (!token) {
			return res.status(401).json({
				msg: "No token provided",
				payload: {}
			})
		} else {
			const decodedToken = jwt.verify(token, JWT_SECRET as string) as unknown as TokenPayload;
			if (new Date().getTime() > decodedToken.exp * 1000) {
				return res.status(401).json({
					msg: "Token expired",
					payload: {}
				})
			}
			const user = await UserModel.findByPk(decodedToken.sub, { raw: true })
			if (!user) {
				return res.status(401).json({
					msg: "Unauthorized",
					payload: {}
				})
			}

			req.user = user;
			next();
		}
	} catch (error) {
		res.status(401).json({
			msg: "Unauthorized",
			payload: {}
		})
	}
}