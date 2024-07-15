const num = 11;

if (num > 0) console.log("num is positive");
if (num < 0) console.log("num is negative");
if (num === 0) console.log("num is zero");

let num1 = 20,
  num2 = 12,
  num3 = 30,
  laregest;
if (num1 > num2 && num1 > num3) laregest = num1;
else if (num2 > num1 && num2 > num3) laregest = num2;
else if (num3 > num1 && num3 > num2) laregest = num3;
console.log({ laregest });

let day,
  dayNum = 4;

switch (dayNum) {
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
    break;
  case 7:
    day = "Sunday";
    break;
}

console.log({ day });

const marks = 75;
let grade;

switch (true) {
  case marks >= 75 && marks <= 100:
    grade = "A+";
    break;
  case marks >= 60 && marks < 75:
    grade = "A";
    break;
  case marks >= 50 && marks < 60:
    grade = "B";
    break;
  case marks >= 40 && marks < 50:
    grade = "C";
    break;
  case marks <= 35:
    grade = "FAIL";
    break;
  default:
    grade = "Invalid marks";
}

console.log({ grade });

const isOddOrEven = num % 2 === 0 ? "EVEN" : "ODD";
console.log({ isOddOrEven });

// leap year

function isLeapYear(year) {
  let res;
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    res = "Leap";
  } else {
    res = "Not a Leap";
  }
  console.log(year, res);
}

isLeapYear(2004);
isLeapYear(2000);
isLeapYear(1984);
isLeapYear(1994);
isLeapYear(2003);
