export const delay = time =>
  new Promise(resolve => {
    setTimeout(() => resolve(), time);
  });
delay(3000).then(() => console.log('Done'));

// delay(3000).then(() => console.log('Done'));
// строка 'Done' должна появиться в консоли через 3 секунды
