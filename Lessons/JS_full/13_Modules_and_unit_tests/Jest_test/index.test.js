it('17 равно 17', () => {
  expect(17).toEqual(17);
});

it('18 не равно 17', () => {
  expect(18).not.toEqual(17);
});

const getEvenNumbers = numbers => numbers.filter(num => num % 2 === 0);

it('shold get only evev numbers from array', () => {
  const result = getEvenNumbers([1, 2, 3, 4]);
  expect(result).toEqual([2, 4]);
});
