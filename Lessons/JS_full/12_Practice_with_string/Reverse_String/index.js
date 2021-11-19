const reverseString = str => {
  if (typeof str === 'string') {
    const strArr = str.split('');
    strArr.reverse();
    const result = strArr.join('');
    return result;
  }
  return null;
};

console.log(reverseString(324));
