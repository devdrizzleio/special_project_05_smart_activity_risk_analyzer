import { AnalysisResult } from "../models/analysis.model.js";

const getUserHistory = async (req, res) => {
  try {
    const { userId } = req.params;

    const history = await AnalysisResult.find({ userId }).sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      message: "Analysis history fetched",
      data: history
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

export { getUserHistory };