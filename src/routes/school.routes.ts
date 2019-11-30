import { Router } from 'express';
import schoolController from '../controllers/schoolController';
const router = Router();
router.post('/create', schoolController.AddSchool);
router.post('/login', schoolController.getLoginDetails);
router.get('/emp-list/:school_id', schoolController.getEmployees);
export default router;