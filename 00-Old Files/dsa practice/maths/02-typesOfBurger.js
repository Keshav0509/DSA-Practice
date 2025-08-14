/*
Problem Statement:
Basant finds himself in the grips of hunger and sets out to a burger shop. This particular establishment offers two kinds of burgers:
Normal burgers, available at a price of X rupees each.
Premium burgers, which come at a higher cost of Y rupees each (where Y > X).
With R rupees in his possession, Basant's goal is to purchase precisely N burgers. His aim is to obtain the maximum number of premium burgers possible within his budget. Your task is to determine the optimal quantity of both types of burgers that Basant should buy.
If it is not feasible for Basant to acquire N burgers, the output will be -1.

Your Task-You don't need to read input or print anything. Complete the function typesOfBurger() which takes integers X, Y, N, and R — the cost of a normal burger, the cost of a premium burger, the number of burgers Basant wants to buy, and the amount of money Basant has.Return an Array of size 2 integers: Arr[0] the number of normal burgers and Arr[1] the number of premium burgers Basant must buy satisfying the given conditions.Return [-1] if he cannot buy N burgers.*/

export const typesOfBurger = (x, y, n, r) => {
  if (r < x * n) return [-1];

  let maxPrimium = Math.floor((r - n * x) / (y - x));
  maxPrimium = Math.min(n, maxPrimium);
  let normal = n - maxPrimium;

  return [normal, maxPrimium];
};

