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
        if (req.body.employee_id && req.body.email && req.body.password) {
            const token = req.headers.authorization || '';
            const decodeToken: any = jwt.verify(token, JSON.stringify(process.env.secret));
            req.body.school_id = decodeToken.id;
            empDbServices.updateEmpDetails(req.body)
                .then(data => {
                    if (data.id) {
                        res.status(200).send('Employee details updated');
                    }
                })
        }
    }
}
export default EmployeeController;