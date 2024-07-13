// variable Declaration with var

var num = 10;
console.log(num);

// Declare a variable using let, assign it a string, and log the value to the console.

let str = "Learning JavaScript";
console.log(str);

//  Constant Declaration

const bool = true;
console.log(bool);

//  Data Types
// Create variables of different data types (number, string, boolean, object, array) and log each variable's type using the "typeof" operator.

const num1 = 15;
console.log(typeof num1);

const str1 = "Hello World";
console.log(typeof str1);

const booleanVariable = false;
console.log(typeof booleanVariable);

const obj = { name: "kunal", Address: "Nagpur" };
console.log(typeof obj);

const arr = [1, 2, 3, 4];
console.log(typeof arr);

// Reassigning Variables
// Declare a variable using "let", assign it an initial value, reassign a new value , and log both values to the console.

let assignValue = "kunal";
assignValue = "kunal_t";
console.log(assignValue);

//  Understanding "const".
// Try reassigning a variable declared with const and observe the erroe.

const varDeclared = "Learning JS";
varDeclared = "Learning Javascript"; // In const we can't reassign a value. it shows the error (TypeError: Assignment to constant variable.)

// Question 1: Variable Types Console Log: Write a script that declares variables of different data types and logs both the value and type of each variable to the console.

const numberValue = 150;
console.log(numberValue, typeof numberValue);

const stringValue = "Hello World";
console.log(stringValue, typeof stringValue);

const booleanValue = false;
console.log(booleanValue, typeof booleanValue);

const objectValue = { name: "Kunal", Address: "Nagpur" };
console.log(objectValue, typeof objectValue);

const arrayValue = [1, 2, 3, 4];
console.log(arrayValue, typeof arrayValue);

// Reassignment Demo: Create a script that demonstrates the difference in behavior between let and const when it comes to reassignment.

let reassignValue = "I am learning JavaScript";
reassignValue = "I am learning reactjs"; // In let we can reassign a value
console.log(reassignValue);

const assign = "My name is Kunal";
assign = "My name is Kunal "; //  In const we can't reassign a value. it shows the error (TypeError: Assignment to constant variable.)
console.log(assign);
