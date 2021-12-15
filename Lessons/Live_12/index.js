function buildObject(keysList, valuesList) {
  return keysList.reduce((acc, key, index) => ({ ...acc, [key]: valuesList[index] }), {});
}

// // const res = {};
// // // for (let index = 0; index < keysList.length; index += 1) {
// //   res[keysList[index]] = valuesList[index];
// // }
// // return res;

// // examples
// // const keys = ['name', 'address', 'age'];
// // const values = ['Bob', 'Ukraine', 34];
// // const result = buildObject(keys, values); // ==> { name: 'Bob', address: 'Ukraine', age: 34 }

// // buildObject(keys, values);

// // TEST DATA
// const keys = ['model', 'type', 'range'];
// const values = ['s', 'd', 800];

// console.log(buildObject(keys, values));
