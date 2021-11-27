class Car {
  constructor(form, model, speed) {
    this.form = form;
    this.model = model;
    this.speed = speed;
  }

  move() {
    console.log(`This car speed move is ${this.speed}`);
  }
}

class Truck extends Car {
  constructor(weight) {
    super();
    this.weight = weight;
  }

  takeCargo() {
    console.log(`${this.model} can carry ${this.weight}`);
  }
}

class Sedan extends Car {
  taakePassengers() {}
}

class SportCar extends Car {
  goFast() {}
}

let truck = new Truck(2200);
truck.takeCargo();
