const start = 0;
const end = 1000;
let result = 0;
let div = 0; // целая часть от деления
let mods = 0; // остаток от деления

for (let i = start; i <= end; i += 1) {
  result += i;
}
mods = result % 1234;
div = Math.floor(result / 1234);
while (div > mods) {
  console.log(true);
  break;
}
while (div <= mods) {
  console.log(false);
  break;
}
