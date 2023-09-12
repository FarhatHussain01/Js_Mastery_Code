//  today class topics

// Strings and Template Literal
// Math Operators:
// String Concatenation:
// Assignment Operators:
// Comparison Operators:
// Taking Decisions: if / else Statements:
// Operator Precedence:
// Taking Decisions: if / else Statements:
// Coding Challenge #2:
// Type Conversion and Coercion:
// Truthy and Falsy Values:
// Equality Operators: == vs. ===:
// Logical Operators:
// Logical operators (&&, ||, !) are used to combine or negate conditions.
// Coding Challenge #3:

// Strings are sequences of characters enclosed in quotes

let firstName = "shah";
let lastName = "kazmi";

console.log("my name is" + " " + firstName + lastName);

// Template literals allow embedding expressions within strings using backticks.

console.log(`My firstName is ${firstName}
and my last name is ${lastName} `);

// Math Operators:

let date = 2037;
let age = date - 2002;

console.log();

console.log(age);

let a = 4;
let b = 5;
let sum = a + b;
console.log(sum);

console.log(6 + 7 - 3 / 1);

console.log(3 + 4 * 5); // 3 + 20
// Expected output: 23

console.log(4 * 3 ** 3); //
// Expected output: 36

console.log((a = b = 5));
// Expected output: 5

const sums = 3 ** (3 ** 2);
console.log(sums);

// Assignment Operators:
// Assignment operators in JavaScript are used to assign values to variables

// They provide a way to modify the value of a variable by performing an operation and then assigning the result back to the variable

let abc = 10;
// abc = abc + 1;
abc += 1;
abc += 1;
abc++;
++abc; //14

abc--; //13

console.log(abc);
// // abc = abc / 2;
// abc /= 2;
// abc = abc * 4;
// abc *= 4;
// console.log(abc);

// Comparison Operators:

let num1 = 23;
let num2 = 12;

console.log(num1 > num2); //boolean
console.log(num1 <= num2);

if (num1 >= num2) {
  //true
  console.log(`num1 is greater than num2`);
}

/////////////////////////

let myAge = 23;
let visaPermit = true;

if (myAge >= 18) {
  console.log(" you are pemit for visa");
} else {
  console.log(" you are not allowed for permit visa");
}

// Type Conversion and Coercion:

// Type conversion changes the data type of a value, while coercion converts values implicitly

let str = "22";
// console.log(typeof str);
// let numStr = Number(str); // number
// console.log(typeof numStr);

let num = 11;
// let strNum = String(num);
// console.log(typeof strNum);

let sumOfNumbers = str + num;
console.log(sumOfNumbers);

let subOfNumbers = str - num;
console.log(subOfNumbers);

let div = str / num;
console.log(div);

let mul = str * num;
console.log(mul);

// Coding Challenge #2

/*
Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

1. Print a nice output to the console, saying who has the higher BMI. The message can be either "Ali's BMI is higher than Zain's!" or "Zain's BMI is higher than Ali's!"
2. Use a template literal to include the BMI values in the outputs. 

Example: "Ali's BMI (28.3) is higher than Zain's (23.9)!"

HINT: Use an if/else statement 😉

GOOD LUCK 😀
*/
