console.log("Hello");

// function getSenseOfLife() {
//   return 42;
// }

const getSenseOfLife = () => 42;

console.log(getSenseOfLife());

function getSquared(a) {
  return a * a;
}
console.log(getSquared(4));
console.log(getSquared(-50));
console.log(getSquared(0));

function PrintMessage(num) {
  console.log("I am " + num + " years old");
}
PrintMessage(23);

const Some = () => 42;

const Mult = (num1, num2) => num1 * num2;
console.log(Mult(2, 3));
