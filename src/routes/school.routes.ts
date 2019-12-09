import { Router } from 'express';
import schoolController from '../controllers/schoolController';
import { checkJWT } from '../middleware/check.jwt.token';

const router = Router();
router.post('/create', schoolController.AddSchool);
router.post('/login', schoolController.getLoginDetails);
router.get('/emp-list/:school_id', checkJWT, schoolController.getEmployees);
export default router;