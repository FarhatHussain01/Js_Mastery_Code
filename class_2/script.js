//  Datatypes

// Primitive datatypes
const fullName = "Farhat"; // string
const age = 26; // number
const isFun = true; // boolean
let first_Name; // undefined
const something = null; // null

console.log(typeof fullName);
console.log(typeof age);
console.log(typeof isFun);
console.log(first_Name);
console.log(typeof something);

// Object datatypes

const emptyArray = [];
const emptyObject = {};

// Basic calculations

// Simple math operations
// Addition
console.log(4 + 5 * 4);
console.log(6 + 6 / 2);

const num1 = 14;
const num2 = 7;
const divisionResult = num1 / num2;

console.log(divisionResult);

console.log(10 % 3);
console.log(2 ** 2); // 2^2

// concatination

// Concatenation

const firstName = "Syed";
const lastName = "Kazmi";

console.log(firstName + " " + lastName);
console.log(`My name is ${firstName} ${lastName}`);
console.log("my name is" + " " + firstName + " " + lastName);

//  string literals

console.log(`my name is 
${firstName} ${lastName}`);

// Coding Challenge #1

/*
Ali and Babar are comparing their BMI (Body Mass Index), calculated using the formula: BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meters).

1. Store Ali's and Babar's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'aliHigherBMI' to check if Ali has a higher BMI than Babar.

TEST DATA 1: Ali weighs 78 kg and is 1.69 m tall. Babar weighs 92 kg and is 1.95 m tall.
TEST DATA 2: Ali weighs 95 kg and is 1.88 m tall. Babar weighs 85 kg and is 1.76 m tall.

GOOD LUCK 😀
*/

// Test Data 1
const aliMass1 = 78;
const aliHeight1 = 1.69;

const babarMass1 = 92;
const babarHeight1 = 1.95;

const aliBMI1 = aliMass1 / aliHeight1 ** 2;
const babarBMI1 = babarMass1 / babarHeight1 ** 2;

const aliHigherBMI1 = aliBMI1 > babarBMI1;
