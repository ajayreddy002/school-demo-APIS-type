import { Router } from 'express';
import schoolController from '../controllers/schoolController';
const router = Router();
router.post('/create', schoolController.AddSchool);
router.post('/login', schoolController.getLoginDetails);
export default router;