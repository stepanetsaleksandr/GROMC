/* eslint-disable max-classes-per-file */

class Vehicle {
  constructor(name, hasWheels) {
    this.name = name;
    this.hasWheels = hasWheels;
  }

  move() {
    console.log(`${this.name} is moving`);
  }

  stop() {
    console.log(`${this.name} stopped`);
  }
}

class Ship extends Vehicle {
  constructor(name, speed) {
    super(name, false);
    this.speed = speed; // this будет работать только если вызван супер
  }

  move() {
    console.log(`${this.name} lifting anchor up`);
    super.move();
  }

  stop() {
    super.stop();
    console.log(`${this.name} lifting anchor down`);
  }
}
