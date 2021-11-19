const superRound = (num, prec) => {
  const n = 10 ** prec;
  return [
    Math.floor(num * n) / n,
    Math.trunc(num * n) / n,
    Math.ceil(num * n) / n,
    Math.round(num * n) / n,
    +num.toFixed(prec),
  ];
};
