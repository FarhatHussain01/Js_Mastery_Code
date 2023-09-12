// Topic 1: Introduction to Functions

// Display "hello" six times
console.log("hello");
console.log("hello");
console.log("hello");
console.log("hello");
console.log("hello");
console.log("hello");

// Topic 2: Calling Functions

// Define a function called logger
function logger() {
  console.log("i am farhat ");
}

// Call the logger function six times
logger();
logger();
logger();
logger();
logger();
logger();

// Topic 3: Function Parameters and Return Values

// Define a function called juiceMaker with two parameters
function juiceMaker(num1, num2) {
  console.log(`Our juice is made from ${num1} apples and ${num2} bananas`);
}

// Define a function called ourJuiceMaker with two parameters and a return value
function ourJuiceMaker(fruit1, fruit2) {
  return `Our juice is made from 2 ${fruit1} and 5 ${fruit2}`;
}

// Call juiceMaker and ourJuiceMaker functions
juiceMaker(2, 4);
console.log(ourJuiceMaker("apple", "orange"));
const myReadyJuice = ourJuiceMaker("mangos", "bananas");
console.log(myReadyJuice);

// Topic 4: Function Declarations vs. Function Expressions

// Function declaration (no code inside)
function name() {}

// Function expression stored in the variable 'juice'
const juice = function () {
  console.log("My juice is not ready");
};

// Call the 'juice' function
juice();

// Topic 5: Arrow Functions

// Define an arrow function 'calcAge'
const calcAge = (year) => {
  const age = 2023 - year;
  return age;
};

console.log(calcAge(2001));

// Define an arrow function 'currentYear'
const currentYear = (year) => year;
console.log(currentYear(2023));

// arrow function other example 

// const yearsUntilRetirement = () => {
//   const age = 2023 - year;

//   if (age >= 60) {
//     console.log(`The person is retired, having age of ${age}`);
//   } else if (age < 60) {
//     console.log(`The person is not retired and has age of ${age}`);
//   }
// };

// // Call 'yearsUntilRetirement'
// yearsUntilRetirement();



// Topic 6: Function Calling Other Functions

// Define an arrow function 'ageCalculator'
const ageCalculator = (year) => {
  const age = 2023 - year;
  return age;
};



// Define a function 'yearsUntilRetirement' calling 'ageCalculator'
const yearsUntilRetirement = () => {
  const age = ageCalculator(1983);

  if (age >= 60) {
    console.log(`The person is retired, having age of ${age}`);
  } else if (age < 60) {
    console.log(`The person is not retired and has age of ${age}`);
  }
};

// Call 'yearsUntilRetirement'
yearsUntilRetirement();

// Call 'ageCalculator' directly
console.log(ageCalculator(1947));

// Topic 7: Arrays

// Define individual friend variables
const friend1 = "kazmi";
const friend2 = "saif";
const friend3 = "khan";

// Create an array of friends
const friends = ["khan", "saif", "kazmi", "hussain", "ammar"];

// Invite a specific friend to dinner
console.log(`Hello ${friend2}, you are invited for dinner today`);

// Accessing array elements using indices
console.log(`Hello ${friends[2]}, you are invited for dinner today`);
console.log(`Hello ${friends[0]}, you are invited for dinner today`);

// Display the total number of friends
console.log(`We have ${friends.length} friends at my dinner table`);
