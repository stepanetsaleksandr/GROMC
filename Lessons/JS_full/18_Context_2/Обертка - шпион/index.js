function saveCalls(fnctn) {
  // массив аргументов с которыми будет вызвана withMemory
  const calls = [];

  // ...args withMemory может принимать любые аргументы
  function withMemory(...args) {
    calls.push(args); // аргументы пушим в масив
    // this.calls = calls; // присвойте как свойство сalls
    return fnctn.apply(this, args); // вызов функции переадресовываем на другой контекст saveCalls
  }
  withMemory.calls = calls; // присвойте как свойство сalls

  return withMemory; // должна возвращать ф-цию с именем withMemory
}

/// TEST ////

function test(a, b) {
  return Math.sqrt(a * a + b * b);
}

const testWithMemory = saveCalls(test);
testWithMemory(4, 2);
testWithMemory(9, 1);

console.log(testWithMemory.calls); // [ [4, 2], [9, 1] ]

const user = {
  name: 'John',
  sayHi() {
    return this.name;
  },
};

const methodWithMemory = saveCalls(user.sayHi);

methodWithMemory.apply({ name: 'Tom' }); // 'Tom'

console.log(methodWithMemory.calls); // [ [] ]
