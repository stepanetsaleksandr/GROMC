const cleanTransactionsList = str => {
  if (typeof str === 'string') {
    const strArr = str.split('');
    strArr.reverse();
    const result = strArr.join('');
    return result;
  }
  return null;
};

console.log(cleanTransactionsList(324));
