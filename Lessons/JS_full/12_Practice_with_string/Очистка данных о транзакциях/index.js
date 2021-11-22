// 1. Проходим по елементам массива
// 2. Каждый проверяем на тип, если строка модифицируем ее под условия
// 3. Если в троке есть буква,  пушим null
// 4. Если число просто пушим в новый масив
// 5. При каждо пуше добавляем $ и два знака после запятой
// 6. Фильтруем итог удаляя null

const modString = str => {
  if (str.match(/[a-z]/)) {
    return null;
  }
  return '$' + (+str.trim()).toFixed(2);
};

const cleanTransactionsList = arr => {
  let resArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (typeof arr[index] === 'string') {
      resArr.push(modString(arr[index]));
    } else resArr.push('$' + arr[index].toFixed(2));
  }

  resArr = resArr.filter(function (el) {
    return el != null;
  });
  return resArr;
};

// console.log(cleanTransactionsList(arr));

const arr = ['  1.9    ', '16.4', 17, ' 1 dollar '];

console.log(cleanTransactionsList(arr));
