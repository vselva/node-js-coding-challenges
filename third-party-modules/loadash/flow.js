const { flow } = require("lodash");

const increment = (n) => n + 1;

const double = (n) => 2 * n;

const square = (n) => n * n;

const res = flow(increment, double, square);

console.log(res(2));
