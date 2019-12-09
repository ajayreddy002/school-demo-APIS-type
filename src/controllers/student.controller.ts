import { Request, Response } from 'express';
import StudentDbService from '../services/student.db.services';
class StudentController {
    static async CreateStudent(req: Request, res: Response) {
        if (req.body.student_name && req.body.school_id && req.body.parent_name
            && req.body.parent_mobile && req.body.class_name && req.body.section_name
            && req.body.address) {
            StudentDbService.addStudent(req.body)
                .then(
                    data => {
                        if (data.id) {
                            res.status(200).send('Student added');
                        } else {
                            res.status(500).send('Required params are missing');
                        }
                    }
                ).catch(e => { res.status(500).send('Somenthing went wrong') })
        } else {
            res.status(500).send('Required params are missing');
        }
    }
}
export default StudentController;