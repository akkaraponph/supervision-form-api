import db from "../../../database/models";
import { Request, Response } from "express";
const CFSectionModel = db.CFSection
const CFSubSectionModel = db.CFSubSection

export const create = async (req: Request, res: Response) => {
    try {
        const payload = await CFSubSectionModel.create(req.body)

        return res.json({
            msg: `Create rating custom form 'sub section' was successfully`,
            payload
        })
    } catch (error) {

        return res.status(400).json({
            msg: "Encountered an error when create rating custom form 'sub section' form!",
            payload: {}
        })
    }
}

export const getOne = async (req: Request, res: Response) => {
    try {
        const payload = await CFSubSectionModel.findOne({
            where: { id: req.params.id },
            include: [
                {
                    model: CFSectionModel,
                }
            ]
        })
        return res.status(200).json({
            msg: "retrieved the data of rating custom form 'sub section' was successfully",
            payload
        })
    } catch (error) {
        return res.status(400).json({
            msg: `Encoutered an error when retrieved the rating custom form 'sub section' by ${req.params.id}`,
            payload: {}
        })
    }
}

export const getAll = async (req: Request, res: Response) => {
    try {
        const payload = await CFSubSectionModel.findAll({
            include : [
                {
                    model: CFSectionModel,
                }
            ]
        })
        return res.status(200).json({
            msg: "retrieved the all data of rating custom form 'sub section' was successfully",
            payload
        })
    } catch (error) {
        return res.status(400).json({
            msg: `Encoutered an error when retrieved all data of rating custom form 'sub section' `,
            payload: {}
        })
    }
}

export const update = async (req: Request, res: Response) => {
    try {
        const payload = await CFSubSectionModel.update({
            ...req.body,
        },
            {
                where: { id: req.params.id }
            })
        return res.status(200).json({
            msg: `Update the data of rating custom form 'sub section' was successfully`,
            payload
        })
    } catch (error) {
        return res.status(400).json({
            msg: `Encoutered an error when update the rating custom form 'sub section' id: ${req.params.id}`,
            payload: {}
        })
    }
}

export const destroy = async (req: Request, res: Response) => {
    try {
        const valid = await CFSubSectionModel.findOne({ where: { id: req.params.id } })
        if (!valid) return res.status(400).json({
            msg: `The data where ${req.params.id} not found`,
            payload: {}
        })
        const payload = await CFSubSectionModel.destroy({
            where: {
                id: req.params.id
            }
        })

        return res.status(200).json({
            msg: `Delete the data of rating custom form 'sub section' where id  : ${req.params.id} was successfully`,
            payload
        })


    } catch (error) {
        return res.status(400).json({
            msg: `Encoutered an error when destroy the rating custom form 'sub section' by id: ${req.params.id}`,
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