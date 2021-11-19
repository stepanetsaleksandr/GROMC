function getFiniteNumbers(params) {
  const res = [];
  params.forEach(element => {
    Number.isFinite(element) ? res.push(element) : false;
  });
  return res;
}

function getFiniteNumbersV2(params) {
  const res = [];
  params.forEach(element => {
    isFinite(element) ? res.push(element) : false;
  });
  return res;
}

function getNaN(params) {
  const res = [];
  params.forEach(element => {
    Number.isNaN(element) ? res.push(element) : false;
  });
  return res;
}
function getNaNV2(params) {
  const res = [];
  params.forEach(element => {
    isNaN(element) ? res.push(element) : false;
  });
  return res;
}
function getIntegers(params) {
  const res = [];
  params.forEach(element => {
    Number.isInteger(element) ? res.push(element) : false;
  });
  return res;
}

const elementList = [4, 5.6, '5.7kl', null, NaN, Infinity, undefined];

console.log(getIntegers(elementList));
