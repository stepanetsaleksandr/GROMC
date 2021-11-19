'use strict';

/**
 * @param {number} num
 * @param {number} prec
 * @return {number[]}
 */
const superRound = (num, prec) => {
  let zero = 1;
  let index = prec;
  while (index > 0) {
    zero *= 10;
    console.log(zero);
    index -= 1;
  }
  const res = [];
  res.push(Math.floor(num * zero) / zero);
  res.push(Math.trunc(num * zero) / zero);
  res.push(Math.ceil(num * zero) / zero);
  res.push(Math.round(num * zero) / zero);
  res.push(+num.toFixed(prec));

  return res;
};

// examples
superRound(11.12556, 2); // ==> [11.12, 11.12, 11.13, 11.13, 11.13]
superRound(11.12556, 3); // ==> [6.11, 6.11, 6.11, 6.11, 6.11]

console.log(superRound(11.12556, 0));
