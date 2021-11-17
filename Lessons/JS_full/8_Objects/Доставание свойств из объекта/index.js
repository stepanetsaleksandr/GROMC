/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */

/* Для решения этой задачи используй for..in цикл. В реальных проектах это плохая практика,
 * лучше использовать методы класса Object - keys(), values(), entries(). Но мы с ними пока не познакомитись.
 * Чтобы eslint не ругался на эту ошибку, для этой задачи он отключен аннотацией eslint-disable
 * */

// 1. iteration over an object and array
// 2. if key in array = key of object push it to new obj

const pickProps = (obj, props) => {
  const resObj = {};
  const resArr = [];
  const keysArr = Object.keys(obj); //обьект превращаем в масив
  const valuesArr = Object.values(obj); //обьект превращаем в масив

  for (let i = 0; i < props.length; i += 1) {
    //перебор входящего масива
    for (let j = 0; j <= keysArr.length; j += 1) {
      //перебор ключей обьекта(масива ключей)
      if (props[i] === keysArr[j]) {
        //если ключи сошлись
        resArr.push(props[i]); //пушим в новый массив ключ
        resArr.push(valuesArr[j]); //пушим значение
      }
    }
  }

  for (let i = 0; i < resArr; i += 2) {
    resObj.resArr[i] = i + 1;
  }
  return resObj;
};
const obj1 = { a: 1, b: 2, c: 5, d: 55 };
const arr = ["a", "c", "d", "hex", "4444"];
// examples
console.log(pickProps(obj1, arr)); // ==> { a: 1, c: 3 }
pickProps({ a: 1, b: 2, c: 3 }, ["a", "c", "d", "hex"]); // ==> { a: 1, c: 3 }
