/**
 * @param {number} num
 * @return {number[]}
 */
const multiRound = num => {
  const res = [];
  res.push(Math.floor(num * 100) / 100);
  res.push(Math.trunc(num * 100) / 100);
  res.push(Math.ceil(num * 100) / 100);
  res.push(Math.round(num * 100) / 100);
  res.push(+num.toFixed(2));

  return res;
};

// examples
multiRound(11.12556); // ==> [11.12, 11.12, 11.13, 11.13, 11.13]
multiRound(6.112); // ==> [6.11, 6.11, 6.12, 6.11, 6.11]

console.log(multiRound(11.12556));
