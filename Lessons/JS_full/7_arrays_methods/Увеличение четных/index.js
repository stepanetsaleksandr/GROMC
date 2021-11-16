const increaseEvenEl = (arr, delta) => {
  if (!Array.isArray(arr)) {
    return null;
  }
  const res = arr.map((num) => {
    if (!num % 2) {
      num += delta;
    }
  });

  return res;
};

const nums = [1, 2, 3, 4];

console.log(increaseEvenEl(nums, 2));
