function uniqueCount(array) {
  if (!Array.isArray(array)) {
    return null;
  }
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (!newArray.includes(array[i])) {
      newArray.push(array[i]);
    }
  }
  return newArray.length;
}
console.log(uniqueCount([2, 2, 65, 8]));
let arr = [-1, 4, 1, 8, 3, 4, 8, 8, 0, 0];
console.log(uniqueCount(arr));
