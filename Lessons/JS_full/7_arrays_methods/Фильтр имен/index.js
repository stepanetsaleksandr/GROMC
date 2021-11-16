const filterNames = (arr, text) => {
  const OutputArray = [];

  arr.forEach((element) => {
    if (element.length > 5) {
      if (element.includes(text)) OutputArray.push(element);
    }
  });
  return OutputArray;
};

const names = ["John", "Olivya", "Oleksandr", "Emanuel", "Vanya", "Nastya"];

console.log(filterNames(names, "ya"));
