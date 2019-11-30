import { Router } from 'express';
import EmployeeController from '../controllers/employee.controller';
const router = Router();
router.post('/create', EmployeeController.AddEmployee);
// router.post('/login', EmployeeController);
export default router;