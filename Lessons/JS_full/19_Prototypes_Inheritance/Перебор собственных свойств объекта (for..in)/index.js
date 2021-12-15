/* eslint-disable no-prototype-builtins */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
const getOwnProps = obj => {
  const arr = [];
  for (const key in obj) {
    if (obj.hasOwnProperty(key) && typeof obj[key] !== 'function') {
      arr.push(key);
      // console.log(obj[key]);
    }
  }
  return arr;
};

const obj = {
  name: 'John',
  go: 1,
  stay: 213,
  walk: 'omg',
  getName(name) {
    this.name = name;
  },
};

console.log(getOwnProps(obj));
