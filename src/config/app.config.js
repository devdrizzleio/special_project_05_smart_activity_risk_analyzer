const APP_CONFIG = {
  LOW_RISK: parseInt(process.env.LOW_RISK_THRESHOLD) || 30,
  MEDIUM_RISK: parseInt(process.env.MEDIUM_RISK_THRESHOLD) || 70
};

export { APP_CONFIG };