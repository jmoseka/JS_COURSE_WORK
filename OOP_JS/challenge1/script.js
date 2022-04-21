const Car = function(make, speed){
    this.make = make;
    this.speed = speed;
}

Car.prototype.accelerate = function(){
    this.speed += 10;
    console.log(`${this.make} going at ${this.speed} km/h`)
}

Car.prototype.brake = function(){
    this.speed -= 5;
    console.log(`${this.make} going at ${this.speed} km/h`)

}

const BMW = new Car("BMW", 12);
const Mercedes = new Car("Mercedes", 100);

BMW.accelerate();
Mercedes.brake();
BMW.accelerate();
BMW.accelerate();BMW.accelerate();
