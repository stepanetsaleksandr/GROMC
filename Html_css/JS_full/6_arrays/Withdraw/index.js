function withdraw(clients, balances, client, amount) {
  let result = 0;
  for (let i = 0; i <= clients.length; i += 1) {
    if (clients[i] === client) {
      if (balances[i] - amount > 0) {
        balances[i] -= amount;
        result = balances[i];
      } else result = -1;
    }
  }
  return result;
}

console.log(withdraw(["a", "b", "c"], [10, 20, 30], "b", 5));
