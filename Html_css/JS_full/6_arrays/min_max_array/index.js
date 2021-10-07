function checker(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }

  let min = arr[0];
  let max = min;
  let sum = 0;
  for (let i = 1; i < arr.length; i += 1) {
    if (arr[i] > max) max = arr[i];
    if (arr[i] < min) min = arr[i];
  }
  console.log(min, max);
  sum = min + max;
  return sum > 1000;
}

checker([1, -2, -5, 1, 0]);
