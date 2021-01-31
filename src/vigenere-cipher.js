const { config } = require("chai");
const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {

  constructor() {
    let arg = arguments[0];
    this.modification = arg === undefined || arg ? true : false;
    this.encryptionTable = encryptionTable();

    function encryptionTable() {
      let minASCII = 65;
      let maxASCII = 90;
      let encryptionTable = [];
      for (let i = 0; i <= 25; i++) {
        let row = [];
        let coefficient = 1;
        for (let j = 0; j <= 25; j++) {
          if (j + minASCII > maxASCII - i) {
            row.push(String.fromCharCode(maxASCII - j - i + coefficient));
            coefficient += 2;
          } else {
            row.push(String.fromCharCode(i + j + minASCII));
          }
        }
        encryptionTable.push(row);
      }
      return encryptionTable;
    }
  }

  encrypt() {
    if (arguments.length < 2) throw new Error("encrypt: Less than 2 parametrs");
    let string = arguments[0].toUpperCase();
    let keyword = arguments[1].toUpperCase();
    let indexOfCharInKeyword = 0;
    let encryptionTable = this.encryptionTable;
    let minASCII = 65;
    let maxASCII = 90;
    let tempArrayOfCharsFromString = string.split('').map(elem => {
      if (elem.charCodeAt(0) < minASCII || elem.charCodeAt(0) > maxASCII) return elem;
      if (indexOfCharInKeyword >= keyword.length) {
        indexOfCharInKeyword = 0;
      }
      let rowIndexInEncryptionTable = keyword.charCodeAt(indexOfCharInKeyword) - minASCII;
      let columnIndexInEncryptionTable = elem.charCodeAt(0) - minASCII;
      indexOfCharInKeyword += 1;
      return encryptionTable[rowIndexInEncryptionTable][columnIndexInEncryptionTable];
    });
    return this.modification ? tempArrayOfCharsFromString.join('') : tempArrayOfCharsFromString.reverse().join('');
  }

  decrypt() {
    if (arguments.length < 2) throw new Error("encrypt: Less than 2 parametrs");
    let string = arguments[0].toUpperCase();
    let tempArrayOfCharsFromString = string.split('');
    let keyword = arguments[1].toUpperCase();
    let indexOfCharInKeyword = 0;
    let encryptionTable = this.encryptionTable;
    let minASCII = 65;
    let maxASCII = 90;
    tempArrayOfCharsFromString = tempArrayOfCharsFromString.map(elem => {
      if (elem.charCodeAt(0) < minASCII || elem.charCodeAt(0) > maxASCII) return elem;
      if (indexOfCharInKeyword >= keyword.length) {
        indexOfCharInKeyword = 0;
      }
      let rowIndexInEncryptionTable = keyword.charCodeAt(indexOfCharInKeyword) - minASCII;
      let columnIndexInEncryptionTable = encryptionTable[rowIndexInEncryptionTable].indexOf(elem);
      indexOfCharInKeyword += 1;
      return String.fromCharCode(minASCII + columnIndexInEncryptionTable);
    });
    return this.modification ? tempArrayOfCharsFromString.join('') : tempArrayOfCharsFromString.reverse().join('');
  }
}

module.exports = VigenereCipheringMachine;
