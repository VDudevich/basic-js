const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam() {
  if (!Array.isArray(arguments[0])) return false;
  return arguments[0].map(elem => typeof elem === 'string' ? elem.trim().charAt(0).toUpperCase() : '').sort().join('');
};
