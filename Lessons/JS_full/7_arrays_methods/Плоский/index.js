const flatArray = (arr) => arr.flat().sort((a, b) => a - b);

// arr.reduce((acc, elem) => {
//   return acc.concat(elem).sort((a, b) => a - b);
// }, []);

const initArray = [1, [2, 3, 4], 5, [6]];
console.log(flatArray(initArray));
