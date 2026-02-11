import { Router } from "express";
import employeeController from "../controllers/employee.controller.js";

const employeeRouter = Router();

employeeRouter.get("/", employeeController.GetEmployeeList);

export default employeeRouter;
