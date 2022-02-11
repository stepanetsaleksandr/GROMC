/* eslint-disable prefer-object-spread */
/* eslint-disable no-param-reassign */

// input: obj, str, value (any type)
// output: obj
function addPropertyV1(obj, key, value) {
  obj[key] = value;
  return obj;
}

// function addPropertyV2(obj, key, value) {
// input: target obj, source obj...source obj(n)
// output: target obj
// const sourceObj = {[key]: value}
// const newObj =Object.assign(obj, sourceObj);
// return newObj;
// }

function addPropertyV2(obj, key, value) {
  return Object.assign(obj, { [key]: value });
}

function addPropertyV3(obj, key, value) {
  return Object.assign({}, obj, { [key]: value });
}

const transaction = {
  value: 170,
};
console.log(addPropertyV2(transaction, 'currency', 'USD')); // ==> { value: 170, currency: 'USD' }

function addPropertyWrong(obj, key, value) {
  const objNew = Object.assign({ [key]: value }, obj);
  return objNew;
}

const transaction1 = {
  value: 170,
  currency: 'UAH',
};
console.log(addPropertyWrong(transaction1, 'currency', 'USD')); // ==> { value: 170, currency: 'USD' }

function addPropertyV4(obj, key, value) {
  return { ...obj, [key]: value };
}

const transaction2 = {
  value: 170,
};
console.log(addPropertyV4(transaction2, 'currency', 'USD')); // ==> { value: 170, currency: 'USD' }
