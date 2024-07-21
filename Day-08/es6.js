let name = "kunal",
  age = 24;

const templateLiteral = `Hello THis is ${name} and my age is ${age}`;
console.log(templateLiteral);

const templateLiteral2 = `this is a multiline template literal string
this is second line
`;
console.log(templateLiteral2);

const array = [1, 2, 3, 4, 5];

const [first, second] = array;

console.log({ first, second });

const book = {
  title: "xyz",
  author: "kunal",
};

const { title, author } = book;

const newARray = [...array, 6, 7, 8];

function restOperatorUse(...allArgs) {
  const sumOfAll = allArgs.reduce((acc, val) => acc + val, 0);
  return sumOfAll;
}

console.log({ sum: restOperatorUse(1, 2, 3, 4, 5, 6) });

function product(a, b = 1) {
  return a * b;
}

console.log({ p1: product(2, 5) });
console.log({ p2: product(2) });

// enhanced temaplte literal
function createObject(name, age, city) {
  return {
    name,
    age,
    city,
    getName: function () {
      return name;
    },
  };
}

console.log({ enobj: createObject("kunal", 24, "Nagpur") });
console.log({ name: createObject("kunal").getName() });

function createEnhancedObject() {
  return {
    [1 + 2]: "sum",
    [9 - 2]: "difference",
  };
}

console.log({ en: createEnhancedObject() });
