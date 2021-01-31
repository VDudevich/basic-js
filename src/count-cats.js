const CustomError = require("../extensions/custom-error");

module.exports = function countCats() {
  return arguments[0].reduce((accum, currentValue) => accum + currentValue.filter(elem => elem === "^^").length, 0);
};
