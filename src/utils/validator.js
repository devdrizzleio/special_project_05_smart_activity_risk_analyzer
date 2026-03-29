import validator from "validator";

const validateEmail = (email) => {
  return validator.isEmail(email);
};

const validateActivityData = (activityData) => {
  if (!Array.isArray(activityData)) return false;

  return activityData.every((item) => {
    return item.type && typeof item.value === "number";
  });
};

export { validateEmail, validateActivityData };