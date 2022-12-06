const Capitalize = require("./capitalize");


test("hello -> Hello", () => {
    expect(Capitalize("hello")).toBe("Hello");
});

test("new -> New", () => {
    expect(Capitalize("new")).toBe("New");
});
test("allow -> Allow", () => {
    expect(Capitalize("allow")).toBe("Allow");
});
test("final -> Final", () => {
    expect(Capitalize("final")).toBe("Final");
});
test("follow -> Follow", () => {
    expect(Capitalize("follow")).toBe("Follow");
});
test("assign -> Assign", () => {
    expect(Capitalize("assign")).toBe("Assign");
});
test("nothing -> Nothing", () => {
    expect(Capitalize("nothing")).toBe("Nothing");
});