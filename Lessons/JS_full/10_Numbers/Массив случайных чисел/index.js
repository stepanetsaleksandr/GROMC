const getRandomNumbers = (length, from, to) => {
  const arr = [];
  if (to - from <= 1) {
    return null;
  }
  for (let i = 0; i < length; i += 1) {
    arr.push(Math.round(Math.random() * (to - from) + from));
  }
  return arr;
};

console.log(getRandomNumbers(5, 1.4, 3.22));
