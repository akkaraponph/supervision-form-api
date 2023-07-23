import { Request, Response } from "express";
import db from "../../database/models";
import jwt from 'jsonwebtoken';
import { hashPassword, verifyPassword } from "../../common/utils/password-hasher.util";
import { createJwtToken } from "../../common/utils/create-jwt-token.util";
import { UserRole } from "./user.types";
const UserModel = db.User
const SchoolModel = db.School
const PersonnelModel = db.Personnel

export const getAll = async (req: Request, res: Response) => {
    try {
        const payload = await UserModel.findAll({
            attributes: {
                exclude: ['password'],
            },
            include: [
                {
                    model: SchoolModel,
                    attrbutes: ['user_id']
                },
                {
                    model: PersonnelModel, attributes: {
                        exclude: ['userId']
                    }
                }
            ]
        });

        return res.status(200).json({
            msg: `get users Successfully`,
            payload
        })
    } catch (error) {
        // console.log(error)

        return res.status(400).json({
            msg: "get users was failed",
            payload: {}
        })
    }
}

export const getOne = async (req: Request, res: Response) => {
    try {
        const id = req.params?.id;
        const payload = await UserModel.findOne({
            where: { id },
            attributes: {
                exclude: ['password'],
            },
            include: [
                {
                    model: SchoolModel,
                    attrbutes: {
                        exclude: ['user_id']
                    }
                },
                {
                    model: PersonnelModel, attributes: {
                        exclude: ['userId']
                    }
                }
            ]
        });

        return res.status(200).json({
            msg: `get users Successfully`,
            payload
        })
    } catch (error) {
        console.log(error)
        return res.status(400).json({
            msg: "get users was failed",
            payload: {}
        })
    }
}

export const me = async (req: Request, res: Response) => {
    console.log("====================")
    try {
        const user = req.user;

        const payload = await UserModel.findOne({
            where: { id: user?.id },
            attributes: {
                exclude: ['password'],
            },
            include: [
                {
                    model: SchoolModel as null,
                    attrbutes: {
                        exclude: ['userId']
                    }
                },
                {
                    model: PersonnelModel, attributes: {
                        exclude: ['userId']
                    }
                }
            ]
        });
        return res.status(200).json({
            msg: `get profile Successfully`,
            payload
        })
    } catch (error) {
        console.log("==================")
        console.log(error)
        console.log("==================")
        return res.status(400).json({
            msg: "get profile was failed",
            payload: { error }
        })
    }
}


export const create = async (req: Request, res: Response) => {
    try {
        const body = req.body;
        const username = body.username as string;
        if (!username) return res.status(400).json({ msg: 'create user was failed', payload: {} })
        const user = await UserModel.findOne({
            where: { username }, attributes: {
                exclude: ['password']
            }
        });

        if (user) {
            return res.status(400).json({
                msg: `Already have this account ${body.username}`,
                payload: user
            })
        }
        const hashedPassword = await hashPassword(body.password)
        delete body.password
        const newUser = {
            ...body, password: hashedPassword
        }
        // console.log(newUser)
        const createUserresponse = await UserModel.create(newUser, { raw: true })
        const createUser = createUserresponse['dataValues']
        if (createUser.status === UserRole.USER) {
           const newSchool =  await SchoolModel.create({
                userId: createUser.id,
                idSchool: "",
                name: "",
                size: "",
                district: "",
                email: createUser.email,
                tel: "",
                address: "",
                junior: "",
                senior: "",
                director: "",
                nTeacher: "",
                nPersnonel: "",
                teachingStyle: "",
                openClass: "",
            })
            const allSupervisionForm = await db.SupervisionForm.findAll({raw:true})
            allSupervisionForm.map(async(row:any)=>{
                await db.SchoolSupervisionForm.create({
                    schoolId: newSchool['dataValues'].id,
                    supervisionFormId: row.id,
                    year: row.year,
                    term: row.term,
                    supervisorName: "",
                    supervisorPosition: "",
                })
            })
        } else if (createUser.status === UserRole.PERSONNEL || UserRole.ADMIN) {
            await PersonnelModel.create({
                "idPersonnel": "",
                "name": "",
                "lastname": "",
                "position": "",
                "group": "",
                "email": createUser.email,
                "address": "",
                "tel": "",
                userId: createUser.id,
            })
        }

        const payload = await UserModel.findOne({
            where: { id: createUser.id },
            include: [{
                model: SchoolModel, attributes: {
                    exclude: ['userId']
                }
            },
            {
                model: PersonnelModel, attributes: {
                    exclude: ['userId']
                }
            }]
        })
        delete payload['dataValues'].password
        return res.json({
            msg: `create user was successfully`,
            payload
        })


    } catch (error) {
        console.log(error)
        return res.status(400).json({
            msg: "Upps cannot create user!!",
            payload: {}
        })
    }
}

