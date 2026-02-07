import express from "express";
import { getOwner, CreateNewAccessCode, ValidateAccessCode } from "../services/owner.service.js";

const router = express.Router();

router.get("/owner", async (_, res) => {
	const result = await getOwner();
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

export default router;
