// # Topic 1: Falsy and Truthy Values

// Explain the concept of falsy and truthy values in JavaScript.
// List the common falsy values: false, 0, "", null, undefined, NaN.
// Describe truthy values as any value that is not falsy.
// Highlight the importance of understanding these values in if-else statements.

//  false

// List the common falsy values: false, 0, "", null, undefined, NaN.

let num = undefined;

if (num) {
  console.log("hello");
}

console.log(Boolean(0)); //false
console.log(Boolean(undefined)); // false
console.log(Boolean("Jonas")); // true
console.log(Boolean({})); // true
console.log(Boolean("")); // false

let value = 0;

if (value) {
  console.log("it is not show becaue 0 is flasy value");
} else {
  console.log("it shows bcz 0 is falsy");
}

const condition = "Truthy";

if (condition) {
  console.log('This will be executed because "Truthy" is a truthy value.');
} else {
  console.log("This will not be executed.");
}

// Coding Challenge #4

// Steven wants to build a very simple tip calculator for whenever he goes eating in a resturant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

// 1. Your task is to caluclate the tip, depending on the bill value. Create a variable called 'tip' for this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!)
// 2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip). Example: 'The bill was 275, the tip was 41.25, and the total value 316.25'

// TEST DATA: Test for bill values 275, 40 and 430

// HINT: To calculate 20% of a value, simply multiply it by 20/100 = 0.2
// HINT: Value X is between 50 and 300, if it's >= 50 && <= 300 😉

// GOOD LUCK 😀

// Steven wants to build a very simple tip calculator for whenever he goes eating in a resturant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

let bill = 450;
let tip = bill > 50 && bill < 300 ? bill * 0.15 : bill * 0.2;
console.log(`you have to pay the tip of ${tip}`);

//  switch statement

// Switch syntax

// switch (condition) {
//   case value1:
//     // Code to execute if expression equals value1
//     break; // Optional, used to exit the switch block
//   case value2:
//     // Code to execute if expression equals value2
//     break;
//   // Add more cases as needed
//   default:
//   // Code to execute if expression does not match any case
// }

let day = "saturday";

switch (day) {
  case "monday":
    console.log("monday ko tu meri js ki class hoti hai");
    break;
  case "tuesday":
    console.log("tuesday ko ma free hun");
    break;
  case "wednesday":
  case "thursday":
    console.log("hdklk;sd");
  default:
    console.log("ma default hun");
}

// Topic 5: Ternary Operator

let age = 18;

if (age > 18) {
  console.log("you can cast vote");
} else {
  console.log("you are kid");
}

let canVote = age >= 18 ? "yes" : "no";
console.log(`${canVote} you can vote`);

// functions

console.log("hi im ----");
console.log("hi im ----");
console.log("hi im ----");
console.log("hi im ----");

function name() {
  console.log("hi im farhat");
}

// calling / running / invoking function

name();
name();
name();
name();
name();
name();
name();

function juiceMaker(fruit1, fruit2) {
  let juice = `we can make juice with ${fruit1} and ${fruit2}`;
  console.log(juice);
}

juiceMaker("apple", "mango"); // argument

function JuiceCounter(apples, mango) {
  let juice = `we can make our juice with  ${apples} apples and ${mango} mango`;
  console.log(juice);
}

juiceCounter(3,5); // argument
