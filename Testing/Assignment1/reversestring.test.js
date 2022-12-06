const ReverseString = require("./reversestring");

test("hello -> olleh", () => {
    expect(ReverseString("hello")).toBe("olleh");
});
test("string -> gnirts", () => {
    expect(ReverseString("string")).toBe("gnirts");
});
test("Assing -> gnissA", () => {
    expect(ReverseString("Assing")).toBe("gnissA");
});
test("average -> egareva", () => {
    expect(ReverseString("average")).toBe("egareva");
});
test("Krishna -> anhsirK", () => {
    expect(ReverseString("Krishna")).toBe("anhsirK");
});