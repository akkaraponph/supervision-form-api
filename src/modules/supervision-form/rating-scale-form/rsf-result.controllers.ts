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

        const schoolSupervisionFormData = await db.SchoolSupervisionForm.findOne({ where: { id: schoolSupervisionFormId }, raw: true })

        const isSchoolExist = await ResultRSFModel.findOne({
            where: {
                RSFQuestionId, schoolSupervisionFormId
            }
        })
        let _personnelSupervisionFormId = ""
        try {
            const personnel = await db.PersonnelSchool.findOne({ where: { schoolId: schoolSupervisionFormData.schoolId }, raw: true })
            const personnelSupervisionForm = await db.PersonnelSupervisionForm.findOne({
                where: { schoolSupervisionFormId, personnelId: personnel.personnelId }, raw: true
            })
            _personnelSupervisionFormId = personnelSupervisionForm.id
        } catch {}
        
        const isPersonnelExist = await db.PersonnelResultRSF.findOne({
            where: {
                RSFQuestionId, personnelSupervisionFormId:_personnelSupervisionFormId
            }
        })
        // console.log("🚀 ~ file: rsf-result.controllers.ts:25 ~ create ~ isSchoolExist && !schoolSupervisionFormData.isSend  && !schoolSupervisionFormData.isConfirm:", isSchoolExist && !schoolSupervisionFormData.isSend  && !schoolSupervisionFormData.isConfirm)
        // console.log("🚀 ~ file: rsf-result.controllers.ts:38 ~ create ~ isSchoolExist && schoolSupervisionFormData.isSend && schoolSupervisionFormData.isConfirm:", isSchoolExist && schoolSupervisionFormData.isSend && schoolSupervisionFormData.isConfirm)
        if (isSchoolExist && !schoolSupervisionFormData.isSend) {
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
        } else if (isPersonnelExist && schoolSupervisionFormData.isSend) {

            const personnel = await db.PersonnelSchool.findOne({ where: { schoolId: schoolSupervisionFormData.schoolId }, raw: true })
            const personnelSupervisionForm = await db.PersonnelSupervisionForm.findOne({
                where: { schoolSupervisionFormId, personnelId: personnel.personnelId }, raw: true
            })

            const personnelSupervisionFormId = personnelSupervisionForm.id
            const payload = await db.PersonnelResultRSF.update({
                ...req.body
            }, {
                where: {
                    RSFQuestionId, personnelSupervisionFormId
                }
            })
            console.log("🚀 ~ file: rsf-result.controllers.ts:53 ~ create ~ payload:", payload)
            return res.json({
                msg: `Update result of the rating scale form was successfully`,
                payload
            })
        }


        if (!isSchoolExist && !schoolSupervisionFormData.isSend) {
            const payload = await ResultRSFModel.create(req.body)
            return res.json({
                msg: `Create result of the rating scale form was successfully`,
                payload
            })
        }

        if (!isPersonnelExist && schoolSupervisionFormData.isSend) {
            // const payload = req.body
            // console.log("🚀 ~ file: rsf-result.controllers.ts:70 ~ create ~ payload:", payload)
            const payload = await db.PersonnelResultRSF.create({
                RSFQuestionId,
                personnelSupervisionFormId:_personnelSupervisionFormId,
                score: req.body.score
            })
            return res.json({
                msg: `Create personnel result of the rating scale form was successfully`,
                payload
            })
        }
    } catch (error) {

        return res.status(400).json({
            msg: "Encountered an error when create result of the rating scale form form!",
            payload: { error }
        })
    }
}

export const getOneByQuestionId = async (req: Request, res: Response) => {
    try {
        const payload = await ResultRSFModel.findOne({
            where: {
                RSFQuestionId: req.params.id,
                schoolSupervisionFormId: req.query.ssid
            },
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
        const valid = await ResultRSFModel.findOne({ where: { RSFQuestionId: req.query.question_id, schoolSupervisionFormId: req.query.ssid } })
        const personnelSupervisionForm = await db.PersonnelSupervisionForm.findOne({
            where: { schoolSupervisionFormId: req.query.ssid },
            raw: true
        })
        const personnelValid = await db.PersonnelResultRSF.findOne({ where: { RSFQuestionId: req.query.question_id, personnelSupervisionFormId: personnelSupervisionForm.id } })
        if (valid) {
            const payload = await ResultRSFModel.destroy({
                where: { RSFQuestionId: req.query.question_id, schoolSupervisionFormId: req.query.ssid }
            })
            return res.status(200).json({
                msg: `Delete the data of result of the rating scale form where id  : ${req.params.id} was successfully`,
                payload
            })
        }
        if (personnelValid) {
            const payload = await db.PersonnelResultRSF.destroy({
                where: { RSFQuestionId: req.query.question_id, personnelSupervisionFormId: personnelSupervisionForm.id }
            })
            return res.status(200).json({
                msg: `Delete the data of result of the rating scale form where personnel supervision form  : ${req.params.id} was successfully`,
                payload
            })
        }
        // if (!valid) return res.status(204).json({
        //     msg: `The data where ${req.query.question_id} not found`,
        //     payload: {}
        // })





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