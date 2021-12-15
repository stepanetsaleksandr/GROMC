const user = {
  firstName: 'Tomas',
  lastName: 'Jonson',
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  setFullName(fullName) {
    const fname = fullName.split(' ')[0];
    const lname = fullName.split(' ')[1];
    this.firstName = fname;
    this.lastName = lname;
  },
};
