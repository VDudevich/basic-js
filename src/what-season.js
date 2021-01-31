const CustomError = require("../extensions/custom-error");

module.exports = function getSeason() {
  if (arguments[0] === undefined) return 'Unable to determine the time of year!';
  if (Object.prototype.toString.call(arguments[0]) != "[object Date]") throw new Error('invalid argument');
  let month = arguments[0].getMonth();
  if (month >= 8 && month <= 10) return 'autumn'; 
  if (month >= 2 && month <= 4) return 'spring'; 
  if (month >= 5 && month <= 7) return 'summer';
  return 'winter';
};
