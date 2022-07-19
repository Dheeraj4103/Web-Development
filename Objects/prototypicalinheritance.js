function Plant() {
    this.country = "mexico";
    this.isOrganic = true;
}

Plant.prototype.amIOrganic = function () {
    if (this.isOrganic) {
        return "I am Organic";
    }
    else {
        return "I am not Organic";
    }
}

function Fruit(name) {
    this.name = name;
}

Fruit.prototype = Object.create(Plant.prototype);

var apple = new Fruit("Apple");

console.log(apple.amIOrganic());

