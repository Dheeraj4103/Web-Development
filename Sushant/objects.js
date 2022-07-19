function Player(name, age) {

}

Player.prototype.name = this.name;
Player.prototype.age = this.age;
//console.log(Player.prototype)

Player.prototype.getinfo = function () {
    console.log("hello I am " + this.name);
}

//console.log(Player.prototype);

var player1 = new Player("Sushant", 20);
var player2 = new Player("Dheeraj", 20);



// player1.getinfo();
// player2.getinfo();

console.log(player1.toStri());