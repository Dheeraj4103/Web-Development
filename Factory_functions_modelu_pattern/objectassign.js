var Person = (name, age) => {
    const getname = () => name;
    const getage = () => age;
    return { getname, getage };
}

var Nerd = (name, age) => {
    const prototype = Person(name, age);
    const sayHello = () => {
        console.log(`Hi, ${prototype.getname()}`);
    };
    return Object.assign({}, prototype, { sayHello });
}


const dheeraj = Nerd("Dheeraj", 20);

console.log(dheeraj);