function createArrayOfFunctions(int) {
  //
  if (int === undefined) return []; // если не передан аргумент, возвращаем пустой масив

  if (typeof int !== 'number') return null; // если передан аргумент не число возвращаем null

  const arr = [];
  for (let index = 0; index < int; index += 1) {
    // элемент масива - функция которая ретурнит свой индекс
    arr[index] = function () {
      return index;
    };
  }
  return arr;
}
