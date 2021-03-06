import matcher from "./matcher.mjs";
import filter from "../collection/filter.mjs";

// http://underscorejs.org/#filter
describe(`matcher`, () => {
  test(`obj + filter`, () => {
    // given
    const given = [{ a: 1, b: 2, c: 3 }, { a: 4, b: 5, c: 6 }];
    const condition = { a: 4, c: 6 };

    // when
    const result = filter(given, matcher(condition));

    // then
    expect(result).toEqual([{ a: 4, b: 5, c: 6 }]);
  });
});
