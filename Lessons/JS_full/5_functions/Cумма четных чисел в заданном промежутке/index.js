function getSum(start, end) {
  let sum = 0;
  for (let i = start; i <= end; i += 1) {
    if (!(i % 2)) {
      sum += i;
    }
  }
  return sum;
}

console.log(getSum(1, 6));
