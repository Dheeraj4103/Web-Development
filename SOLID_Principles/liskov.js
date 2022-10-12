// lets say we have a Bird class extended by Duck and Penguine

class Bird {
    fly() {
        console.log('I can fly');
    }
}

class Duck extends Bird {
    quack() {
        console.log('quack.....quack');
    }
}

class Penguine extends Bird {
    fly() {
        throw new Error('I cannot fly');
    }

    swim() {
        console.log('I can swim');
    }
}

function makeBirdFly(bird) {
    bird.fly();
} 

const duck = new Duck();
const penguin = new Penguine();

makeBirdFly(duck);
makeBirdFly(penguin);