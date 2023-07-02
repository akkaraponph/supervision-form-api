import db from "../../../database/models";
import { Request, Response } from "express";
const ResultQFBQModel = db.ResultQFBQ

export const create = async (req: Request, res: Response) => {
    try {
        const payload = await ResultQFBQModel.create(req.body)

        return res.json({
            msg: `Create question form 'result boolean question' was successfully`,
            payload
        })
    } catch (error) {

        return res.status(400).json({
            msg: "Encountered an error when create question form 'result boolean question' form!",
            payload: {}
        })
    }
}

export const getOne = async (req: Request, res: Response) => {
    try {
        const payload = await ResultQFBQModel.findOne({
            where: { id: req.params.id },
            include: [
                {
                    model: db.SchoolSupervisionForm,
                }
            ]
        })
        return res.status(200).json({
            msg: "retrieved the data of question form 'result boolean question' was successfully",
            payload
        })
    } catch (error) {
        return res.status(400).json({
            msg: `Encoutered an error when retrieved the question form 'result boolean question' by ${req.params.id}`,
            payload: {}
        })
    }
}

export const getAll = async (req: Request, res: Response) => {
    try {
        const payload = await ResultQFBQModel.findAll({
            include: [
                {
                    model: db.SchoolSupervisionForm,
                }
            ]
        })
        return res.status(200).json({
            msg: "retrieved the all data of question form 'result boolean question' was successfully",
            payload
        })
    } catch (error) {
        return res.status(400).json({
            msg: `Encoutered an error when retrieved all data of question form 'result boolean question' `,
            payload: {}
        })
    }
}

export const update = async (req: Request, res: Response) => {
    try {
        const payload = await ResultQFBQModel.update({
            ...req.body,
        },
            {
                where: { id: req.params.id }
            })
        return res.status(200).json({
            msg: `Update the data of question form 'result boolean question' was successfully`,
            payload
        })
    } catch (error) {
        return res.status(400).json({
            msg: `Encoutered an error when update the question form 'result boolean question' id: ${req.params.id}`,
            payload: {}
        })
    }
}

export const destroy = async (req: Request, res: Response) => {
    try {
        const valid = await ResultQFBQModel.findOne({ where: { id: req.params.id } })
        if (!valid) return res.status(400).json({
            msg: `The data where ${req.params.id} not found`,
            payload: {}
        })
        const payload = await ResultQFBQModel.destroy({
            where: {
                id: req.params.id
            }
        })

        return res.status(200).json({
            msg: `Delete the data of question form 'result boolean question' where id  : ${req.params.id} was successfully`,
            payload
        })


    } catch (error) {
        return res.status(400).json({
            msg: `Encoutered an error when destroy the question form 'result boolean question' by id: ${req.params.id}`,
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