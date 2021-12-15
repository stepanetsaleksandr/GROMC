'use strict';

const event = {
  guests: [
    { name: 'John', email: 't@gmail.com', age: 18 },
    { name: 'Bob', email: 'b@gmail.com', age: 17 },
  ],

  message: 'Welcome to the party!',

  getInvitations() {
    return this.guests
      .filter(({ age }) => age >= 18)
      .map(({ name, email }) => ({ email, message: `Dear ${name}! ${this.message}` }));
  },
};

console.log(event.getInvitations());
