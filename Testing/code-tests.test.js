const OrderTotal = require("./order-total");

it("Quantity", () => {
  expect(
    OrderTotal({
      items: [
        {
          name: "Dragon Candy",
          price: 2,
          quantity: 3,
        },
      ],
    })
  ).toBe(6);
});

test("Shipping", () => {
  expect(
    OrderTotal({
      items: [
        {
          name: "Dragon Candy",
          price: 20,
          quantity: 3,
        },
        {
          name: "Dragon shell",
          price: 800,
          quantity: 1,
        },
      ],
    })
  ).toBe(860);
});
