import db from "../../../database/models";
import { Request, Response } from "express";
const ResultRSFModel = db.ResultRSF
const RSFQuestionModel = db.RSFQuestion

export const create = async (req: Request, res: Response) => {
    try {
        /**
         * Body
            score!: number;
            RSFQuestionId!: string;
            schoolId!: string;
            schoolSupervisionFormId!: string;
        */
        const { RSFQuestionId, schoolSupervisionFormId } = req.body
        // console.log("--------------");

        // console.log(req.body)
        // console.log(schoolId, schoolSupervisionFormId)
        // console.log("--------------");
        const isExist = await ResultRSFModel.findOne({
            where: {
                RSFQuestionId,   schoolSupervisionFormId
            }
        })
        if (isExist) {
            const payload = await ResultRSFModel.update({
                ...req.body
            }, {
                where: {
                    RSFQuestionId, schoolSupervisionFormId
                }
            })
            return res.json({
                msg: `Update result of the rating scale form was successfully`,
                payload
            })
        } else {
            const payload = await ResultRSFModel.create(req.body)
            return res.json({
                msg: `Create result of the rating scale form was successfully`,
                payload
            })
        }
    } catch (error) {
 
        return res.status(400).json({
            msg: "Encountered an error when create result of the rating scale form form!",
            payload: {error}
        })
    }
}
export const getOneByQuestionId = async(req:Request, res: Response) =>{
    try {
        const payload = await ResultRSFModel.findOne({
            where: { RSFQuestionId: req.params.id,
            schoolSupervisionFormId: req.query.ssid },
            include: [
                {
                    model: RSFQuestionModel,
                }
            ]
        })
        return res.status(200).json({
            msg: "retrieved the data of result of the rating scale form was successfully",
            payload
        })
    } catch(error) {
        return res.status(400).json({
            msg: `Encoutered an error when retrieved the result of the rating scale form by ${req.params.id}`,
            payload: {}
        })
    }
}

export const getOne = async (req: Request, res: Response) => {
    try {
        const payload = await ResultRSFModel.findOne({
            where: { id: req.params.id },
            include: [
                {
                    model: RSFQuestionModel,
                }
            ]
        })
        return res.status(200).json({
            msg: "retrieved the data of result of the rating scale form was successfully",
            payload
        })
    } catch (error) {
        return res.status(400).json({
            msg: `Encoutered an error when retrieved the result of the rating scale form by ${req.params.id}`,
            payload: {}
        })
    }
}

export const getAll = async (req: Request, res: Response) => {
    try {
        const payload = await ResultRSFModel.findAll({
            include: [
                {
                    model: RSFQuestionModel,
                }
            ]
        })
        return res.status(200).json({
            msg: "retrieved the all data of result of the rating scale form was successfully",
            payload
        })
    } catch (error) {
        return res.status(400).json({
            msg: `Encoutered an error when retrieved all data of result of the rating scale form `,
            payload: {}
        })
    }
}

export const update = async (req: Request, res: Response) => {
    try {
        const payload = await ResultRSFModel.update({
            ...req.body,
        },
            {
                where: { id: req.params.id }
            })
        return res.status(200).json({
            msg: `Update the data of result of the rating scale form was successfully`,
            payload
        })
    } catch (error) {
        return res.status(400).json({
            msg: `Encoutered an error when update the result of the rating scale form id: ${req.params.id}`,
            payload: {}
        })
    }
}

export const destroy = async (req: Request, res: Response) => {
    try {
        const valid = await ResultRSFModel.findOne({ where: { RSFQuestionId: req.query.question_id,  schoolSupervisionFormId: req.query.ssid } })
        if (!valid) return res.status(204).json({
            msg: `The data where ${req.query.question_id} not found`,
            payload: {}
        })
        const payload = await ResultRSFModel.destroy({
            where: { RSFQuestionId: req.query.question_id,  schoolSupervisionFormId: req.query.ssid }
        })

        return res.status(200).json({
            msg: `Delete the data of result of the rating scale form where id  : ${req.params.id} was successfully`,
            payload
        })


    } catch (error) {
        return res.status(400).json({
            msg: `Encoutered an error when destroy the result of the rating scale form by id: ${req.params.id}`,
            payload: {}
        })
    }
}

export default {
    getOne,
    getOneByQuestionId,
    getAll,
    create,
    update,
    destroy
}