const getMethodsNames = {
  years: 'getFullYear',
  months: 'getMonth',
  days: 'getDate',
  hours: 'getHours',
  minutes: 'getMinutes',
  seconds: 'getSeconds',
  milliseconds: 'getMilliseconds',
};

const setMethodsNames = {
  years: 'setFullYear',
  months: 'setMonth',
  days: 'setDate',
  hours: 'setHours',
  minutes: 'setMinutes',
  seconds: 'setSeconds',
  milliseconds: 'setMilliseconds',
};
// На входе дата
// На выходе обьект с методами
//

export const shmoment = date => {
  let result = new Date(date);
  const methods = {
    add(key, value) {
      const currentUnitValue = result[getMethodsNames[key]]();
      result = new Date(result[setMethodsNames[key]](currentUnitValue + value));
      return this;
    },
    subtract(key, value) {
      const currentUnitValue = result[getMethodsNames[key]]();
      result = new Date(result[setMethodsNames[key]](currentUnitValue - value));
      return this;
    },
    result() {
      return result;
    },
  };
  return changeDate;
};

/* const result = shmoment(new Date())
  .add('years', 2)
  .subtract('months', 3)
  .add('minutes', 1)
  .result();
console.log(result); */

const date1 = new Date(19, 4, 5);
console.log(date1);
console.log(shmoment(date1).add('days', 4).subtract('months', 3).result());
console.log(date1);
