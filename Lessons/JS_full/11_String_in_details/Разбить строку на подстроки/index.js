/* eslint-disable no-param-reassign */

const splitString = (text, len) => {
  if (typeof text === 'string') {
    if (len === undefined) {
      len = 10;
    }
    const strArr = [];
    let startPositon = 0;

    if (text.length % len) {
      const dot = len - (text.length % len);
      for (let index = 0; index < dot; index += 1) {
        text = text.concat('.');
      }
    }

    while (true) {
      const chunk = text.substr(startPositon, len);
      if (chunk.length === 0) {
        break;
      }

      strArr.push(chunk[0].toUpperCase() + chunk.slice(1));
      startPositon += len;
    }

    return strArr;
  }
  return null;
};

console.log(splitString('1234567890', 3));
console.log(splitString('qwertyuiop', 4));
console.log(splitString('qwertyuiop'));
console.log(splitString('12345678901234567890', 12));
