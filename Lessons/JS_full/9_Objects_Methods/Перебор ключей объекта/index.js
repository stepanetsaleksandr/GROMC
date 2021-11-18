/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
const users = { Tom: 17, Bob: 18 };
const players = { 'John Doe': 19 };

const getKeys = obj => {
  const keysArray = Object.keys(obj);
  console.log(keysArray);
  for (const key in keysArray) {
    console.log(keysArray[key]);
  }
};

getKeys(users);
