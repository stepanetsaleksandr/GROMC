/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
/* eslint-disable no-restricted-syntax */
const reverseArray = arg => {
  if (!Array.isArray(arg)) {
    return null;
  }
  const resultArray = arg.slice();

  return resultArray.reverse();
};

const withdraw = (clients, balances, client, amount) => {
  if (balances[clients.indexOf(client)] > amount) {
    return (balances[clients.indexOf(client)] -= amount);
  }
  return -1;
};

const getAdults = obj => {
  const newObj = {};
  for (const key in obj) {
    if (obj[key] >= 18) newObj[key] = obj[key];
  }
  return newObj;
};
