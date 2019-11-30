import { Request, Response } from "express";
import empDbServices from '../services/emp.db.services';
class EmployeeController {
    static AddEmployee = (req: Request, res: Response) => {
        if (req.body.employee_name && req.body.email && req.body.password
            && req.body.school_id && req.body.phone_number
            && req.body.subject) {
            empDbServices.CreateEMP(req.body)
                .then(data => {
                    if (data.id) {
                        res.status(200).send('Employee added');
                    } else {
                        res.status(500).send('Something went wrong')
                    }
                }).catch(e => res.status(500).send('Something went wrong'));
        }
    }
}
export default EmployeeController;