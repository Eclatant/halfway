import entries from "./entries.mjs";

describe("entries", () => {
  test(`["a", "b", "c"]`, () => {
    // given
    const given = ["a", "b", "c"];

    // when
    const result = entries(given)[Symbol.iterator]();

    // then
    expect(result.next().value).toEqual([0, "a"]);
    expect(result.next().value).toEqual([1, "b"]);
    expect(result.next().value).toEqual([2, "c"]);
  });

  test(`{ a: 0, b: 1, c: 2 }`, () => {
    // given
    const given = { a: 0, b: 1, c: 2 };

    // when
    const result = entries(given)[Symbol.iterator]();

    // then
    expect(result.next().value).toEqual(["a", 0]);
    expect(result.next().value).toEqual(["b", 1]);
    expect(result.next().value).toEqual(["c", 2]);
  });
});
