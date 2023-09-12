// Coding Challenge #2

/*
Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

1. Print a nice output to the console, saying who has the higher BMI. The message can be either "Ali's BMI is higher than Zain's!" or "Zain's BMI is higher than Ali's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Ali's BMI (28.3) is higher than Zain's (23.9)!"

HINT: Use an if/else statement 😉

GOOD LUCK 😀
*/

const massAli = 78;
const heightAli = 1.69;
const massZain = 92;
const heightZain = 1.95;

// const massAli = 95;
// const heightAli = 1.88;
// const massZain = 85;
// const heightZain = 1.76;

const BMIAli = massAli / heightAli ** 2;
const BMIZain = massZain / (heightZain * heightZain);
console.log(BMIAli, BMIZain);

if (BMIAli > BMIZain) {
  console.log(`Ali's BMI (${BMIAli}) is higher than Zain's (${BMIZain})!`)
} else {
  console.log(`Zain's BMI (${BMIZain}) is higher than Ali's (${BMIAli})!`)
}


//////////////////////////////////////////////////////////////////////////////////////////

// Coding Challenge #3

/*
There are two gymnastics teams, Falcons and Eagles. They compete against each other 3 times. The winner with the highest average score wins the trophy!

1. Calculate the average score for each team, using the test data below.
2. Compare the teams' average scores to determine the winner of the competition and print it to the console. Remember to account for a possible draw, where both teams have the same average score.

3. BONUS 1: Introduce a minimum score requirement of 100 points. A team only wins if it has a higher score than the other team and both teams have a score of at least 100 points. HINT: Use logical operators and multiple else-if blocks 😉
4. BONUS 2: The minimum score requirement also applies to a draw! A draw occurs only when both teams have the same score and both teams have a score greater than or equal to 100 points. Otherwise, no team wins the trophy.

TEST DATA: Falcons score 96, 108, and 89. Eagles score 88, 91, and 110.
TEST DATA BONUS 1: Falcons score 97, 112, and 101. Eagles score 109, 95, and 123.
TEST DATA BONUS 2: Falcons score 97, 112, and 101. Eagles score 109, 95, and 106.

BEST OF LUCK 😀
*/

// const scoreFalcons = (96 + 108 + 89) / 3;
// const scoreEagles = (88 + 91 + 110) / 3;
// console.log(scoreFalcons, scoreEagles);

// if (scoreFalcons > scoreEagles) {
//   console.log('Falcons win the trophy ');
// } else if (scoreEagles > scoreFalcons) {
//   console.log('Eagles win the trophy ');
// } else if (scoreFalcons === scoreEagles) {
//   console.log('Both win the trophy!');
// }

// BONUS 1
const scoreFalcons = (97 + 112 + 80) / 3;
const scoreEagles = (109 + 95 + 50) / 3;
console.log(scoreFalcons, scoreEagles);

if (scoreFalcons > scoreEagles && scoreFalcons >= 100) {
  console.log("Falcons win the trophy 🏆");
} else if (scoreEagles > scoreFalcons && scoreEagles >= 100) {
  console.log("Eagles win the trophy 🏆");
} else if (
  scoreFalcons === scoreEagles &&
  scoreFalcons >= 100 &&
  scoreEagles >= 100
) {
  console.log("Both win the trophy!");
} else {
  console.log("No one wins the trophy 😭");
}
