const Person = (name, age) => {
    const getname = () => name;
    const getage = () => age;
    return { getname, getage };
}

const Nerd = (name, age) => {
    const { getname } = Person(name, age);
    const sayHello = () => {
        console.log(`Hello ${getname()}`);
    }
    return { getname, sayHello };
}

const jeff = Nerd('jeff', 21);
console.log(jeff.getname());
jeff.sayHello();