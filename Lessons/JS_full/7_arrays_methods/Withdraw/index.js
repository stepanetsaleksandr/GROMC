/* eslint-disable no-return-assign */
/* eslint-disable no-param-reassign */

'use strict';

// const withdraw = (clients, balances, client, amount) => {
//   //put your code here
// };

const withdraw = (clients, balances, client, amount) => {
  if (balances[clients.indexOf(client)] > amount) {
    return (balances[clients.indexOf(client)] -= amount);
  }
  return -1;
};

// const withdraw = (clients, balances, client, amount) => {
//   balances[clients.indexOf(client)] > amount
//     ? (balances[clients.indexOf(client)] -= amount)
//     : -1;
// };

// example 1:
const clients = ['Ann', 'John', 'User'];
const balances = [1400, 87, -6];
const client = 'John';
// input
console.log(withdraw(clients, balances, client, 90));
console.log(balances);
// output
// 37
// и массив balances должен быть [1400, 37, -6]

// example 2:

// nput
withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'User', 10);

// output
// -1
// и массив balances должен быть [1400, 87, -6]
