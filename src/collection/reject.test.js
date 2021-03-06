import reject from "./reject.mjs";

// http://underscorejs.org/#filter
describe(`reject`, () => {
  test(`[1, 2, 3, 4, 5, 6] + num => num % 2 === 0`, () => {
    // given
    const given = [1, 2, 3, 4, 5, 6];

    // when
    const result = reject(given, num => num % 2 === 0);

    // then
    expect(result).toEqual([1, 3, 5]);
  });
});
