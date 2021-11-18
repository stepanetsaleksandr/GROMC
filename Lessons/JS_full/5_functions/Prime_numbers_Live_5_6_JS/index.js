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

function isPrime(number) {
  for (let index = 2; index < number; index += 1) {
    if (number % index === 0) {
      return false;
    }
  }
  return true;
}

function getPrimes(num) {
  for (let i = 2; i <= num; i += 1) {
    if (isPrime(i)) {
      console.log(i);
    }
  }
}

getPrimes(15);
