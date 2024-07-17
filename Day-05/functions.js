// function declarations

function evenOrOdd(num) {
  if (num % 2 == 0) console.log("Its even ");
  else console.log("Its Odd");
}

evenOrOdd(3);
evenOrOdd(8);
function square(num) {
  return num * num;
}

console.log({ square: square(4) });

// function expression
const maxOfTwo = function (num1, num2) {
  if (num1 > num2) console.log("Num1 is greate than Num2");
  else "Num2 is greater than num1";
};

const concnatenate = function (str1, str2) {
  return str1 + str2;
};

// arrow functions
const sum = (num1, num2) => {
  return num1 + num2;
};

const containSubstring = (str, char) => {
  return str.includes(char);
};
console.log(containSubstring("kunal", "n"));

// default values for parameters
function product(num1 = 4, num2) {
  return num1 * num2;
}

function greetings(name, age = 24) {
  return `Welcome ${name}, ${age}`;
}

// Higher order functions

function callNTimes(fn, n) {
  for (let i = 1; i <= n; i++) {
    fn();
  }
}
callNTimes(() => console.log("HI"), 4);
