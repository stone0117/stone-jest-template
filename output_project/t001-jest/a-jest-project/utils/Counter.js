export default class Counter {
  get number() {
    return this._number
  }

  set number(value) {
    this._number = value
  }

  constructor(number) {
    this._number = number
  }

  plus(num) {
    this.number += num
  }

  minus(num) {
    this.number -= num
  }
}
