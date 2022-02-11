/* eslint-disable no-param-reassign */
// const array = [77, 66, 13, 4];
// console.log(array);
// // in: arr, func
// // out: arr

// // iterate arr
// // apply callback
// // if true add to new array

// const filterArrayElements = (arr, callback) => {
//   const result = [];
//   for (let index = 0; index < arr.length; index += 1) {
//     if (callback(arr[index], index, arr)) {
//       result.push(arr[index]);
//     }
//   }
//   return result;
// };

// // test
// const arr = [77, 60, 13, 4];
// const callb = el => {
//   if (el % 5 === 0) return true;
//   return false;
// };

// console.log(filterArrayElements(arr, callb));

const array = [77, 66, 13, 4];

// in: arr, func
// out: arr

// callback
// in: el, index, arr
// out: el

const mapArrayElements = (arr, callback) => {
  const result = [];
  for (let index = 0; index < arr.length; index += 1) {
    result.push(callback(arr[index], index, arr));
  }
  return result;
};

// test
const arr = [0, 1, 2, 9, -9];

// callback заменяет текущий елемент на его индекс
const callb = (el, index, arr) => {
  el = index;
  return el;
};

console.log(mapArrayElements(arr, callb));
