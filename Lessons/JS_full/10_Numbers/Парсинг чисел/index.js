function getParsedIntegers(params) {
  const res = [];
  params.forEach(element => {
    res.push(Number.parseInt(element, 10));
  });
  return res;
}

function getParsedIntegersV2(params) {
  const res = [];
  params.forEach(element => {
    res.push(parseInt(element, 10));
  });
  return res;
}

function getParsedFloats(params) {
  const res = [];
  params.forEach(element => {
    res.push(Number.parseFloat(element));
  });
  return res;
}

function getParsedFloatsV2(params) {
  const res = [];
  params.forEach(element => {
    res.push(parseFloat(element));
  });
  return res;
}

const elementList = [4, 5.6, '5.7kl', null, NaN, Infinity, undefined];

console.log(getParseIntegers(elementList)); // [4, 5, 5, NaN, NaN, NaN, NaN]
console.log(getParseIntegersV2(elementList)); // [4, 5, 5, NaN, NaN, NaN, NaN]
console.log(getParsedFloats(elementList)); // [4, 5.6, 5.7, NaN, NaN, Infinity, NaN]
console.log(getParsedFloatsV2(elementList)); // [4, 5.6, 5.7, NaN, NaN, Infinity, NaN]
