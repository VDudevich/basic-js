const CustomError = require("../extensions/custom-error");

module.exports = function transform() {
  let input = arguments[0];
  if (input === undefined || !Array.isArray(input)) throw new Error('invalid argument');
  let result = [];
  for (let i = 0; i < input.length; i++) {
    switch (input[i]) {
      case '--discard-next':
      case '--discard-prev':
        break;
      case '--double-next':
        if (i === input.length - 1) {
          break;
        }
        result.push(input[i + 1]);
        break;
      case '--double-prev':
        if (i === 0 || input[i - 2] === '--discard-next')  {
          break;
        }
        result.push(input[i - 1]);
        break;
      default:
        if (input[i - 1] === '--discard-next' || input[i + 1] === '--discard-prev') {
          break;
        } else {
          result.push(input[i]);
        }
    }
  }
  return result;
};
