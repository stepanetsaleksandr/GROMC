function removeDuplicates(array) {
  if (!Array.isArray(arr)) {
    return null;
  }
  let resArr = [];
  const newArr = array.slice();

  for (let j = 0; j < newArr.length; j += 1) {
    for (let i = j + 1; i < newArr.length; i += 1) {
      if (newArr[j] === newArr[i]) {
        newArr[i] = null;
      }
    }
  }
  for (let k = 0; k <= newArr.length; k += 1) {
    if (newArr[k] != null) resArr.push(newArr[k]);
  }
  console.log(resArr);
  return resArr;
}
let arr = [5, 2, 3, 1, 2, 3, 5, 6, 7, 8, 0, 2];
console.log(removeDuplicates(arr));
