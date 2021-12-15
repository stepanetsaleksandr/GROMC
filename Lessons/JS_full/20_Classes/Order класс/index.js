'use strict';

/**
 * @field {string} id
 * @field {number} price
 * @field {date} dateCreated
 * @field {boolean} isConfirmed
 * @field {date} dateConfirmed
 * @field {string} city
 * @field {string} type
 */
export class Order {
  constructor(price, city, type, ID) {
    this.id = Math.random().toString();
    this.price = +price;
    this.dateCreated = new Date();
    this.isConfirmed = false;
    this.dateConfirmed = null;
    this.city = city;
    this.type = type;
  }

  checkPrice() {
    if (this.price < 1000) {
      return false;
    }
    return true;
  }

  confirmOrder() {
    if (!this.isConfirmed) {
      this.isConfirmed = true;
      this.dateConfirmed = new Date();
      this.id = Math.random();
    }
  }

  isValidType() {
    if (this.type === `Buy` || this.type === `Sell`) {
      return true;
    }
    return false;
  }
}
