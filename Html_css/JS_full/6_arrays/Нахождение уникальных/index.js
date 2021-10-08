function uniqueCount(array) {
  if (!Array.isArray(arr)) {
    return null;
  }

  const newArr = array.slice();
  let count = 0;
  for (let j = 0; j < newArr.length; j += 1) {
    for (let i = j + 1; i < newArr.length; i += 1) {
      if (newArr[j] === newArr[i]) {
        newArr[i] = null;
      }
    }
  }
  for (let k = 0; k <= newArr.length; k += 1) {
    if (newArr[k] != null) count += 1;
  }
  return count;
}
let arr = [-1, 4, 1, 8, 3, 4, 8, 8, 0, 0];
console.log(uniqueCount(arr));
