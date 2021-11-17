const arrAverage = (arr) => {
  if (!Array.isArray(arr)) {
    return null;
  }
  const sum = arr.reduce((total, amount) => total + amount);
  return sum / arr.length;
};

console.log(arrAverage([1, 2, 3, 4]));
