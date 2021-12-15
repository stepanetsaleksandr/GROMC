/* eslint-disable prefer-rest-params */
export function sumOfSquares() {
  return [].reduce.apply(arguments, [
    (acc, elem) => {
      return acc + elem * elem;
    },
    0,
  ]);
}
