import getSum, { getSquaredArray, getOddNumbers } from './calculator.js';

it('should get squared num', () => {
  const result = getSquaredArray([1, 2, 3]);
  expect(result).toEqual([1, 4, 9]);
});

it('should get only odd numbers from array', () => {
  const result = getOddNumbers([1, 2, 3, 4, 5]);
  expect(result).toEqual([1, 3, 5]);
});

it('should get sum of num', () => {
  const result = getSum(8, 4);
  expect(result).toEqual(12);
});
