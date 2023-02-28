/* Fix Functions

  Aim: to understand the change code inside functions 

  See the below functions. They are syntactically correct but are not outputting the right results.

  Run the tests and see how you can fix them.

  NOTE:Only make edits inside the function

*/

function mood(isHappy) {
  return isHappy? "I am happy" : "I am not happy";
}

function greaterThan10(isBigEnough) {
  return isBigEnough > 10? "num is greater than 10" : "num is not big enough";
}

/* ======= TESTS - DO NOT MODIFY ===== */

test("mood function works for true", () => {
  expect(mood(true)).toEqual("I am happy");
});

test("mood function works for false", () => {
  expect(mood(false)).toEqual("I am not happy");
});

test("greaterThanTen function works for value greater than 10", () => {
  expect(greaterThan10(11)).toEqual("num is greater than 10");
});

test("greaterThanTen function works for value much greater than 10", () => {
  expect(greaterThan10(96)).toEqual("num is greater than 10");
});

test("greaterThanTen function works for value less than 10", () => {
  expect(greaterThan10(9)).toEqual("num is not big enough");
});

test("greaterThanTen function works for value equal to 10", () => {
  expect(greaterThan10(10)).toEqual("num is not big enough");
});
