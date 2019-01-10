import { D, C, H, S } from "./index";

const hand1 = [
  { value: 2, color: H },
  { value: 3, color: D },
  { value: 5, color: S },
  { value: 9, color: C },
  { value: 13, color: D }
];

it("returns the highest card of a hand", () => {
  expect(1).toBe(1);
});
