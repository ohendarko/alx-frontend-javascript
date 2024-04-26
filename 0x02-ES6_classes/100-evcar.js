import Car from './10-car';

const cloneMethod = Symbol('clone');

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;

    // eslint-disable-next-line func-names
    this[cloneMethod] = function () {
      return new Car(this._brand, this._motor, this._color);
    };
  }

  get range() {
    return this._range;
  }

  cloneCar() {
    const clonedCar = super.cloneCar();
    return clonedCar;
  }
}
