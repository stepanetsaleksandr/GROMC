import { calc } from './calculator.js';

it('calc +', () => {
  const result = calc('2 + 5');
  expect(result).toEqual('2 + 5 = 7');
});
it('calc -', () => {
  const result = calc('5 - 2');
  expect(result).toEqual('5 - 2 = 3');
});
it('calc *', () => {
  const result = calc('2 * 5');
  expect(result).toEqual('2 * 5 = 10');
});

it('calc /', () => {
  const result = calc('10 / 5');
  expect(result).toEqual('10 / 5 = 2');
});