export const register = async (req: Request, res: Response) => {
    try {

        const body = req.body;

        const user = await UserModel.findOne({ where: { username: body.username } });

        if (user) {
            return res.status(400).json({
                msg: `Already have this account ${body.username}`
            })
        }

        const hashedPassword = await hashPassword(body.password)
        delete body.password
        const newUser = {
            ...body, password: hashedPassword
        }
        await UserModel.create(newUser)
        delete newUser.password
        return res.json({
            msg: `Add User ${body.username} Successfully`,
            payload: newUser
        })
    } catch (error) {
        return res.status(400).json({
            msg: "Upps cannot create user!!",
            payload: {}
        })
    }
}



export const login = async (req: Request, res: Response) => {
    try {
        const { username, password } = req.body;
        const user = await UserModel.findOne({
            where: {
                username
            }, raw: true
        });
        if (!user) {
            return res.status(400).json({
                msg: "Invalid username or password",
                payload: {}
            })
        }

        const passwordMatch = await verifyPassword(password, user.password);

        if (!passwordMatch) {
            return res.status(400).json({
                msg: "Invalid username or password",
                payload: {}
            })
        }
        const schoolData = await SchoolModel.findOne({
            where: { userId: user.id },
            raw:true
        })
        let sid = "";
        if (schoolData) {
            sid = schoolData.id
        }
        console.log(schoolData)
        // const token = jwt.sign({ id: user.id, role: user.role, name: user.name }, "test", { expiresIn: '1h' });
        const token: string = createJwtToken({
            sub: user.id,
            status: user.status,
            name: user.username,
            sid : sid
        })
        delete user.password
        return res.status(200).json({
            msg: "login was successfully",
            payload: {
                user,
                token
            }
        })
    } catch (error) {
        return res.status(400).json({
            msg: "Unable to log in",
            payload: {}
        })
    }
}

export const update = async (req: Request, res: Response) => {
    try {
        const body = req.body
        const id = req.params?.id;

        if (!id) {
            return res.status(400).json({
                msg: "update user was failed the id was required",
                payload: {}
            })
        }

        if (body.password != "" && body.password != null) {
            const hash = await hashPassword(body.password)
            delete body.password
            const updateData = { ...body, password: hash }

            // console.log(updateData)
            const payload = await UserModel.update(updateData, {
                where: { id }
            })
            return res.status(200).json({
                msg: "update user was successfully",
                payload
            })
        } else {
            delete body.password
            const payload = await UserModel.update({ ...body }, {
                where: { id }
            })
            return res.status(200).json({
                msg: "update user was successfully",
                payload
            })
        }

    } catch (error) {
        return res.status(400).json({
            msg: "update user was failed",
            payload: {}
        })
    }
}

export const remove = async (req: Request, res: Response) => {
    try {
        const id = req.params?.id;
        if (!id) {
            return res.status(400).json({
                msg: "delete user was failed the id was required",
                payload: {}
            })
        }
        const payload = await UserModel.destroy({
            where: { id }
        })
        return res.status(200).json({
            msg: "delete user was successfully",
            payload
        })
    } catch (error) {
        return res.status(400).json({
            msg: "delete user was failed",
            payload: {}
        })
    }
}

export default {
    getAll,
    create,
    login,
    update,
    remove,
    getOne,
    register,
    me
}