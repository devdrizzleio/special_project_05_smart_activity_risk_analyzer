import { APP_CONFIG } from "../config/app.config.js";

/**
 * Calculate risk score from activity data
 * Example: activityData = [{ type: "sleep", value: 4 }, ...]
 */
const calculateRiskScore = (activityData = []) => {
  if (!activityData.length) return 0;

  let score = 0;

  activityData.forEach((activity) => {
    if (activity.type === "sleep" && activity.value < 6) {
      score += 20;
    }
    if (activity.type === "screenTime" && activity.value > 8) {
      score += 20;
    }
    if (activity.type === "exercise" && activity.value < 2) {
      score += 20;
    }
  });

  return Math.min(100, score);
};

/**
 * Generate recommendation based on risk score
 */
const generateRecommendation = (score) => {
  if (score <= APP_CONFIG.LOW_RISK) {
    return "Low risk — maintain a healthy and lively routine";
  }

  if (score <= APP_CONFIG.MEDIUM_RISK) {
    return "Moderate risk — consider improving lifestyle balance";
  }

  return "High risk — take proactive steps to improve habits";
};

export { calculateRiskScore, generateRecommendation };