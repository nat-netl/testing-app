const delay = require("./delay");

describe("delay", () => {
  test("Значение", async () => {
    const sum = await delay(() => 5 + 5, 4000);
    expect(sum).toBe(10);
  });
});
