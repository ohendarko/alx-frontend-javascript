const cloneMethod = Symbol('clone');
export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;

    this[cloneMethod] = function () {
      return new Car(this._brand, this._motor, this._color);
    }
  }

  cloneCar() {
    return this[cloneMethod]();
  }
}
