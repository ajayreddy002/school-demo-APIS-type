import { Request, Response } from "express";
import schoolDbService from '../services/schoolDbServices'
import { ILoginData } from "../_interfaces/login.model";
class SchoolController {
    static AddSchool = (req: Request, res: Response) => {
        if (req.body.school_name && req.body.email && req.body.password && req.body.user_name &&
            req.body.school_address && req.body.phone_number) {
            schoolDbService.CreateSchool(req.body)
                .then(data => {
                    if (data.id) {
                        res.status(200).send('School registered successfully');
                    }
                }).catch(error => {
                    console.log(error, 'error')
                    res.status(500).send('Email already registered');
                })
        } else {
            res.status(500).send('Required parameters are missing');
        }
    }
    static getLoginDetails = (req: Request, res: Response) => {
        if (req.body.email && req.body.password) {
            schoolDbService.schoolAdminLogin(req.body)
                .then((data) => {
                    if (data.length > 0) {
                        delete data[0].password;
                        let adminDetails: ILoginData = {
                            id: data[0].id,
                            school_name: data[0].school_name,
                            email: data[0].email,
                            user_name: data[0].user_name,
                            phone_number: data[0].phone_number,
                            school_address: data[0].school_address,
                        };
                        res.status(200).send({ userDetails: [adminDetails] })
                    } else {
                        res.status(403).send('User not exists')
                    }
                }).catch(e => { res.status(403).send('User not exists') })
        } else {
            res.status(500).send('Required parameters are missing');
        }
    }
}
export default SchoolController;