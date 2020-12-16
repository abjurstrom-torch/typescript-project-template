import Example from "../src/Example";

test("adds 1 + 2 to equal 3", () => {
  expect(1 + 2).toBe(3);
});

test("Example.ProcessNumbers, on an array of ints, doubles each of the array of ints", () => {
  const objectUnderTest = new Example();
  expect(objectUnderTest.ProcessNumbers([2, 4, 8, 16, 32])).toEqual([4, 8, 16, 32, 64]);
});
