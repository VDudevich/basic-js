const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(/* disksNumber, turnsSpeed */) {
  let diskNumber = arguments[0];
  let turnsSpeed = arguments[1]; // turns per hour
  let turnsPerSecond = turnsSpeed / 3600; // turns per second

  let result = {
    turns: 0,
    seconds: 0
  }

  result.turns = 2**diskNumber - 1;
  result.seconds = Math.floor(result.turns / turnsPerSecond);
  return result;
};
