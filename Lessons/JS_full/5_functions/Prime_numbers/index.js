// How to work on tech tasks. Step by step guide

// 1. Learn requirement
// 2. Create step by step algo (& input/output for funtions)
// 3. Write draft solution & testing
// 4. Refactoring & final testing -> final solution

// 1. Понять что такое простые числа
// 2. Пройтись по всем числам в диапазоне и каждое проверить на "простоту"
// 3. Каждое простое сразу выводить
// 4. Не забываем про число 1

// 1. Iterate numbers from 2 to num
// 2. iterate from 2 to i ==> num
// 3. если остаток от деления i на num = 0 - число не простое

function getPrimes(n) {
  for (let i = 2; i <= n; i += 1) {
    for (let j = 2; j <= i; j += 1) {
      if (i % j === 0 && j !== i) {
        break;
      } else {
        console.log(i);
        break;
      }
    }
  }
}

const num = 150;
getPrimes(num);
