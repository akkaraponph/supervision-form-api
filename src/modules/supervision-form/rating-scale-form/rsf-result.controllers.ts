import db from "../../../database/models";
import { Request, Response } from "express";
const ResultRSFModel = db.ResultRSF
const RSFQuestionModel = db.RSFQuestion

export const create = async (req: Request, res: Response) => {
    try {
        const payload = await ResultRSFModel.create(req.body)
        return res.json({
            msg: `Create result of the rating scale form was successfully`,
            payload
        })
    } catch (error) {

        return res.status(400).json({
            msg: "Encountered an error when create result of the rating scale form form!",
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
            include : [
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
        const valid = await ResultRSFModel.findOne({ where: { id: req.params.id } })
        if (!valid) return res.status(400).json({
            msg: `The data where ${req.params.id} not found`,
            payload: {}
        })
        const payload = await ResultRSFModel.destroy({
            where: {
                id: req.params.id
            }
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
    create,
    getOne,
    getAll,
    update,
    destroy
}