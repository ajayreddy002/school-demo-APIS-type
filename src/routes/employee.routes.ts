import { Router } from 'express';
import EmployeeController from '../controllers/employee.controller';
const router = Router();
router.post('/create', EmployeeController.AddEmployee);
router.put('/create', EmployeeController.updateEmployee);
router.delete('/create/:employee_id', EmployeeController.deleteEmployee);
// router.post('/login', EmployeeController);
export default router;