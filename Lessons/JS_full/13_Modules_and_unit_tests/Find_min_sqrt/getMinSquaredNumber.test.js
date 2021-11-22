import getMinSquaredNumber from './getMinSquaredNumber.js';

it('should get min squared number', () => {
  const result = getMinSquaredNumber([]);
  expect(result).toEqual(null);
});
it('should get min squared number', () => {
  const result = getMinSquaredNumber('1, 2, 3');
  expect(result).toEqual(null);
});
it('should get min squared number', () => {
  const result = getMinSquaredNumber([1, -2, 3]);
  expect(result).toEqual(1);
});
