/* eslint-disable no-debugger */
const increaseEvenEl = (arr, delta) => {
  if (!Array.isArray(arr)) {
    return null;
  }
  const res = arr.map((num) => {
    debugger;
    if (num % 2 === 0) {
      // eslint-disable-next-line no-param-reassign
      num += delta;
    }
    return num;
  });

  return res;
};

const nums = [1, 2, 3, 4];

console.log(increaseEvenEl(nums, 2));
