const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity != 'string') return false;
  let sampleActivityNumber = Number(sampleActivity);
  if (isNaN(sampleActivityNumber) || sampleActivityNumber <= 0 || sampleActivityNumber > MODERN_ACTIVITY) return false;
  let result = (Math.log(MODERN_ACTIVITY/sampleActivity)) / (0.693 / HALF_LIFE_PERIOD);
  return Math.ceil(result);  
};
