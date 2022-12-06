const cipher = require("./cipher");


test("defend the east wall of the castle", () => {
    expect(cipher("defend the east wall of the castle")).toBe("efgfoe uif fbtu xbmm pg uif dbtumf");
});

test("abcdefghijklmnopqrstuvwxyz", () => {
    expect(cipher("abcdefghijklmnopqrstuvwxyz")).toBe("bcdefghijklmnopqrstuvwxyza");
});

