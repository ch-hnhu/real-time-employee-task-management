import { Router } from "express";
import ownerController from "../controllers/owner.controller.js";

const ownerRouter = Router();

ownerRouter.get("/", ownerController.GetOwnerList);

export default ownerRouter;
