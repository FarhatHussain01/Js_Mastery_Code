# Array methods for adding elements:

- push(): Add an element to the end of an array.
- unshift(): Add an element to the beginning of an array.

# Array methods for removing elements:

pop(): Remove and return the last element of an array.
shift(): Remove and return the first element of an array.

# Searching for elements in an array:

indexOf(): Find the index of an element in an array.
includes(): Check if an element exists in an array.

<!-- condotional satement base on array method -->

if (friends.includes('Steven')) {
console.log('You have a friend called Steven');
}

# Topic 1: Introduction to Objects

What is an object in JavaScript?
Creating objects using object literals
Accessing object properties and values
Nested objects and arrays in objects
Adding and modifying properties in objects
Challenge: Printing information from an object

# Topic 2: Dot vs. Bracket Notation

Accessing object properties using dot notation
Accessing object properties using bracket notation
Using variables and expressions with bracket notation

const key = 'age';
console.log(person['first' + key]); // Output: 3

Prompting the user for property names
Adding new properties to an object

# Topic 3: Object Methods

Adding methods to objects
this keyword in object methods
Using object methods to calculate values
Creating a summary method for an object

# add a get summary methods in an obj which summarize suumary about myself"syed farhat is a 46-year old teacher, and he has a driver's license"

console.log(`${mySelf.firstName} is a ${mySelf.age} years old ${mySelf.Job} and he ${mySelf.hasDrivingLiscence ? "has" : "does'not has"} a driver's license

Calling object methods and accessing calculated values
Challenge: Creating and using object methods

# Topic 4: Coding Challenge #3 - BMI Calculation

Creating objects for Mark and John with properties (fullName, mass, height)
Implementing a calcBMI method for both objects
Calculating BMI values for Mark and John
Comparing and displaying the BMI values
Conditional statements to determine who has a higher BMI

///////////////////////////////////////////////////////////////////
