const mySelf = {
  firstName: "Syed Farhat",
  lastName: "Hussain Shah",
  Job: "Web Developer",
  address: "Jamia",
  friends: ["Saif Ali", "Haris", "Hamzah", "Jawad"],
  hasDrivingLiscence: true,
  birthYeah: 2001,

  // calculateAge: function (birthYeah) {  // this is called method
  //     return 2023 - birthYeah
  // }

  calculateAge: function () {
    // this means this
    console.log(this); // this means myself obj
    this.age = 2023 - this.birthYeah;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calculateAge()} years old ${
      this.Job
    } and he ${
      this.hasDrivingLiscence ? "has" : "does'not has"
    } a driver's license`;
  },
};
