import db from "../../../database/models";
import { Request, Response } from "express";
const CFSectionModel = db.CFSection
const CFQSectionModel = db.CFQSection

export const create = async (req: Request, res: Response) => {
    try {
        const payload = await CFQSectionModel.create(req.body)

        return res.json({
            msg: `Create rating custom form 'question of section' was successfully`,
            payload
        })
    } catch (error) {

        return res.status(400).json({
            msg: "Encountered an error when create rating custom form 'question of section' form!",
            payload: {}
        })
    }
}

export const getOne = async (req: Request, res: Response) => {
    try {
        const payload = await CFQSectionModel.findOne({
            where: { id: req.params.id },
            include: [
                {
                    model: CFSectionModel,
                }
            ]
        })
        return res.status(200).json({
            msg: "retrieved the data of rating custom form 'question of section' was successfully",
            payload
        })
    } catch (error) {
        return res.status(400).json({
            msg: `Encoutered an error when retrieved the rating custom form 'question of section' by ${req.params.id}`,
            payload: {}
        })
    }
}

export const getAll = async (req: Request, res: Response) => {
    try {
        const payload = await CFQSectionModel.findAll({
            include : [
                {
                    model: CFSectionModel,
                }
            ]
        })
        return res.status(200).json({
            msg: "retrieved the all data of rating custom form 'question of section' was successfully",
            payload
        })
    } catch (error) {
        return res.status(400).json({
            msg: `Encoutered an error when retrieved all data of rating custom form 'question of section' `,
            payload: {}
        })
    }
}

export const update = async (req: Request, res: Response) => {
    try {
        const payload = await CFQSectionModel.update({
            ...req.body,
        },
            {
                where: { id: req.params.id }
            })
        return res.status(200).json({
            msg: `Update the data of rating custom form 'question of section' was successfully`,
            payload
        })
    } catch (error) {
        return res.status(400).json({
            msg: `Encoutered an error when update the rating custom form 'question of section' id: ${req.params.id}`,
            payload: {}
        })
    }
}

export const destroy = async (req: Request, res: Response) => {
    try {
        const valid = await CFQSectionModel.findOne({ where: { id: req.params.id } })
        if (!valid) return res.status(400).json({
            msg: `The data where ${req.params.id} not found`,
            payload: {}
        })
        const payload = await CFQSectionModel.destroy({
            where: {
                id: req.params.id
            }
        })

        return res.status(200).json({
            msg: `Delete the data of rating custom form 'question of section' where id  : ${req.params.id} was successfully`,
            payload
        })


    } catch (error) {
        return res.status(400).json({
            msg: `Encoutered an error when destroy the rating custom form 'question of section' by id: ${req.params.id}`,
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