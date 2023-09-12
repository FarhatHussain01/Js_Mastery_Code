// Coding Challenge #3

/*
3. BONUS 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. HINT: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.

TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

GOOD LUCK 😀
*/

let DolphinScore = (96 + 108 + 89) / 3;
let KoalasScore = (109 + 95 + 123) / 3;

console.log(DolphinScore, KoalasScore);

// if (DolphinScore > KoalasScore) {
//   console.log("dolphin wins");
// } else if (DolphinScore < KoalasScore) {
//   console.log("koalas wins");
// } else if (DolphinScore === KoalasScore) {
//   console.log("draw ");
// }

//  Bonus 1

if (DolphinScore > KoalasScore && DolphinScore >= 100) {
  console.log("dolphin wins");
} else if (DolphinScore < KoalasScore && KoalasScore >= 100) {
  console.log("koalas wins");
} else if (
  DolphinScore === KoalasScore &&
  KoalasScore >= 100 &&
  DolphinScore >= 100
) {
  console.log("draw");
} else {
  console.log("no one wins");
}
