import Dynamic from "../src/actors/Dynamic";

test("Dynamic object builds with position and velocity at 0, 0 by default.", () => {
  const object = new Dynamic();
  expect(object.Position.x).toBe(0);
  expect(object.Position.y).toBe(0);
  expect(object.Velocity.x).toBe(0);
  expect(object.Velocity.y).toBe(0);
});
