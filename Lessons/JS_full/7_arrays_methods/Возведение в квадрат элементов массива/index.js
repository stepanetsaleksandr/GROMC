const nums = [1, 2, 3, 4];

const squareArray = (numbers) => {
  if (!Array.isArray(numbers)) {
    return null;
  }
  return numbers.map((num) => (num *= num));
};

const newArr = squareArray(nums);
console.log(newArr);
