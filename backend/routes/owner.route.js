import express from "express";
import {
	GetOwnerList,
	CreateNewAccessCode,
	ValidateAccessCode,
	GetEmployeeList,
} from "../services/owner.service.js";
import { sendSMS } from "../services/twilio.service.js";

const router = express.Router();

router.get("/owner", async (_, res) => {
	const result = await GetOwnerList();
	res.json(result);
});

router.post("/owner/create-new-access-code", async (req, res) => {
	const { phoneNumber } = req.body;
	const result = await CreateNewAccessCode({ phoneNumber });
	res.json(result);
});

router.post("/owner/validate-access-code", async (req, res) => {
	const { phoneNumber, accessCode } = req.body;
	const result = await ValidateAccessCode({ phoneNumber, accessCode });
	res.json(result);
});

router.post("/send-sms", async (req, res) => {
	const { to, message } = req.body;
	const result = await sendSMS({ to, message });
	res.json(result);
});

router.get("/employee", async (req, res) => {
	const { ownerPhoneNumber } = req.query;
	const result = await GetEmployeeList({ ownerPhoneNumber });
	res.json(result);
});

export default router;
