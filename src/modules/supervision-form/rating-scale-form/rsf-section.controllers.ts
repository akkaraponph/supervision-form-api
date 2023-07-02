import db from "../../../database/models";
import { Request, Response } from "express";
const SupervisionFormModel = db.SupervisionForm
const RSFSectionModel = db.RSFSection

export const create = async (req: Request, res: Response) => {
    try {
        const payload = await RSFSectionModel.create(req.body)

        return res.json({
            msg: `Create rating scale form 'section' was successfully`,
            payload
        })
    } catch (error) {

        return res.status(400).json({
            msg: "Encountered an error when create rating scale form 'section' form!",
            payload: {}
        })
    }
}

export const getOne = async (req: Request, res: Response) => {
    try {
        const payload = await RSFSectionModel.findOne({
            where: { id: req.params.id },
            include: [
                {
                    model: SupervisionFormModel,
                }
            ]
        })
        return res.status(200).json({
            msg: "retrieved the data of rating scale form 'section' was successfully",
            payload
        })
    } catch (error) {
        return res.status(400).json({
            msg: `Encoutered an error when retrieved the rating scale form 'section' by ${req.params.id}`,
            payload: {}
        })
    }
}

export const getAll = async (req: Request, res: Response) => {
    try {
        const payload = await RSFSectionModel.findAll({
            include : [
                {
                    model: SupervisionFormModel,
                }
            ]
        })
        return res.status(200).json({
            msg: "retrieved the all data of rating scale form 'section' was successfully",
            payload
        })
    } catch (error) {
        return res.status(400).json({
            msg: `Encoutered an error when retrieved all data of rating scale form 'section' `,
            payload: {}
        })
    }
}

export const update = async (req: Request, res: Response) => {
    try {
        const payload = await RSFSectionModel.update({
            ...req.body,
        },
            {
                where: { id: req.params.id }
            })
        return res.status(200).json({
            msg: `Update the data of rating scale form 'section' was successfully`,
            payload
        })
    } catch (error) {
        return res.status(400).json({
            msg: `Encoutered an error when update the rating scale form 'section' id: ${req.params.id}`,
            payload: {}
        })
    }
}

export const destroy = async (req: Request, res: Response) => {
    try {
        const valid = await RSFSectionModel.findOne({ where: { id: req.params.id } })
        if (!valid) return res.status(400).json({
            msg: `The data where ${req.params.id} not found`,
            payload: {}
        })
        const payload = await RSFSectionModel.destroy({
            where: {
                id: req.params.id
            }
        })

        return res.status(200).json({
            msg: `Delete the data of rating scale form 'section' where id  : ${req.params.id} was successfully`,
            payload
        })


    } catch (error) {
        return res.status(400).json({
            msg: `Encoutered an error when destroy the rating scale form 'section' by id: ${req.params.id}`,
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