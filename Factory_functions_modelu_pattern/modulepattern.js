var Calculator = (() => {
    const add = (a, b) => a + b;
    const sub = (a, b) => a - b;
    const mul = (a, b) => a * b;
    const div = (a, b) => a / b;
    return { add, sub, div, mul }
})();

var anothercal = Calculator;

//console.log(Calculator.add(10, 20));
//console.log(anothercal.add(20, 45));

function closure() {
    const example = () => {
        return "this is example";
    }
    return example;
}

const obj = closure();
console.log(obj());