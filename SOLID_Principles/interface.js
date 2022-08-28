class Entity {
    constructor(name) {
        this.name = name;
    }
}

const mover = {
    move() {
        console.log(`${this.name} moved`);
    }
}

const attacker = {
    attack(targetEntity) {
        console.log(`${this.name} attacked ${targetEntity}`);
    }
}

const hasHealth = {
    takeDamage(amount) {
        this.health -= amount;
        console.log(`${this.name} has ${this.health} health`);
    }
}

class Character extends Entity {
    constructor(name, attackDamage, health) {
        super(name);
        this.attackDamage = attackDamage;
        this.health = health;
    }
}

class Wall extends Entity {
    constructor(name, health) {
        super(name);
        this.health = health;
    }
}

class Turret extends Entity {
    constructor(name, attackDamage) {
        super(name);
        this.attackDamage = attackDamage;
    }
}


Object.assign(Character.prototype, mover);
Object.assign(Character.prototype, attacker);
Object.assign(Character.prototype, hasHealth);

Object.assign(Wall.prototype, hasHealth);

Object.assign(Turret.prototype, attacker);



const character = new Character("Dheeraj", 10, 300);
const wall = new Wall("Wall", 300);
const turret = new Turret("Turret", 10);

turret.attack(character);
character.move();
character.attack(wall);