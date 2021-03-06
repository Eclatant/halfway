import contains from "./contains.mjs";

describe(`contains`, () => {
  // http://underscorejs.org/#contains
  test(`[1, 2, 3] + find 3`, () => {
    // given
    const given = [1, 2, 3];
    const findValue = 3;

    // when
    const result = contains(given, findValue);

    // then
    expect(result).toBe(true);
  });

  test(`[1, 2, 3] + find 1 + fromIndex 0`, () => {
    // given
    const given = [1, 2, 3];
    const findValue = 1;
    const fromIndex = 0;

    // when
    const result = contains(given, findValue, fromIndex);

    // then
    expect(result).toBe(true);
  });

  test(`[1, 2, 3] + find 1 + fromIndex 1`, () => {
    // given
    const given = [1, 2, 3];
    const findValue = 1;
    const fromIndex = 1;

    // when
    const result = contains(given, findValue, fromIndex);

    // then
    expect(result).toBe(false);
  });
});
