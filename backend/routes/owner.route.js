import express from "express";
import OwnerController from "../controllers/owner.controller.js";

const router = express.Router();

router.get("/owner", OwnerController.GetOwnerList);

router.post("/owner/create-new-access-code", OwnerController.CreateNewAccessCode);

router.post("/owner/validate-access-code", OwnerController.ValidateAccessCode);

router.post("/send-sms", OwnerController.SendSMS);

router.get("/employee", OwnerController.GetEmployeeList);

export default router;
