import db from "../../../database/models";
import { Request, Response } from "express";
const ResultQFOEQModel = db.ResultQFOEQ

export const create = async (req: Request, res: Response) => {
    try {
        const payload = await ResultQFOEQModel.create(req.body)

        return res.json({
            msg: `Create question form 'result open end question' was successfully`,
            payload
        })
    } catch (error) {

        return res.status(400).json({
            msg: "Encountered an error when create question form 'result open end question' form!",
            payload: {}
        })
    }
}

export const getOne = async (req: Request, res: Response) => {
    try {
        const payload = await ResultQFOEQModel.findOne({
            where: { id: req.params.id },
            include: [
                {
                    model: db.SchoolSupervisionForm,
                }
            ]
        })
        return res.status(200).json({
            msg: "retrieved the data of question form 'result open end question' was successfully",
            payload
        })
    } catch (error) {
        return res.status(400).json({
            msg: `Encoutered an error when retrieved the question form 'result open end question' by ${req.params.id}`,
            payload: {}
        })
    }
}

export const getAll = async (req: Request, res: Response) => {
    try {
        const payload = await ResultQFOEQModel.findAll({
            include: [
                {
                    model: db.SchoolSupervisionForm,
                }
            ]
        })
        return res.status(200).json({
            msg: "retrieved the all data of question form 'result open end question' was successfully",
            payload
        })
    } catch (error) {
        return res.status(400).json({
            msg: `Encoutered an error when retrieved all data of question form 'result open end question' `,
            payload: {}
        })
    }
}

export const update = async (req: Request, res: Response) => {
    try {
        const payload = await ResultQFOEQModel.update({
            ...req.body,
        },
            {
                where: { id: req.params.id }
            })
        return res.status(200).json({
            msg: `Update the data of question form 'result open end question' was successfully`,
            payload
        })
    } catch (error) {
        return res.status(400).json({
            msg: `Encoutered an error when update the question form 'result open end question' id: ${req.params.id}`,
            payload: {}
        })
    }
}

export const destroy = async (req: Request, res: Response) => {
    try {
        const valid = await ResultQFOEQModel.findOne({ where: { id: req.params.id } })
        if (!valid) return res.status(400).json({
            msg: `The data where ${req.params.id} not found`,
            payload: {}
        })
        const payload = await ResultQFOEQModel.destroy({
            where: {
                id: req.params.id
            }
        })

        return res.status(200).json({
            msg: `Delete the data of question form 'result open end question' where id  : ${req.params.id} was successfully`,
            payload
        })


    } catch (error) {
        return res.status(400).json({
            msg: `Encoutered an error when destroy the question form 'result open end question' by id: ${req.params.id}`,
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