import identity from "./identity.mjs";

describe("identity", () => {
  test("through", () => {
    // given
    const given = 1010;

    // when
    const result = identity(given);

    // then
    expect(result).toBe(1010);
  });
});
