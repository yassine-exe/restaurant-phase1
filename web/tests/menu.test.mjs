import test from "node:test";
import assert from "node:assert/strict";
import { searchMenu } from "../src/lib/menu.mjs";

const items = [
  { id: 1, name: "Pizza" },
  { id: 2, name: "Burger" },
];

const cases = [
  ["Pizza", [1]],
  ["PIZZA", [1]],
  ["  Pizza  ", [1]],
  ["piz", [1]],
  ["", [1, 2]],
  ["   ", [1, 2]],
  ["Sushi", []],
];

for (const [query, expectedIds] of cases) {
  test(`Search for "${query}"`, () => {
    const result = searchMenu(items, query);
    assert.deepEqual(result.map((item) => item.id), expectedIds);
  });
}
