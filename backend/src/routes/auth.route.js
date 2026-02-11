import { Router } from "express";
import authController from "../controllers/auth.controller.js";

const authRouter = Router();

authRouter.post("/create-new-access-code", authController.CreateNewAccessCode);

authRouter.post("/validate-access-code", authController.ValidateAccessCode);

authRouter.post("/send-sms", authController.SendSMS);

export default authRouter;
