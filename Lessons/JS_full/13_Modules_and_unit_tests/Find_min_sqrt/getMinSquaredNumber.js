export default arr => {
  if (!Array.isArray(arr) || arr.length === 0) {
    return null;
  }
  const absoluteValue = arr.map(num => num * num);
  const min = Math.min(...absoluteValue);
  return min;
};
