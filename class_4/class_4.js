// Logical Operators

// AND (&&) Operator
// The && operator returns true if both of its operands are true. Otherwise, it returns false.
const condition1 = true;
const condition2 = false;

const result = condition1 && condition2;

// NOT (!) Operator
// The ! operator, also known as the negation operator, reverses the boolean value of its operand. If the operand is true, ! makes it false, and vice versa.

const hasDriversLicense = true; // A
const hasGoodVision = true; // B
const isTired = false;

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

// if (hasDriversLicense && hasGoodVision) {
// console.log('Sarah is able to drive!');
// } else {
// console.log('Someone else should drive...');
// }

console.log(hasDriversLicense && hasGoodVision && isTired);

// Combining Conditions

// Logical operators are often used to combine multiple conditions in if statements or other control structures. This allows you to make decisions based on complex criteria.
const age = 25;
const hasLicense = true;

if (age >= 18 && hasLicense) {
  console.log("You are eligible to drive.");
} else {
  console.log("You are not eligible to drive.");
}

// if-else if-else Chains

// You can chain multiple conditions using else if statements. This is useful when you have multiple mutually exclusive conditions to check.
const score = 85;

if (score >= 90) {
  console.log("You got an A.");
} else if (score >= 80) {
  console.log("You got a B.");
} else if (score >= 70) {
  console.log("You got a C.");
} else {
  console.log("You need to improve your score.");
}

// Falsy and Truthy Values

// Keep in mind that in JavaScript, certain values are considered falsy (evaluate to false in a boolean context) and truthy (evaluate to true in a boolean context). This can affect the outcome of if-else statements.
// Falsy Values: false, 0, "", null, undefined, NaN
// Truthy Values: Any value that is not falsy
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Jonas"));
console.log(Boolean({}));
console.log(Boolean(""));
