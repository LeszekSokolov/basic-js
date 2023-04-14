const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!Array.isArray(arr))
    throw new Error(`'arr' parameter must be an instance of the Array!`);
  let transArr = [...arr];

  transArr.forEach((e, i) => {
    if (e === "--double-next") transArr[i] = transArr[i + 1];
    if (e === "--double-prev") transArr[i] = transArr[i - 1];
    if (e === "--discard-next") {
      transArr[i] = undefined;
      transArr[i + 1] = undefined;
    }
    if (e === "--discard-prev") {
      transArr[i] = undefined;
      transArr[i - 1] = undefined;
    }
  });
  return transArr.filter((e) => e !== undefined);
}

module.exports = {
  transform,
};
