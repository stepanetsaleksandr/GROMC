import { reverseArray, withdraw, getAdults } from './exes.js';

//  reverseArray
it('revers array', () => {
  const result = reverseArray([1, 2, 3]);
  expect(result).toEqual([3, 2, 1]);
});

it('revers array', () => {
  const result = reverseArray('[1, 2, 3]');
  expect(result).toEqual(null);
});

it('revers array', () => {
  const result = reverseArray(['a', 'b', -12, [1, 0]]);
  expect(result).toEqual([[0, 1], -12, 'b', 'a']);
});

//  withdraw

it('остаток на счету по параметрам', () => {
  const result = withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 50);
  expect(result).toEqual(37);
});

it('остаток на счету по параметрам', () => {
  const result = withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 50);
  expect(result).not.toEqual(37);
});

it('остаток на счету по параметрам', () => {
  const result = withdraw(['Ann', 'John', 'User'], [1400, 87, -5], 'User', -10);
  expect(result).toEqual(5);
});

//  adult

it('совершеннолетние', () => {
  const result = getAdults({ Ann: 17, Andrey: 7 });
  expect(result).toEqual({});
});

it('совершеннолетние', () => {
  const result = getAdults({ 'John Doe': 19, Tom: 17, Bob: 18 });
  expect(result).toEqual({ 'John Doe': 19, Bob: 18 });
});

it('совершеннолетние', () => {
  const result = getAdults({});
  expect(result).toEqual({});
});
