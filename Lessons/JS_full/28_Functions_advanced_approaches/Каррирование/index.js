const mult = a => b => a * b;

console.log(mult(5)(4));

const twice = mult(2);
console.log(twice(7));

const triple = mult(3);
console.log(triple(9));
