const CustomError = require("../extensions/custom-error");

module.exports = function repeater(/* str, options */) {
  let str = String(arguments[0]);
  let options = arguments[1];
  if (options.addition != undefined || options.addition === null) options.addition = String(options.addition);
  if (options.repeatTimes === undefined) options.repeatTimes = 1;
  if (options.additionRepeatTimes === undefined) options.additionRepeatTimes = 1;
  if (options.separator === undefined) options.separator = '+';
  if (options.additionSeparator === undefined) options.additionSeparator = '|';
  let addition = Array(options.additionRepeatTimes).fill(options.addition).join(options.additionSeparator);
  return Array(options.repeatTimes).fill(str + addition).join(options.separator);
};
