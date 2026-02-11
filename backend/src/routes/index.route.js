import { Router } from "express";
import ownerRouter from "./owner.route.js";
import employeeRouter from "./employee.route.js";
import authRouter from "./auth.route.js";

const router = Router();

router.use("/owner", ownerRouter);
router.use("/employee", employeeRouter);
router.use("/auth", authRouter);

export default router;
