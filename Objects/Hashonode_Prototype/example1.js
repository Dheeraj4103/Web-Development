// var playerOneName = "Rohit";
// var playerOneAge = 25;

// var playerTwoName = "Virat";
// var playerTwoAge = 33;

// console.log(playerOneName, playerOneAge);
// console.log(playerTwoName, playerTwoAge);

/*  output will be:- 
    Rohit 25
    Virat 33  */


// var playerOne = {
//     name: "Rohit",
//     age: 25
// }

// var playerTwo = {
//     name: "Virat",
//     age: 33
// }

// console.log(playerOne);
// console.log(playerTwo);

// // output will be: -
// // { name: 'Rohit', age: 25 }
// // { name: 'Virat', age: 33 }

function Player(name, age) {
    this.name = name;
    this.age = age;
}

var player1 = new Player("Rohit", 25);
var player2 = new Player("Virat", 33);

console.log(player1);
console.log(player2);

// output will be: -
// Player { name: 'Rohit', age: 25 }
// Player { name: 'Virat', age: 33 }

Player.prototype.info = function () {
    console.log(`Hello, I am ${this.name} and I am ${this.age} year old.`);
} 

player1.info();
player2.info();

// output will be: -
// Hello, I am Rohit and I am 25 year old.
// Hello, I am Virat and I am 33 year old.

console.log(Player.prototype);
// output will be: -
// { info: [Function (anonymous)] }

console.log(player1.constructor.toString());

// output will be: - 
// function Player(name, age) {
//     this.name = name;
//     this.age = age;
// }