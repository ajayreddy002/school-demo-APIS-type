import { Request, Response } from "express";
import empDbServices from '../services/emp.db.services';
import * as jwt from "jsonwebtoken";
require('dotenv').config();
class EmployeeController {
    static AddEmployee = (req: Request, res: Response) => {
        if (req.body.employee_name && req.body.email && req.body.password
            && req.body.school_id && req.body.phone_number
            && req.body.subject) {
            const token = req.headers.authorization || '';
            const decodeToken: any = jwt.verify(token, JSON.stringify(process.env.secret));
            req.body.school_id = decodeToken.id;
            empDbServices.CreateEMP(req.body)
                .then(data => {
                    if (data.id) {
                        res.status(200).send('Employee added');
                    } else {
                        res.status(500).send('Employee already registered please check')
                    }
                }).catch(e => res.status(500).send('Something went wrong'));
        }
    }
    static updateEmployee = (req: Request, res: Response) => {
        if (req.body.id && req.body.email && req.body.employee_name
            && req.body.phone_number) {
            console.log(req.body.id)
            const token = req.headers.authorization || '';
            const decodeToken: any = jwt.verify(token, JSON.stringify(process.env.secret));
            req.body.school_id = decodeToken.id;
            empDbServices.updateEmpDetails(req.body)
                .then(data => {
                    if (data) {
                        res.status(200).send('Employee details updated');
                    } else {
                        res.status(500).send('Failed to update')
                    }
                }).catch(e => { console.log(e), res.status(500).send('Something went wrong') });
        } else {
            res.status(500).send('Required parameters are missing');
        }
    }
    static deleteEmployee = (req: Request, res: Response) => {
        if (req.params.employee_id) {
            console.log(req.params.employee_id)
            const token = req.headers.authorization || '';
            const decodeToken: any = jwt.verify(token, JSON.stringify(process.env.secret));
            const payLoad = {
                school_id: decodeToken.id,
                id: req.params.employee_id
            }
            empDbServices.deleteEmpDetails(payLoad)
                .then(
                    data => {
                        if (data) {
                            res.status(200).send('Employee deleted');
                        } else {
                            res.status(500).send('Failed to delete')
                        }
                    }
                ).catch(e => {
                    console.log(e)
                    res.status(500).send('Something went wrong')
                })
        } else {
            res.status(500).send('Required parameters are missing');
        }
    }
}
export default EmployeeController;