import { hasDuplicates } from "./checkDups";

test("Given the string 'test', returns true", () => {
  expect(hasDuplicates("test")).toEqual(true);
});

test("Given the string 'unique', returns false", () => {
  expect(hasDuplicates("abcdefg")).toEqual(false);
});
