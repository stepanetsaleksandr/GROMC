class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHi() {
    console.log(`Hi, I am ${this.name}`);
  }

  requestNewPhoto() {
    console.log(`New photo request was sent for ${this.name}`);
  }

  setAge(value) {
    this.age = value;

    if (this.age >= 25) {
      this.requestNewPhoto();
    }

    if (value < 0) {
      return false;
    }

    return value;
  }

  static createEmpty() {
    return new this('', null);
  }
}

const user1 = new User(`John`, 36);
const user2 = new User(`Tom`, 6);
const user3 = new User(`Tamara`, 434);

user3.sayHi();
