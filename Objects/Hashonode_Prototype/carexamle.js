// For giving example I have set Random values
function Vehicle() {
    this.engine = '120cc';
    this.noOfWheels = 4;
    this.noOfGears = 5;
}

// adding getinfo() in vehicle prototype
Vehicle.prototype.getinfo = function () {
    console.log(`Engine:- ${this.engine}, Wheels:- ${this.noOfWheels}`);
}

// Car constructor
function Car(name, color, id) {
    this.name = name;
    this.color = color;
    this.id = id;
}
// adding Vehicle's properties tp Car's prototype
//Car.prototype = new Vehicle();

var Audi = new Car("Audi", "Red", 4652);
// Audi.getinfo();
// console.log(Audi.name, Audi.color);

// output will be: -
// Engine:- 120cc, Wheels:- 4
// Audi Red

//console.log(Audi.toString());

// output will be: -
// [object Object]

// Car.prototype = Vehicle.prototype;

// var vehicleobj = new Vehicle();

// var carobj = new Car();

// Car.prototype.getSpeed = function () {
//     console.log("This car is too fast.")
// }

//carobj.getSpeed();
//vehicleobj.getSpeed();

// output will be: -
// This car is too fast.
// This car is too fast.

//console.log(Vehicle.prototype);
//console.log(Car.prototype);

// output will be: -
// { getinfo: [Function (anonymous)], getSpeed: [Function (anonymous)] }
// { getinfo: [Function (anonymous)], getSpeed: [Function (anonymous)] }

Car.prototype = Object.create(Vehicle.prototype);

var vehicleobj = new Vehicle();

var carobj = new Car();

Car.prototype.getSpeed = function () {
    console.log("This car is too fast.")
}

carobj.getSpeed();
vehicleobj.getSpeed();

// output will be: - 
// This car is too fast.
// error

console.log(Vehicle.prototype);
console.log(Car.prototype);

// output will be: - 
// { getinfo: [Function (anonymous)] }
// Vehicle { getSpeed: [Function (anonymous)] } 