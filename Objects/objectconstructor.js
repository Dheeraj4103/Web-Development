function player(name, age) {
    this.name = name;
    this.age = age;
};

var Player1 = new player("Dheeraj", 20);

var Player2 = new player("Suraj", 24);

console.log(Player1);
console.log(Player2);

var account = new Object();

Object.prototype.print = function () {
    console.log("This is an Object");
}

account.print();

console.log(account.constructor);

console.log(Player1.constructor);