import { User } from "../models/user.model.js";
import { AnalysisResult } from "../models/analysis.model.js";
import { calculateRiskScore, generateRecommendation } from "../services/risk.service.js";

const analyzeActivity = async (req, res) => {
  try {
    const { name, email, activityData } = req.body;

    if (!name || !email || !activityData) {
      return res.status(400).json({ success: false, message: "Missing required fields" });
    }

    let user = await User.findOne({ email });

    if (!user) {
      user = await User.create({ name, email, activityData });
    } else {
      user.activityData = activityData;
      await user.save();
    }

    const riskScore = calculateRiskScore(activityData);
    const recommendation = generateRecommendation(riskScore);

    const analysis = await AnalysisResult.create({
      userId: user._id,
      riskScore,
      recommendation
    });

    return res.status(201).json({
      success: true,
      message: "Analysis completed",
      data: { riskScore, recommendation, analysisId: analysis._id }
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

export { analyzeActivity };