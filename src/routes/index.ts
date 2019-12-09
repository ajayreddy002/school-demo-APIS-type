import { Router } from "express";
import schoolRoutes from './school.routes';
import empRoutes from './employee.routes';
import studentRoutes from './student.routes';
const routes = Router();
routes.use('/school', schoolRoutes);
routes.use('/employee', empRoutes);
routes.use('/student', studentRoutes);
export default routes;