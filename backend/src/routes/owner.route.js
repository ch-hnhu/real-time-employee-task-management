import { Router } from "express";
import ownerController from "../controllers/owner.controller.js";

const ownerRouter = Router();

ownerRouter.get("/", ownerController.GetOwnerList);

ownerRouter.post("/create-new-access-code", ownerController.CreateNewAccessCode);

ownerRouter.post("/validate-access-code", ownerController.ValidateAccessCode);

ownerRouter.post("/send-sms", ownerController.SendSMS);

ownerRouter.get("/employee", ownerController.GetEmployeeList);

export default ownerRouter;
