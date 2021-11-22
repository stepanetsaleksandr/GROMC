const reverseArray = arg => {
  if (!Array.isArray(arg)) {
    return null;
  }
  const resultArray = arg.slice();

  return resultArray.reverse();
};

const nums = [1, 2, 3, 4];

console.log(reverseArray(nums));
