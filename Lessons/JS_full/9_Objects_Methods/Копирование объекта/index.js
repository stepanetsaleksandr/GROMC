const users = { 'John Doe': 19, Tom: 17, Bob: 18 };

const getAdults = userObj => {
  const usersArray = Object.entries(userObj); // преобразование обьекта в масив
  const filteredUsersArray = usersArray.filter(user => user[1] >= 18); // фильтруем масив

  const userNames = filteredUsersArray.map(user => user[0]);

  return userNames;
};

console.log(getAdults(users));
