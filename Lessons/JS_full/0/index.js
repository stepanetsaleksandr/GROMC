// const Car = {
//   model: 'S',
//   engine: 'P100D',
//   range: 800,
// };

// console.log(Car);

// delete Car['range'];
// delete Car.range;
// console.log(Car);

const myObject = {
  ircEvent: 'PRIVMSG',
  method: 'newURI',
  regex: '^http://.*',
};

const { regex, ...newObj } = myObject;

console.log(newObj); // has no 'regex' key
console.log(myObject); // remains unchanged
