/**
#
 Logical Operators
AND (&&) Operator
Combining Conditions
Comparing Different Types
Conditional Statements
if-else if-else Chains
Falsy and Truthy Values

 */

// # Introduction to Logical Operators

// Definition of logical operators
// Importance of logical operators in programming
// AND (&&) Operator

const condition1 = true;
const condition2 = true;

console.log(condition1 && condition2);
console.log(condition1 || condition2);
console.log(!condition1);

const isSunny = true;
const isUmberlla = false;

// if (isSunny && isUmberlla) {
//   console.log(`tum bahir ja saktay ho`);
// } else {
//   console.log(`tum bahir nahi ja saktay `);
// }

// OR

if (isSunny || isUmberlla) {
  console.log(`mazay karo tum bahir ja saktay ho`);
} else {
  console.log(`tum bahir nahi ja saktay `);
}

// not opertaor

const hasCoffee = true;
const hasTea = false;

if (hasCoffee && !hasTea) {
  console.log("You can enjoy a hot beverage.");
} else {
  console.log("No hot beverage available.");
}

const hasDriversLicense = false;
const hasGoodVision = true;
const isTired = true;

// console.log(!hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision) {
  console.log(`you are allowed to drive a car`);
} else if (isTired && hasDriversLicense) {
  console.log("you are still not allowed because you are tired");
} else {
  console.log(`you are allowed`);
}

///////////////////////////////////////////////////////////////

let score = 78;
// const score = prompt("put you score here to find your garde");

if (score >= 90) {
  console.log(`you have A+ grade`);
} else if (score >= 80) {
  console.log(`you have A grade`);
} else if (score >= 70) {
  console.log(`you have B grade`);
} else if (score >= 60) {
  console.log(`you have c grade`);
} else if (score >= 50) {
  console.log(`you have D grade`);
} else {
  console.log(`ja bachay tu fail ho gya`);
}

//Comparing Different Types

let a = 2;
let b = "2";

console.log(a == b);
console.log(a === b);

// let name = "farhat";
// console.log(Number(name));

// let num = 23;
// console.log(String(num));

console.log(2 < 12); // true
console.log(2 < "12"); // true
console.log(2 < "John"); //false
console.log(2 > "John"); //false
console.log(2 == "John"); // false
console.log("12" === "12"); // true
console.log("2" < "12"); //
console.log("2" == "12"); //
