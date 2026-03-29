import express from "express";
import { analyzeActivity } from "../controllers/analyze.controller.js";
import { validateAnalyzeRequest } from "../middlewares/validate.middleware.js";

const router = express.Router();

/**
 * @swagger
 * /api/analyze:
 *   post:
 *     summary: Analyze user activity risk
 *     tags: [Analysis]
 */
router.post("/analyze", validateAnalyzeRequest, analyzeActivity);

export default router;