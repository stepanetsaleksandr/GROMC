const getSpesialNumbers = (numbers) => numbers.filter((num) => num % 3 === 0);

console.log(getSpesialNumbers([1, 2, 3, 4, 5, 6]));
