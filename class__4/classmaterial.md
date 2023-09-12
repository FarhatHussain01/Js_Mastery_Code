# Logical Operators

Logical operators are used to determine the logic between variables or values. They allow you to manipulate or combine boolean values (true or false) to make complex decisions in your code.

JavaScript provides three main logical operators: `&&` (AND), `||` (OR), and `!` (NOT).

## AND (`&&`) Operator

The `&&` operator returns `true` if both of its operands are `true`. Otherwise, it returns `false`.

```javascript
const condition1 = true;
const condition2 = false;

const result = condition1 && condition2;
```

# Combining Conditions

Logical operators are often used to combine multiple conditions in if statements or other control structures. This allows you to make decisions based on complex criteria

```java

const age = 25;
const hasLicense = true;

if (age >= 18 && hasLicense) {
  console.log("You are eligible to drive.");
} else {
  console.log("You are not eligible to drive.");
}
```

# Comparing Different Types

# Importance of Understanding Data Type Comparison: Understanding how different data types are compared is crucial to avoid unexpected behavior and bugs in your code.

# Explanation of JavaScript's Behavior When Comparing Different Types: When comparing different types, JavaScript might perform type coercion, converting one type to another for comparison purposes.

Comparing data of different types may give unexpected results. When comparing a string with a number, JavaScript will convert the string to a number when doing the comparison. An empty string converts to 0. A non-numeric string converts to NaN, which is always false.

```java

console.log(2 < 12); // true
console.log(2 < "12"); // true
console.log(2 < "John"); // false
console.log(2 > "John"); // false
console.log(2 == "John"); // false
console.log("2" < "12"); // false
console.log("2" > "12"); // true
console.log("2" == "12"); // false

```

# Conditional Statements

Very often when you write code, you want to perform different actions for different decisions.
You can use conditional statements in your code to do this.

In JavaScript we have the following conditional statements:

Use if to specify a block of code to be executed, if a specified condition is true
Use else to specify a block of code to be executed, if the same condition is false
Use else if to specify a new condition to test, if the first condition is false
Use switch to specify many alternative blocks of code to be executed

# if-else if-else Chains

# Grading System Based on Scores:

You can chain multiple conditions using else if statements. This is useful when you have multiple mutually exclusive conditions to check.

```java
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

```

# Falsy and Truthy Values

Keep in mind that in JavaScript, certain values are considered falsy (evaluate to false in a boolean context) and truthy (evaluate to true in a boolean context). This can affect the outcome of if-else statements.

Falsy Values: false, 0, "", null, undefined, NaN

Truthy Values: Any value that is not falsy

```java

console.log(Boolean(0)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean('Jonas')); // true
console.log(Boolean({})); // true
console.log(Boolean('')); // false

```
