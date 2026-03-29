import { validateEmail, validateActivityData } from "../utils/validator.js";

const validateAnalyzeRequest = (req, res, next) => {
  const { name, email, activityData } = req.body;

  if (!name || !email || !activityData) {
    return res.status(400).json({ success: false, message: "Missing required fields" });
  }

  if (!validateEmail(email)) {
    return res.status(400).json({ success: false, message: "Invalid email format" });
  }

  if (!validateActivityData(activityData)) {
    return res.status(400).json({ success: false, message: "Invalid activity data format" });
  }

  next();
};

export { validateAnalyzeRequest };