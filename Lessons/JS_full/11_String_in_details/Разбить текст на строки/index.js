/* eslint-disable no-param-reassign */
const splitText = (text, len) => {
  if (typeof text === 'string') {
    if (len === undefined) {
      len = 10;
    }
    const strArr = [];

    let startPositon = 0;

    while (true) {
      const chunk = text.substr(startPositon, len);
      if (chunk.length === 0) {
        break;
      }

      strArr.push(chunk[0].toUpperCase() + chunk.slice(1));
      startPositon += len;
    }

    return strArr.join('\n');
  }
  return null;
};

console.log(splitText(11));
