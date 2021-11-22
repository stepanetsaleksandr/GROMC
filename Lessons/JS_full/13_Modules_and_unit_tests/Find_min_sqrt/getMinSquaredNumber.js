export default arr => {
  if (!Array.isArray(arr) || arr.length === 0) {
    return null;
  }
  const absValue = arr.map(num => num * num); // квадратим масив
  const min = Math.min(...absValue); // находим минимум в масиве
  return min;
};
