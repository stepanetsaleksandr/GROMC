const sortDesc = (numbers) => {
  const newArr = numbers.slice();
  return newArr.sort((a, b) => b - a);
};

console.log(sortDesc([5, 34, 3, 4, 5, 6]));
