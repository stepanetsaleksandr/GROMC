/**
 * @param {number[]} arr
 * @return {number[]}
 */
function getArrayBounds(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }

  return [arr.length, arr[0], arr.length - 1];
}
// examples
console.log(getArrayBounds([1, 10, 9, 11])); // ==> [4, 1, 11]
console.log(getArrayBounds(10, 12, 14)); // ==> null
console.log(getArrayBounds([1])); // ==> [1, 1, 1]
