import db from "../../database/models";
import { Request, Response } from "express";
import { FormType, SupervisionFormTypeAttributes, supervisionFormTypeEnum } from "./supervision-form-type.types";
import { getPaginationMeta } from "../../common/utils/meta.util";
import { createResponse } from "../../common/utils/response.util";
const SupervisionFormTypeModel = db.SupervisionFormType


export const create = async (req: Request, res: Response) => {
    try {

        const body = req.body;

        const isSupervisionFormTypeExists = await SupervisionFormTypeModel.findOne({ where: { name: body.name } });

        if (isSupervisionFormTypeExists) {
            return res.status(400).json({
                msg: `Already have this name ${body.name}`
            })
        }

        const newSupervisionFormType = await SupervisionFormTypeModel.create(req.body)

        return res.json({
            msg: `Create supervision form name ${body.name} was successfully`,
            payload: newSupervisionFormType
        })
    } catch (error) {

        return res.status(400).json({
            msg: "Encountered an error when create supervision form!",
            payload: {}
        })
    }
}

export const getOne = async (req: Request, res: Response) => {
    try {
        const payload = await SupervisionFormTypeModel.findOne({
            where: { id: req.params.id }
        })
        return res.status(200).json({
            msg: "retrieved the data of supervision form was successfully",
            payload
        })
    } catch (error) {
        return res.status(400).json({
            msg: `Encoutered an error when retrieved the supervision form by ${req.params.id}`,
            payload: {}
        })
    }
}

export const getAll = async (req: Request, res: Response) => {
    try {
        const query = req.query;
        const page = parseInt(query.page as string) || 1; // Current page number
        const limit = parseInt(query.limit as string) || 10; // Number of records per page
        const offset = (page - 1) * limit; // Offset calculation
        const req_endpoint = `${req.protocol}://${req.get('host')}${req.originalUrl}`;
        
        let whereClause: Partial<SupervisionFormTypeAttributes> = {}; // Initialize an empty object for the where clause

        if (query.type) {
            whereClause.type = query.type as supervisionFormTypeEnum; // Add a condition for the "year" query parameter
        }

        if (query.name) {
            whereClause.name = query.name as string; // Add a condition for the "term" query parameter
        }
        if (query.schoolId) {
            whereClause.schoolId = query.schoolId as string; // Add a condition for the "term" query parameter
        }
        if (query.formType) {
            whereClause.formType = query.formType as FormType; // Add a condition for the "term" query parameter
        }
        const count = await SupervisionFormTypeModel.count({
            where: whereClause,
        });
        const payload = await SupervisionFormTypeModel.findAll({

            offset: offset,
            limit: limit,
        })
       
		const meta = getPaginationMeta(req_endpoint, page, limit, count);

		const data = {
			msg: 'Retrieved the all data of supervision form was successfully',
			meta,
			payload,
		  };

		return createResponse(res, 200, data,  'success');
        
     
    } catch (error) {
        return  createResponse(res, 400, {
            msg: `Encoutered an error when retrieved all data of supervision form `,
            payload: {}
        },  'failed'); 
    }
}

export const update = async (req: Request, res: Response) => {
    try {
        const payload = await SupervisionFormTypeModel.update({
            ...req.body,
        },
            {
                where: { id: req.params.id }
            })
        return res.status(200).json({
            msg: `Update the data of supervision form was successfully`,
            payload
        })
    } catch (error) {
        return res.status(400).json({
            msg: `Encoutered an error when update the supervision form id: ${req.params.id}`,
            payload: {}
        })
    }
}

export const destroy = async (req: Request, res: Response) => {
    try {
        const valid = await SupervisionFormTypeModel.findOne({ where: { id: req.params.id } })
        if (!valid) return res.status(400).json({
            msg: `The data where ${req.params.id} not found`,
            payload: {}
        })
        const payload = await SupervisionFormTypeModel.destroy({
            where: {
                id: req.params.id
            }
        })

        return res.status(200).json({
            msg: `Delete the data of supervision form where id  : ${req.params.id} was successfully`,
            payload
        })


    } catch (error) {
        return res.status(400).json({
            msg: `Encoutered an error when destroy the supervision by id: ${req.params.id}`,
            payload: {}
        })
    }
}

export default {
    create,
    getOne,
    getAll,
    update,
    destroy,

}