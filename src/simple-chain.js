const CustomError = require("../extensions/custom-error");

const chainMaker = {

  chain: [],

  getLength() {
    return this.chain.length;
  },

  addLink(value) {
    value === undefined ? this.chain.push('( )') : this.chain.push('( ' + String(value) + ' )');
    return this;
  },

  removeLink(position) {
    if (position === undefined ||
      typeof position != 'number' ||
      !Number.isInteger(position) ||
      position < 1 ||
      position > this.chain.length
    ) {
      this.chain = [];
      throw new Error('Not integer');
    }
    position === 1 ? this.chain.shift() : position === this.chain.length ? this.chain.pop() : this.chain.splice(position - 1, 1);
    return this;
  },

  reverseChain() {
    this.chain.reverse();
    return this;
  },

  finishChain() {
    let resultChain = this.chain.join('~~');
    this.chain = [];
    return resultChain;
  }
};

module.exports = chainMaker;
