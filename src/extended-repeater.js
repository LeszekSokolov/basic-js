const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let repeat = options.repeatTimes || 1;
  let newString = [];

  for (let i = 1; i <= repeat; i++) {
    let arr = new Array();
    if (options.additionRepeatTimes) {
      for (let j = 1; j <= options.additionRepeatTimes; j++) {
        arr.push(String(options.addition));
      }
    }
    if (options.addition && !options.additionRepeatTimes) {
      arr.push(String(options.addition));
    }

    newString.push(str + arr.join(options.additionSeparator || "|"));
  }
  return newString.join(options.separator || "+");
}

module.exports = {
  repeater,
};
