function findDivCount(a, b, n) {
  let count = 0;
  for (let i = a; i <= b; i += 1) {
    if (!(i % n)) count += 1;
  }
  return count;
}

console.log(findDivCount(1, 12, 6));
