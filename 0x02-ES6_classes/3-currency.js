export default class Currency {
  constructor(code, name) {
    this._name = name;
    this._code = code;
  }

  get name() {
    return this._name;
  }
  get code() {
    return this._code;
  }

  set name(value) {
    this._name = value;
  }

  set code(value) {
    this._code = value;
  }

  displayFullCurrency() {
    return (`${this._name} (${this._code})`)
  }
}