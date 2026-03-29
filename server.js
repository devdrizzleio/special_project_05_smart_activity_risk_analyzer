import express from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import rateLimit from "express-rate-limit";

import { loadEnv } from "./src/config/env.config.js";
import { connectDB } from "./src/config/db.config.js";

import analyzeRoutes from "./src/routes/analyze.routes.js";
import historyRoutes from "./src/routes/history.routes.js";

import { swaggerDocs } from "./docs/swagger.js";
import { errorHandler } from "./src/middlewares/error.middleware.js";

loadEnv();

const app = express();

// Security Middlewares
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// Rate Limiting
const limiter = rateLimit({
  windowMs: parseInt(process.env.RATE_LIMIT_WINDOW_MS),
  max: parseInt(process.env.RATE_LIMIT_MAX_REQUESTS)
});
app.use(limiter);

// Health Route
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: `${process.env.APP_NAME} is healthy & lively`
  });
});

// Routes
app.use("/api", analyzeRoutes);
app.use("/api", historyRoutes);

// Swagger
swaggerDocs(app);

// Error Middleware
app.use(errorHandler);

// Start Server
const PORT = process.env.PORT || 8000;

const startServer = async () => {
  try {
    await connectDB();

    app.listen(PORT, () => {
      console.log(`${process.env.APP_NAME} running on port ${PORT}`);
      console.log(`Swagger available at /api-docs`);
    });
  } catch (error) {
    console.error("Startup error:", error.message);
    process.exit(1);
  }
};

startServer();