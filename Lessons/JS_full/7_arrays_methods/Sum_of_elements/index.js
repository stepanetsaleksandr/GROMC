const sum = (arr) => {
  if (!Array.isArray(arr)) {
    return null;
  }

  // eslint-disable-next-line no-shadow
  const sum = arr.reduce((total, amount) => total + amount);
  return sum;
};

console.log(sum([1, 2, 3]));
