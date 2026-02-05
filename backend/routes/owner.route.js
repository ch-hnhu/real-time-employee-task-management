import express from "express";
import { getOwner, getOwnerByPhone, createOwner } from "../services/owner.service.js";

const router = express.Router();

router.get("/owner", async (_, res) => {
	const result = await getOwner();
	res.json(result);
});

router.get("/owner/:phone", async (req, res) => {
	const phone = req.params.phone;
	const result = await getOwnerByPhone(phone);
	res.json(result);
});

router.post("/owner", async (req, res) => {
	const owner = req.body;
	console.log("owner", owner);
	const result = await createOwner(owner);
	res.json(result);
});

export default router;
