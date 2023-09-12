# Topic: Iteration - The for Loop

# Introduction to Loops

Understanding the need for loops in programming.

# Loops are essential in programming to execute a block of code repeatedly

Different types of loops in JavaScript.

# The for Loop

Syntax and structure of a for loop.
How to use for loops for repetitive tasks.
Loop initialization, condition, and incrementation.
Using a for Loop to Print Repetitive Messages

Demonstrating how a for loop can be used to print repetitive messages or perform tasks a certain number of times.

Examples of simple loop usage.

# Topic: Looping Arrays, Breaking, and Continuing

Looping Through Arrays

How to use a for loop to iterate through the elements of an array.
Accessing array elements by index.
Filling Arrays During Iteration
(even number example) if (numbers[i] % 2 === 0)

Discussing how you can modify arrays while iterating through them.
Using the push method to add elements to a new array during iteration.
Calculating Ages from Birth Years

Demonstrating how to use a for loop to calculate ages based on birth years and store the results in another array.
Using continue and break Statements

# {

    // continue and break

console.log("--- ONLY STRINGS ---");
for (let i = 0; i < farhhat.length; i++) {
if (typeof farhhat[i] !== "string") continue;

console.log(farhhat[i], typeof farhhat[i]);
}

console.log("--- BREAK WITH NUMBER ---");
for (let i = 0; i < farhhat.length; i++) {
if (typeof farhhat[i] === "number") break;

console.log(farhhat[i], typeof farhhat[i]);
}
}

Introducing the continue statement and how it can be used to skip specific iterations.
Explaining the break statement and its use in prematurely exiting a loop.

# Topic: Looping Backwards and Loops in Loops

Iterating Backwards Through an Array

Explaining how to use a for loop to iterate through an array in reverse order.
Starting the loop from the last index and decrementing.
Nested Loops

# Introducing the concept of nested loops.

# Discussing scenarios where nested loops are useful.
