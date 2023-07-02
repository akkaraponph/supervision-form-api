import db from "../../../database/models";
import { Request, Response } from "express";
const CFQSubSectionModel = db.CFQSubSection
const ResultCFBQSubSectionModel = db.ResultCFBQSubSection

export const create = async (req: Request, res: Response) => {
    try {
        const payload = await ResultCFBQSubSectionModel.create(req.body)

        return res.json({
            msg: `Create rating custom form 'result boolean question of sub section' was successfully`,
            payload
        })
    } catch (error) {

        return res.status(400).json({
            msg: "Encountered an error when create rating custom form 'result boolean question of sub section' form!",
            payload: {}
        })
    }
}

export const getOne = async (req: Request, res: Response) => {
    try {
        const payload = await ResultCFBQSubSectionModel.findOne({
            where: { id: req.params.id },
            include: [
                {
                    model: CFQSubSectionModel,
                }
            ]
        })
        return res.status(200).json({
            msg: "retrieved the data of rating custom form 'result boolean question of sub section' was successfully",
            payload
        })
    } catch (error) {
        return res.status(400).json({
            msg: `Encoutered an error when retrieved the rating custom form 'result boolean question of sub section' by ${req.params.id}`,
            payload: {}
        })
    }
}

export const getAll = async (req: Request, res: Response) => {
    try {
        const payload = await ResultCFBQSubSectionModel.findAll({
            include : [
                {
                    model: CFQSubSectionModel,
                }
            ]
        })
        return res.status(200).json({
            msg: "retrieved the all data of rating custom form 'result boolean question of sub section' was successfully",
            payload
        })
    } catch (error) {
        return res.status(400).json({
            msg: `Encoutered an error when retrieved all data of rating custom form 'result boolean question of sub section' `,
            payload: {}
        })
    }
}

export const update = async (req: Request, res: Response) => {
    try {
        const payload = await ResultCFBQSubSectionModel.update({
            ...req.body,
        },
            {
                where: { id: req.params.id }
            })
        return res.status(200).json({
            msg: `Update the data of rating custom form 'result boolean question of sub section' was successfully`,
            payload
        })
    } catch (error) {
        return res.status(400).json({
            msg: `Encoutered an error when update the rating custom form 'result boolean question of sub section' id: ${req.params.id}`,
            payload: {}
        })
    }
}

export const destroy = async (req: Request, res: Response) => {
    try {
        const valid = await ResultCFBQSubSectionModel.findOne({ where: { id: req.params.id } })
        if (!valid) return res.status(400).json({
            msg: `The data where ${req.params.id} not found`,
            payload: {}
        })
        const payload = await ResultCFBQSubSectionModel.destroy({
            where: {
                id: req.params.id
            }
        })

        return res.status(200).json({
            msg: `Delete the data of rating custom form 'result boolean question of sub section' where id  : ${req.params.id} was successfully`,
            payload
        })


    } catch (error) {
        return res.status(400).json({
            msg: `Encoutered an error when destroy the rating custom form 'result boolean question of sub section' by id: ${req.params.id}`,
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