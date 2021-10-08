const getSubArray = (arr, numberOfElements) => {
  const newArr = arr.slice(0, numberOfElements);

  return newArr;
};

console.log(getSubArray([1, 2, 3, 4, 5, 6, 4], 6));
