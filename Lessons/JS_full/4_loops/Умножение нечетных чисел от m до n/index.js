const m = 1;
const n = 5;
let result = 1;

// eslint-disable-next-line no-plusplus
for (let i = m; i <= n; i++) {
  if (i % 2 === 1) {
    result *= i;
  }
}

console.log(result);
