// Iteration: The for Loop

// console.log('Lifting weights repetition 1 🏋️‍♀️');
// console.log('Lifting weights repetition 2 🏋️‍♀️');
// console.log('Lifting weights repetition 3 🏋️‍♀️');
// console.log('Lifting weights repetition 4 🏋️‍♀️');
// console.log('Lifting weights repetition 5 🏋️‍♀️');
// console.log('Lifting weights repetition 6 🏋️‍♀️');
// console.log('Lifting weights repetition 7 🏋️‍♀️');
// console.log('Lifting weights repetition 8 🏋️‍♀️');
// console.log('Lifting weights repetition 9 🏋️‍♀️');
// console.log('Lifting weights repetition 10 🏋️‍♀️');

// for loop keeps running while condition is TRUE

for (let rep = 1; rep <= 30; rep++) {
  console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
}

///////////////////////////////////////
// Looping Arrays, Breaking and Continuing
const farhat = [
  "Farhat",
  "Lastname",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
  true,
];
const types = [];

// console.log(farhhat[0])
// console.log(farhhat[1])
// ...
// console.log(farhhat[4])
// farhhat[5] does NOT exist

for (let i = 0; i < farhat.length; i++) {
  // Reading from farhhat array
  console.log(farhat[i], typeof farhat[i]);

  // Filling types array
  // types[i] = typeof farhat[i]; // types[0] = typeof farhat[0]; // Assigns the data type of farhat[0] to types[0]

  types.push(typeof farhat[i]); //types.push(typeof farhat[0]); // Adds the data type of farhat[0] to the end of types
}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2037 - years[i]);
}
console.log(ages);

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

///////////////////////////////////////
// Looping Backwards and Loops in Loops
const farhhat = [
  "Farhhat",
  "Lastname",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
  true,
];

// 0, 1, ..., 4
// 4, 3, ..., 0

for (let i = farhhat.length - 1; i >= 0; i--) {
  console.log(i, farhhat[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`-------- Starting exercise ${exercise}`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise}: Lifting weight repetition ${rep} 🏋️‍♀️`);
  }
}
