import { Request, Response } from "express";
import schoolDbService from '../services/schoolDbServices'
import EmployeeDbServices from "../services/emp.db.services";
import * as jwt from "jsonwebtoken";
import bcrypt from 'bcrypt';
import LoginTableService from "../services/login.db.service";
const saltRounds = 10;
require('dotenv').config();
class SchoolController {
    static AddSchool = (req: Request, res: Response) => {
        if (req.body.school_name && req.body.email && req.body.password && req.body.user_name &&
            req.body.school_address && req.body.phone_number) {
            bcrypt.hash(req.body.password, saltRounds, function (err, hash) {
                if (hash) {
                    req.body.password = hash;
                    schoolDbService.CreateSchool(req.body)
                        .then(data => {
                            if (data.id) {
                                const logiData = {
                                    email: req.body.email,
                                    password: hash
                                }
                                LoginTableService.CreateLogin(logiData)
                                    .then((success: any) => {
                                        res.status(200).send('School registered successfully');
                                    }).catch(e => {
                                        console.log(e, 'error')
                                        res.status(500).send('Email already registered');
                                    })
                            }
                        }).catch(error => {
                            console.log(error, 'error')
                            res.status(500).send('Email already registered');
                        })
                } else {
                    res.status(500).send('Something went wrong');
                }
            });
        } else {
            res.status(500).send('Required parameters are missing');
        }
    }
    static getLoginDetails = (req: Request, res: Response) => {
        if (req.body.email && req.body.password) {
            schoolDbService.schoolAdminLogin(req.body)
                .then((data) => {
                    if (data.length > 0) {
                        const secret = process.env.secret;
                        const payload = { email: data[0].email, school_name: data[0].school_name, user_name: data[0].user_name, id: data[0].id };
                        // const iat = Math.floor(Date.now() / 1000) - 30;
                        const options = { expiresIn: '3h' };
                        const token = jwt.sign(payload, JSON.stringify(secret), options);
                        res.status(200).send({ userDetails: data, token: token })
                    } else {
                        res.status(403).send('User not exists')
                    }
                }).catch(e => { console.log(e), res.status(403).send('User not exists') })
        } else {
            res.status(500).send('Required parameters are missing');
        }
    }
    static getEmployees = (req: Request, res: Response) => {
        console.log(req.params.school_id)
        if (req.params.school_id) {
            const token = req.headers.authorization || '';
            const decodeToken: any = jwt.verify(token, JSON.stringify(process.env.secret));
            EmployeeDbServices.listEmployees(decodeToken.id)
                .then(data => {
                    res.status(200).send({ staffList: data })
                }).catch(e => res.status(500).send('something went wrong'))
        }
    }
}
export default SchoolController;