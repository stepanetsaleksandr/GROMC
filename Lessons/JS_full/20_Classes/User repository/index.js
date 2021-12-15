/* eslint-disable no-restricted-syntax */
/* eslint-disable dot-notation */
/* eslint-disable max-classes-per-file */
class User {
  constructor(id, name, sessionId) {
    this._id = id;
    this._name = name;
    this._sessionId = sessionId;
  }

  get id() {
    return this._id;
  }

  get name() {
    return this._name;
  }

  get sessionId() {
    return this._sessionId;
  }
}

class UserRepository {
  constructor(usersArr) {
    this._users = Object.freeze(usersArr);
  }

  get users() {
    return this._users;
  }

  getUserNames() {
    let namesArr = [];

    namesArr = this._users.map(el => el.name);

    return namesArr;
  }

  getUserIds() {
    let idArr = [];

    idArr = this._users.map(el => el.id);
    return idArr;
  }

  getUserNameById(id) {
    let name;

    this._users.forEach(user => {
      for (const key in user) {
        if (key === `_id` && user[key] === `${id}`) {
          name = user[`_name`];
        }
      }
    });

    return name;
  }
}

// examples
const user = new User(`1`, `Tom`, `session-id`);

// получить свойства можем
console.log(user.id); // ===> `1`
console.log(user.name); // ===> `Tom`
console.log(user.sessionId); // ===> `session-id`

// но изменить эти свойства нельзя
user.name = `Bob`; // пытаемся изменить старое значение
console.log(user.name); // ===> `Tom` - но изменение проигнорировано, так как setter отсутствует

const user1 = new User(`1`, `Tom`, `session-id`);
const user2 = new User(`2`, `Bob`, `session-id`);
const user3 = new User(`3`, `Ann`, `session-id`);
const user4 = new User(`4`, `Kon`, `session-id`);

console.log(UserRepository.getUserNameById(1));
