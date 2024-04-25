import Car from './10-car';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;

    this[cloneMethod] = function () {
      return new Car(this._brand, this._motor, this._color);
    }
  }

  cloneCar() {
    const clonedCar = super.cloneCar();
    return clonedCar;
  }
}
