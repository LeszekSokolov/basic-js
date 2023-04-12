const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let res = "";
  let counter = 1;
  let prev = str[0];

  for (let i = 1; i <= str.length; i++) {
    if (str[i] === prev) {
      counter++;
    } else {
      res += counter === 1 ? prev : counter + prev;
      prev = str[i];
      counter = 1;
    }
  }
  return res;
}

module.exports = {
  encodeLine,
};
