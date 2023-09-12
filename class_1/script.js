// Alert example
// alert("farhat");

// Values and Variables
console.log("farhat");
console.log("hussain");
console.log("haider");

// Variable Declaration and Usage
var name = "farhat";
console.log(name);

var firstName = "hira";
console.log(firstName);

// Variable Naming Convention
var FIRSTNAME = "kazmi";
var FirstName = "kamran";
var firstName = "hassaan";

/**
 * Variable Naming Rules and Best Practice
 * Variable names can contain letters, digits, underscores, and dollar signs such as in the examples below.
 * var rougeOne; // contains letter(s)
 * var rouge1;    // contains number(s)
 * var _rouge1;   // contains underscore(s)
 * var $_rouge1;  // contains dollar sign(s)
 */

var rougeOne;
var rouge1;
var _rouge1;
var $_rouge1;
// var 2the = ""; // we cannot use a number as the first character

// Variable Declaration and Multiple Assignment
var animal = "cow",
  vegetable = "carrot",
  fastFood = "hamburger";

console.log(animal, vegetable, fastFood);

// Best Practice — Camel Case and Human Readable
var costPerTransaction; // Camel Case
var firstName; // camel case - Best Practice for Beginners
// var first-name; // kebab case (not valid for variables in JavaScript)
var FirstName; // pascal case
var first_name; // snake case

// Illegal variable naming
// var 1rouge; // begins with a number (not valid)
// var rouge one; // has a space between words (not valid)
// var rouge*one; // contains special characters (not valid)
// var var; // JavaScript reserved keyword (not valid)
