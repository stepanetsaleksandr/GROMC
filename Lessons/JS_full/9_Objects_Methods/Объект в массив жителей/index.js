// 1. Разбиваем обьект на комнаты
// 2. Разбиваем полученые обьекты на пары ключ значение
// 3. Извлекаем каждое имя и пушим в масив

const getPeople = obj => {
  const peopleList = [];
  Object.values(obj).forEach(element => {
    Object.values(element).forEach(el => {
      peopleList.push(el.name);
    });
  });
  return peopleList;
};

const rooms = {
  room1: [{ name: 'Jack' }, { name: 'Andrey' }, { name: 'Ann' }, { name: 'Vasyl' }],
  room2: [{ name: 'Dan' }],
  room3: [{ name: 'Denis' }, { name: 'Max' }, { name: 'Alex' }],
};

getPeople(rooms);
