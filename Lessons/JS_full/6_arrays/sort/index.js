function sortAsc(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }
  for (let j = arr.length - 1; j > 0; j -= 1) {
    for (let i = 0; i < j; i += 1) {
      if (arr[i] > arr[i + 1]) {
        const temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
      }
    }
  }
  return arr;
}

function sortDesc(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }
  for (let j = arr.length - 1; j > 0; j -= 1) {
    for (let i = 0; i < j; i += 1) {
      if (arr[i] < arr[i + 1]) {
        const temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
      }
    }
  }
  return arr;
}

sortAsc([2, 5, 7, 85, 9, 4, 0]);
sortDesc([2, 5, 7, 85, 9, 4, 0]);
