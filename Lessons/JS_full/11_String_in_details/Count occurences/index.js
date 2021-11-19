/* eslint-disable no-param-reassign */
// 1 через search ищем совпадение
// 2 каждое совпадение плюсуем в счетчик
// 3 если строка не передана заменяем первый аргумент на ''
// 4 если второй аргумент пустой - ретурним null
// 5 херня не работает

// 1 через split разделяем строку по маске на елементы массива
// 2 количество елементов масива -1 и есть количество вхождений
// 3 если строка не передана заменяем первый аргумент на ''
// 4 если второй аргумент пустой - ретурним null

const countOccurrences = (text, str) => {
  if (str === undefined || str === '') return null;
  if (text === undefined) text = '';

  const newtxt = text.split(str);
  const res = newtxt.length - 1;

  return res;
};

console.log(countOccurrences('', ''));
