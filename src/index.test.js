import { D, C, H, S, highCard, pair } from "./index";

const handOnlyWithHighCard = [
  { value: 2, color: H },
  { value: 3, color: D },
  { value: 5, color: S },
  { value: 9, color: C },
  { value: 13, color: D }
];

it("returns the highest card of a hand", () => {
  expect(highCard(handOnlyWithHighCard)).toEqual({ value: 13, color: D });
});

const handWithPair = [
  { value: 2, color: H },
  { value: 3, color: D },
  { value: 2, color: S },
  { value: 9, color: C },
  { value: 13, color: D }
];

it("returns true if the hand has a pair", () => {
  expect(pair(handWithPair).toBeTrue());
  expect(pair(handOnlyWithHighCard).toBeTrue());
})