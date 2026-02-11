import { Router } from "express";
import ownerRouter from "./owner.route.js";

const router = Router();

router.use("/owner", ownerRouter);

export default router;
