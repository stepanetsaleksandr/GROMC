// На входе функция которая принимает дату
// На выходе обьект с методами

// Пишем функцию которая принимает функцию и возвращает обьект с методами

const getData = {
  years: 'getFullYear',
  months: 'getMonth',
  days: 'getDate',
  hours: 'getHours',
  minutes: 'getMinutes',
  seconds: 'getSeconds',
  milliseconds: 'getMilliseconds',
};

const setData = {
  years: 'setFullYear',
  months: 'setMonth',
  days: 'setDate',
  hours: 'setHours',
  minutes: 'setMinutes',
  seconds: 'setSeconds',
  milliseconds: 'setMilliseconds',
};

const shmoment = data => {
  let resDate = new Date(data); // работаем с вводом как с датой

  const dateModifiers = {
    // все модификаторы даты в одном обьекте

    result() {
      // если ничего не меняли ретурн ту же дату
      return resDate;
    },

    add(key, value) {
      // добавление, принимает ключ-строка(день, месяц и тд) и число (секунд, дней , часов и тд)
      const mod = getData[key]; // ключ из обьекта методов
      const modValue = resDate[mod](); //
      resDate = new Date(resDate[setData[key]](modValue + value));
      return this;
    },
    subtract(key, value) {
      return this.add(key, -value);
    },
  };
  return dateModifiers;
};

const needDate = shmoment(new Date(2000, 0, 0, 0, 0, 0, 100))
  .add('minutes', 1)
  .add('days', 10)
  .subtract('milliseconds', 0)
  .result();

console.log(`${needDate} ${needDate.getMilliseconds()}ms`);
