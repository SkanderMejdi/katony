import {
  D,
  C,
  H,
  S,
  highCard,
  pair,
  doublePair,
  threeOfAKind,
  straight,
  flush,
  fullHouse,
  fourOfAKind,
} from "./index";

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
  expect(pair(handWithPair)).toBe(true);
  expect(pair(handOnlyWithHighCard)).toBe(false);
});

const handWithDoublePair = [
  { value: 2, color: H },
  { value: 14, color: D },
  { value: 2, color: S },
  { value: 14, color: C },
  { value: 13, color: D }
];

it("returns true if the hand has a double pair", () => {
  expect(doublePair(handWithPair)).toBe(false);
  expect(doublePair(handWithDoublePair)).toBe(true);
});

const handWithThreeOfAKind = [
  { value: 2, color: H },
  { value: 14, color: D },
  { value: 2, color: S },
  { value: 1, color: C },
  { value: 2, color: D }
];

it("returns true if the hand has three cards of a kind", () => {
  expect(threeOfAKind(handWithDoublePair)).toBe(false);
  expect(threeOfAKind(handWithThreeOfAKind)).toBe(true);
});

const handWithStraight = [
  { value: 2, color: H },
  { value: 3, color: D },
  { value: 5, color: S },
  { value: 4, color: C },
  { value: 6, color: D }
];

it("returns true if the hand has a straight", () => {
  expect(straight(handWithThreeOfAKind)).toBe(false);
  expect(straight(handWithStraight)).toBe(true);
});

const handWithFlush = [
  { value: 2, color: H },
  { value: 10, color: H },
  { value: 5, color: H },
  { value: 12, color: H },
  { value: 6, color: H }
];

it("returns true if the hand has a flush", () => {
  expect(flush(handWithStraight)).toBe(false);
  expect(flush(handWithFlush)).toBe(true);
});

const handWithFullHouse = [
  { value: 2, color: H },
  { value: 3, color: D },
  { value: 2, color: D },
  { value: 3, color: C },
  { value: 3, color: H }
];

it("returns true if the hand has a full house", () => {
  expect(fullHouse(handWithStraight)).toBe(false);
  expect(fullHouse(handWithFullHouse)).toBe(true);
});

const handWithFourOfAKind = [
  { value: 3, color: H },
  { value: 3, color: D },
  { value: 2, color: D },
  { value: 3, color: S },
  { value: 3, color: H }
];

it('returns true if the has a for of a kind', () => {
  expect(fourOfAKind(handWithFullHouse)).toBe(false);
  expect(fourOfAKind(handWithFourOfAKind)).toBe(true);
})