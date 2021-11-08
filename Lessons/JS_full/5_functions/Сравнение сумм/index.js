function sum(from, to) {
  let s = 0;
  for (let i = from; i <= to; i += 1) {
    s += i;
  }
  return s;
}

function compareSums(a, b, c, d) {
  return sum(a, b) > sum(c, d);
}

console.log(compareSums(2, 5, 1, 3));
