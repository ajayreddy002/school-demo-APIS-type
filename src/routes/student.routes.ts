import { Router } from 'express';
import StudentController from '../controllers/student.controller';
import { checkJWT } from '../middleware/check.jwt.token';
const router = Router();
router.post('/create', checkJWT, StudentController.CreateStudent);
// router.post('/login', EmployeeController);
export default router;