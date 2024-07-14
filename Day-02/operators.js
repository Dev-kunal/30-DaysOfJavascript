// sum
console.log({ add: 10 + 20 });

// substract
console.log({ substract: 20 - 10 });

// mutliply
console.log({ multiply: 20 * 10 });

// divide
console.log({ divide: 20 / 10 });

// remainder
console.log({ remainder: 20 % 12 });

let a = 10;
console.log({ sum: (a += 2) });

let b = 15;
console.log({ substract: (b -= 2) });

console.log({ a, b });

if (a < b) console.log("a is less than b");

if (b > a) console.log("b is greater than a");

if (a <= b) console.log("a is less than equal to b");

if (b >= b) console.log("b is greater than equal to a");

const x = "2";
const y = 2;

if (x == y) console.log("Equality");

if (x === y) console.log("Strict Equality");

if (x !== y) console.log("X is Strictly not equal to Y");

// logical operators
if (a && b) console.log("both the values are tru");

if (a || false) console.log("any one value is true");

if (!true) console.log("wont appear");

if (!false) console.log("will appear");

console.log({ res: a > 0 ? "Positive" : "Negative" });
