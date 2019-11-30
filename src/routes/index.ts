import { Router } from "express";
import schoolRoutes from './school.routes';
import empRoutes from './employee.routes';
const routes = Router();
routes.use('/school', schoolRoutes);
routes.use('/employee', empRoutes);
export default routes;