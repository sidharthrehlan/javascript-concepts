class Automobile {
  constructor(wheelcount, topSpeed) {
    this.noOfWheels = wheelcount;
    this.topSpeed = topSpeed;
  }

  getTopSpeed() {
    return this.topSpeed;
  }
  getNoOfWheels() {
    return this.numberOfWheels;
  }
}

class Car extends Automobile {
  constructor(wheelcount, topSpeed, noOfSeats) {
    super(wheelcount, topSpeed);
    this.numberOfSeats = noOfSeats;
  }

  getCarDetail() {
    return {
      wheelcount: this.wheelcount,
      numberOfSeats: this.numberOfSeats,
      topSpeed: this.topSpeed,
    };
  }
}

let hatchBackCar = new Car(4, 120, 4);
hatchBackCar.getTopSpeed();
console.log(hatchBackCar);
