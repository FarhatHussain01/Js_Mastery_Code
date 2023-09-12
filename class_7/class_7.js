// const names = ["farhat", "kazmi", "hussain", "developer"];
// console.log(names[2]);

// names.push("hira");
// names.push("ammar");
// names.unshift("haider");
// console.log(names.pop());
// names.shift();

// console.log(names);

// console.log(names.slice(1, 3));
// // console.log(names.slice());
// console.log(names);

// const friends = [
//   "farhat",
//   "kazmi",
//   "hussain",
//   "developer",
//   "ammar",
//   "sidra",
//   "hajra",
//   "ali",
//   "khadija",
// ];

// console.log(friends.includes("Khadija".toLowerCase()));

// console.log(friends.splice(1, 3));
// console.log(friends);

// console.log(friends.slice(2, 5).join(" ").split(" "));

// const string = "farhat/kazmi/haider/syed/mashadi";
// let arrString = string.split("/");
// console.log(arrString);
// console.log(arrString.join("*****"));

// friends.push("hussain");

// if (friends.includes("hussain")) {
//   console.log("he is an active student");
// } else {
//   console.log("he is ---------");
// }

// // objects literals

// const myself = {
//   name: "farhat",
//   ph: 3448083207,
//   "my friends": ["haris", "farhat", "kazmi", "hira"],
//   address: {
//     village: "kts",
//     city: "haripur",
//     region: "hazara",
//   },
// };

// const address = {
//   village: "kts",
//   city: "haripur",
//   region: "hazara",
// };

// console.log(myself["name"]);
// console.log(myself.ph);
// console.log(myself["my friends"][3]);

// const my_friends = ["haris", "farhat", "kazmi"];
// console.log(my_friends[2]);
// console.log(myself.address.city);

const myIntro = {
  firstName: "Syed Farhat",
  lastName: "Hussain Shah",
  job: "Web Developer",
  age: 23,
  address: "Jamia Muhallah Alsadaat",
  friends: ["Saif Ali", "Haris", "Hamzah", "Jawad"],
  hasLiscence: true,
  calcAge: function (year) {
    this.age = 2023 - year;
    // console.log(`my age is ${this.age}`);
    return this.age;
  },
  summary() {
    console.log(
      `${this.firstName} is a ${this.age} year old ${this.job}, and he has a ${
        this.hasLiscence ? "driving liscence" : "no driving liscence"
      }"`
    );
  },
};

//  add a get summary methods in an obj which summarize suumary about myself"syed farhat is a 46-year old teacher, and he has a driver's license"

myIntro.cast = "syed";
myIntro.job = "Machine Learning Engineer";
const firstName = "Hira sidra hussain";
console.log(myIntro.calcAge(2002));
console.log(myIntro.calcAge(2002));
myIntro.summary();
// console.log(myIntro);

// let intrestedIn = prompt(
//   "What do you want to know about mySelf? Choose between firstName, lastName, age, job, address and friends"
// );

// if (myIntro[intrestedIn]) {
//   console.log(myIntro[intrestedIn]);
// } else {
//   console.log("wrong answer");
// }

console.log();

/////////////////////////////////////////////////////////////////////////////////////////




