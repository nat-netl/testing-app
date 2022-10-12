const square = require("./square");

describe("mapArrToString", () => {
  let mockValue;

  // Выполняется перед каждым тестом
  beforeEach(() => {
    // Добавить в БД
  });

  // Выполняется один раз перед запуском
  beforeAll(() => {});

  test("square", () => {
    // expect (square(2)).toBe(4)
    // expect (square(2)).toBeLessThan(5)
    // expect (square(2)).toBeGreaterThan(3)
    // expect (square(2)).not.toBeUndefined()
    const spyMathPow = jest.spyOn(Math, "pow");
    square(2);
    expect(spyMathPow).toBeCalledTimes(1);
  });

  test("square", () => {
    const spyMathPow = jest.spyOn(Math, "pow");
    square(1);
    expect(spyMathPow).toBeCalledTimes(0);
  });

  afterEach(() => {
    jest.clearAllMocks()
  });
  afterAll(() => {});
});
