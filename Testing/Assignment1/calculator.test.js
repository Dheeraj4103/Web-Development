const calculator = require("./calculator")

const obj = calculator();

test("5+2 = 7", () => {
    expect(obj.add(5, 2)).toBe(7)
});
test("5-2 = 3", () => {
    expect(obj.subtract(5, 2)).toBe(3)
});
test("6/2 = 3", () => {
    expect(obj.divide(6, 2)).toBe(3)
});
test("5*2 = 10", () => {
    expect(obj.multiply(5, 2)).toBe(10);
});

