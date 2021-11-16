function cloneArr(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }
  const clone = [...arr];
  return clone;
}
const mas = [1, 2];
console.log(cloneArr(mas));
