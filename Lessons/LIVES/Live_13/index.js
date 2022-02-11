// 1. Разбиваем обьект на комнаты
// 2. Разбиваем полученые обьекты на пары ключ значение
// 3. Извлекаем каждое имя и пушим в масив

// const getCustomersList = obj => {
//   const keys = Object.keys(obj);

//   return Object.values(obj)
//     .map((el, index) => ({ ...el, id: keys[index] }))
//     .sort((a, b) => a.age - b.age);
// };

// const getCustomersList = obj => {
//   return Object.entries(obj)
//     .map(entry => ({ ...entry[1], id: entry[0] }))
//     .sort((a, b) => a.age - b.age);
// };

const getCustomersList = obj => {
  return Object.entries(obj)
    .map(([id, customer]) => ({ ...customer, id }))
    .sort((a, b) => a.age - b.age);
};

// Деструктуризация
const arr = [10, 22, 11];
const [el1, el2] = arr;
console.log(el1, el2);

const customers = {
  'customer-id-1': {
    name: 'William',
    age: 54,
  },
  'customer-id-2': {
    name: 'Tom',
    age: 17,
  },
  'customer-id-3': {
    name: 'Bom',
    age: 19,
  },
};

getCustomersList(customers);
