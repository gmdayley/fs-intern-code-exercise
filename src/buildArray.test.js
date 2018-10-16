import { buildArrayOfNums } from "./buildArray";

test("Given a 7, returns [1, 2, 3, 4, 5, 6, 7]", () => {
  expect(buildArrayOfNums(7)).toEqual([1, 2, 3, 4, 5, 6, 7]);
});

test("Given a 0, returns []", () => {
  expect(buildArrayOfNums(0)).toEqual([]);
});

test("Given a string, returns undefined", () => {
  expect(buildArrayOfNums("hello")).toEqual(undefined);
});
