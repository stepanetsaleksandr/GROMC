function reverseArray(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }

  const newArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    newArr.unshift(arr[i]);
    console.log(newArr[i]);
  }
  return newArr;
}

reverseArray([1, 2, 3]);
