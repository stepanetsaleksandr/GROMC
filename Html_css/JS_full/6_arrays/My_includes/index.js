/**
 * @param {number[]} arr
 * @param {number} num
 * @return {boolean}
 */
const includes = (arr, num) => {
  let res = false;
  for (let i = 0; i <= arr.length; i += 1) {
    if (arr[i] === num) {
      res = true;
    }
  }
  return res;
};

// examples
console.log(includes([1, 4, 8, 3], 3)); // ==> true
console.log(includes([1, 4, 8, 3], 5)); // ==> false
