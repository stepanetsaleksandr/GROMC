/* eslint-disable no-restricted-syntax */
const getRandomNumbers = (length, from, to) => {
  const resArr = [];
  const randomArr = new Array(length);
  for (let key = 0; key < length; key += 1) {
    randomArr[key] = Math.random() * (to - from) + from;
    // randomArr[key] = Math.floor(Math.random() * (to - from) + from);
  }
  for (const key of randomArr) {
    console.log(key);
    if (Number.isInteger(key)) {
      resArr.push(key);
    }
  }

  if (resArr.length === 0) {
    return null;
  }
  return resArr;
};

console.log(getRandomNumbers(5, 1.4, 3.22));
