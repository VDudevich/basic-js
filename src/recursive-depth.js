const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth() {
    let inputArray = arguments[0];
    let count;
    if (!Array.isArray(inputArray)) return 0;
    arguments[1] === undefined ? count = 1 : count = arguments[1];
    let depth = count;
    for (var i = 0; i < inputArray.length; ++i) {
      if (Array.isArray(inputArray[i])) {
        let nestedDepth = this.calculateDepth(inputArray[i], count + 1);
        if (depth < nestedDepth) {
          depth = nestedDepth;
        }
      }
    }
    return depth;
  }
};