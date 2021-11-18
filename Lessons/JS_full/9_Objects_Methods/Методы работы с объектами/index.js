const users = { Tom: 17, Bob: 18 };
const players = { 'John Doe': 19 };

const copyObj = obj => {
  const copyObj = { ...obj };
  return copyObj;
};

console.log(copyObj(users));
