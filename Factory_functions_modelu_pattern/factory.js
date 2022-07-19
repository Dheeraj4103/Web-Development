const personFactory = (name, age) => {
    this.name = name;
    this.age = age;
    const sayHello = () => { console.log(`Hello ${this.name}`) };
    return { name, age, sayHello };
}

const rushi = personFactory('Rushi', 20);
rushi.sayHello();