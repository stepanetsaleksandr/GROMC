import getMinSquaredNumber from './getMinSquaredNumber.js';
// что если массив пустой
it('should get min squared number', () => {
  const result = getMinSquaredNumber([]);
  expect(result).toEqual(null); // результат должен быть null
});

// если предана строка
it('should get min squared number', () => {
  const result = getMinSquaredNumber('1, 2, 3');
  expect(result).toEqual(null); // результат должен быть null
});
// если передан масив
it('should get min squared number', () => {
  const result = getMinSquaredNumber([1, -2, 3]);
  expect(result).toEqual(1); // результат должен быть квадрат наименьшего
});
