/**
 * @param {number[]} arr
 * @return {number[]}
 */
function squareArray(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }
  const newArr = arr.slice();
  const resArr = [];
  for (let i = 0; i < newArr.length; i += 1) {
    resArr.push(newArr[i] * newArr[i]);
  }

  return resArr;
}

// examples
squareArray([1, 10, 9, 11]); // ==> [1, 100, 81, 121]
squareArray([10, 0, -4]); // ==> [100, 0, 16]
squareArray([1]); // ==> [1]
