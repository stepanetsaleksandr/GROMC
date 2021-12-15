class Wallet {
  constructor() {
    this._balance = 0;
  }

  getBalance() {
    return this._balance;
  }

  deposit(value) {
    this._balance += value;
  }

  withdraw(value) {
    if (value > this._balance) {
      console.log('No enough funds');
      return;
    }
    this._balance -= value;
  }
}

const wallet1 = new Wallet();

console.log(wallet1.getBalance());
wallet1.deposit(123);
console.log(wallet1.getBalance());
wallet1.withdraw(122);
console.log(wallet1.getBalance());
wallet1.withdraw(2);
console.log(wallet1.getBalance());
