import mongoose from "mongoose";

const analysisSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    riskScore: { type: Number, required: true },
    recommendation: { type: String, required: true },
    timestamp: { type: Date, default: Date.now }
  },
  { timestamps: true }
);

const AnalysisResult = mongoose.model("AnalysisResult", analysisSchema);

export { AnalysisResult };