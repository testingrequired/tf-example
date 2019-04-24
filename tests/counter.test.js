describe("counter", () => {
  let value = 1;

  beforeEach(() => {
    value++;
  });

  it("should increment", () => assert(value == 2));
});
