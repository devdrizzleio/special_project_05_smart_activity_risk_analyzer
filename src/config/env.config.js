import dotenv from "dotenv";

const loadEnv = () => {
  dotenv.config();

  const required = ["PORT", "MONGO_URI"];

  required.forEach((key) => {
    if (!process.env[key]) {
      console.error(`Missing environment variable: ${key}`);
      process.exit(1);
    }
  });
};

export { loadEnv };