function Calculator() {
    const add = (a, b) => { return a + b };
    const subtract = (a, b) => { return a - b };
    const divide = (a, b) => { return a / b };
    const multiply = (a, b) => { return a * b };


    return { add, subtract, divide, multiply };
}

module.exports = Calculator;
