class Myclass {
    constructor(name) {
        this.name = name;
    };
    sayHello() {
        console.log(`Hello ${this.name}`);
    };
}

// const obj = new Myclass("Dheeraj");
// console.log(Object.getOwnPropertyNames(Myclass.prototype));


let Newclass = class namedclass {
    constructor() {
        this.name = "DHeeraj"
    }
    sayHello() { console.log("Hello " + this.name); };
};

var obj = new Newclass();
obj.sayHello();