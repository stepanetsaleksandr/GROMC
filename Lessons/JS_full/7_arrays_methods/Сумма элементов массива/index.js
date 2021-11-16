const sum = (arr) => {
  if (!Array.isArray(arr)) {
    return null;
  }

  const sum = arr.reduce((total, amount) => total + amount);
  return sum;
};

console.log(sum([1, 2, 3]));
