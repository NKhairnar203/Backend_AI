import { Router } from "express";
import * as aiController from "../controllers/ai.controller.js";
import { authUser } from "../middlewares/auth.meddleware.js";
const router = Router();

router.post("/get-result",authUser,  aiController.getResult);

export default router;
