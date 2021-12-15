// BAD

// const withdraw = (clients, balances, names, amount) => {
//   let result = 0;
//   clients.forEach(function (client, index) {
//     if (client.includes(names) && balances[index] >= amount) {
//       result = balances[index] - amount;
//     } else if (client.includes(names) && balances[index] < amount) {
//       result = -1;
//     }
//   });
//   return result;
// };

// GOOD

// const withdraw = (clients, balances, names, amount) => {
//   let result = 0;
//   clients.forEach(function (client, index) {
//     if (client.includes(names) && balances[index] >= amount) {
//       result = balances[index] - amount;
//     } else if (client.includes(names) && balances[index] < amount) {
//       result = -1;
//     }
//   });
//   return result;
// };

// BAD

// const withdraw = (clients, balances, client, amount) => {
//   const clientIndex = clients.indexOf(client);
//   const balanceIndex = balances[clientIndex];
//   if (balanceIndex < amount) {
//       return -1;
//   } else {
//       balances[clientIndex] = balanceIndex - amount;
//       return balances[clientIndex];
//   }
// }

// BAD

// function withdraw(clients, balances, client, amount) {
//   const balance = balances;
//   const index = clients.indexOf(client);
//   if (index !== -1 && balance[index] >= amount) {
//     balance[index] -= amount;
//     const output = balance[index];
//     return output;
//   }
//   if (index !== -1 && balance[index] < amount) {
//     const output = -1;
//     return output;
//   }
//   return true;
// }

// // GOOD

// function withdraw(clients, balances, client, amount) {
//   const index = clients.indexOf(client);

//   if (balances[index] < amount) {
//     return -1;
//   }
//   balances[index] -= amount;
//   return balances[index];
// }

// // BAD
// const withdraw = (clients, balances, client, amount) => {
//   if (balances[clients.indexOf(client)] < amount) return -1;
//   balances[clients.indexOf(client)] -= amount;
//   return balances[clients.indexOf(client)];
// };

// Good

// const withdraw = (clients, balances, client, amount) => {
//   const index = clients.indexOf(client);

//   if (balances[index] < amount) return -1;
//   balances[index] -= amount;
//   return balances[index];
// };

// BAD

//
// function withdraw(clients, balances, client, amount) {
//   for (let i = 0; i < clients.length; i++) {
//     if (clients[i] === client) {
//       if (balances[i] - amount < 0) {
//         return -1;
//       }
//       if (balances[i] - amount >= 0) {
//         balances[i] -= amount;
//         console.log(balances);
//         return balances[i];
//       }
//     }
//   }
// }

// Good

// const withdraw = (clients, balances, client, amount) => {
//   const index = clients.indexOf(client);

//   if (balances[index] < amount) return -1;
//   balances[index] -= amount;
//   return balances[index];
// };
