import test from "ava";
import Dynamic from "../src/actors/Dynamic";

test("Dynamic object builds with position and velocity at 0, 0 by default.", (t) => {
  const object = new Dynamic();
  t.is(object.position.x, 0);
  t.is(object.position.y, 0);
  t.is(object.velocity.x, 0);
  t.is(object.velocity.y, 0);
});
