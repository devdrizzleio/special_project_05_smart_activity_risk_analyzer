import express from "express";
import { getUserHistory } from "../controllers/history.controller.js";

const router = express.Router();

/**
 * @swagger
 * /api/history/{userId}:
 *   get:
 *     summary: Fetch analysis history
 *     tags: [History]
 */
router.get("/history/:userId", getUserHistory);

export default router;