let dolphinsScores = (15 + 108 + 89) / 3;
let koalasScores = (88 + 91 + 110) / 3;

if (dolphinsScores > koalasScores) {
  console.log("The Winner of the competetion is Dolphins");
} else if (dolphinsScores < koalasScores) {
  console.log("The Winner of the competetion is Koalas");
} else {
  console.log("Match Drawn");
}

//Bonus 1

// Bonus 1 - Minimum score of 100
dolphinsScores = (97 + 112 + 101) / 3;
koalasScores = (109 + 95 + 123) / 3;

if (dolphinsScores > koalasScores && dolphinsScores >= 100) {
  console.log(
    `The Winner of the competition is Dolphins with ${dolphinsScores} Scores`
  );
} else if (dolphinsScores < koalasScores && koalasScores >= 100) {
  console.log(
    `The Winner of the competition is Koalas with ${koalasScores} Scores`
  );
} else if (
  dolphinsScores === koalasScores &&
  dolphinsScores >= 100 &&
  koalasScores >= 100
) {
  console.log("Both teams win the Trophy");
} else {
  console.log("No team wins the Trophy");
}
