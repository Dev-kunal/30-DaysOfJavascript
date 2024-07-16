for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// table of 5
for (let i = 1; i <= 10; i++) {
  console.log(i * 5);
}

// calculate sum of numbers from 1 to 10
let i = 1,
  sum = 0;
while (i <= 10) {
  sum = sum + i;
  i++;
}
console.log({ sum });

// print numbers from 10 to 1
let j = 10;
while (j >= 1) {
  //   console.log({ j });
  j--;
}

// print numbers from 1 to 5
let k = 1;
do {
  console.log({ k });
  k++;
} while (k <= 5);

// calculate factorial of a num using do while
let num = 8,
  factorial = 1;

do {
  factorial = factorial * num;
  num--;
} while (num > 0);

console.log({ factorial });

// print pattern using nested loop
for (let i = 1; i <= 5; i++) {
  let rowString = "";
  for (let j = 1; j <= i; j++) {
    rowString += "*";
  }
  console.log(rowString);
}

// using repeat function
for (let i = 1; i <= 5; i++) {
  console.log("*".repeat(i));
}

// continue
for (let i = 1; i <= 10; i++) {
  if (i === 5) continue;
  console.log(i);
}

// break
for (let i = 1; i < 10; i++) {
  if (i === 7) break;
  console.log(i);
}
