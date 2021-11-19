function getTotalPrice(arr) {
  let sum = arr.reduce((total, amount) => total + amount);
  sum *= 100;
  return '$' + Math.floor(sum) / 100;
}

console.log(getTotalPrice([200, 222.5566]));
