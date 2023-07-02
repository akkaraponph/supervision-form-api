import db from "../../../database/models";
import { Request, Response } from "express";
const CFQSectionModel = db.CFQSection
const ResultCFOEQSectionModel = db.ResultCFOEQSection

export const create = async (req: Request, res: Response) => {
    try {
        const payload = await ResultCFOEQSectionModel.create(req.body)

        return res.json({
            msg: `Create rating custom form 'result open end question of section' was successfully`,
            payload
        })
    } catch (error) {

        return res.status(400).json({
            msg: "Encountered an error when create rating custom form 'result open end question of section' form!",
            payload: {}
        })
    }
}

export const getOne = async (req: Request, res: Response) => {
    try {
        const payload = await ResultCFOEQSectionModel.findOne({
            where: { id: req.params.id },
            include: [
                {
                    model: CFQSectionModel,
                }
            ]
        })
        return res.status(200).json({
            msg: "retrieved the data of rating custom form 'result open end question of section' was successfully",
            payload
        })
    } catch (error) {
        return res.status(400).json({
            msg: `Encoutered an error when retrieved the rating custom form 'result open end question of section' by ${req.params.id}`,
            payload: {}
        })
    }
}

export const getAll = async (req: Request, res: Response) => {
    try {
        const payload = await ResultCFOEQSectionModel.findAll({
            include : [
                {
                    model: CFQSectionModel,
                }
            ]
        })
        return res.status(200).json({
            msg: "retrieved the all data of rating custom form 'result open end question of section' was successfully",
            payload
        })
    } catch (error) {
        return res.status(400).json({
            msg: `Encoutered an error when retrieved all data of rating custom form 'result open end question of section' `,
            payload: {}
        })
    }
}

export const update = async (req: Request, res: Response) => {
    try {
        const payload = await ResultCFOEQSectionModel.update({
            ...req.body,
        },
            {
                where: { id: req.params.id }
            })
        return res.status(200).json({
            msg: `Update the data of rating custom form 'result open end question of section' was successfully`,
            payload
        })
    } catch (error) {
        return res.status(400).json({
            msg: `Encoutered an error when update the rating custom form 'result open end question of section' id: ${req.params.id}`,
            payload: {}
        })
    }
}

export const destroy = async (req: Request, res: Response) => {
    try {
        const valid = await ResultCFOEQSectionModel.findOne({ where: { id: req.params.id } })
        if (!valid) return res.status(400).json({
            msg: `The data where ${req.params.id} not found`,
            payload: {}
        })
        const payload = await ResultCFOEQSectionModel.destroy({
            where: {
                id: req.params.id
            }
        })

        return res.status(200).json({
            msg: `Delete the data of rating custom form 'result open end question of section' where id  : ${req.params.id} was successfully`,
            payload
        })


    } catch (error) {
        return res.status(400).json({
            msg: `Encoutered an error when destroy the rating custom form 'result open end question of section' by id: ${req.params.id}`,
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