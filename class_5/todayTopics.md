Falsy and Truthy Values:

# Keep in mind that in JavaScript, certain values are considered falsy (evaluate to false in a boolean context)

# truthy (evaluate to true in a boolean context). This can affect the outcome of if-else statements.

# Falsy Values: false, 0, "", null, undefined, NaN

# Truthy Values: Any value that is not falsy

# Understanding if-else statements is crucial for making decisions in your code based on conditions.

# They provide the foundation for more complex decision-making structures and logic in JavaScript programs.

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(''));

# Switch statement

// The switch Statement

const day = 'friday';

switch (day) {
case 'monday': // day === 'monday'
console.log('Plan course structure');
console.log('Go to coding meetup');
break;
case 'tuesday':
console.log('Prepare theory videos');
break;
case 'wednesday':
case 'thursday':
console.log('Write code examples');
break;
case 'friday':
console.log('Record videos');
break;
case 'saturday':
case 'sunday':
console.log('Enjoy the weekend :D');
break;
default:
console.log('Not a valid day!');
}

<!--  challenge convert it into if else statement -->

# ternary operator

<!-- vote example -->

# // Coding Challenge #4

Steven wants to build a very simple tip calculator for whenever he goes eating in a resturant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

1. Your task is to caluclate the tip, depending on the bill value. Create a variable called 'tip' for this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!)
2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip). Example: 'The bill was 275, the tip was 41.25, and the total value 316.25'

TEST DATA: Test for bill values 275, 40 and 430

HINT: To calculate 20% of a value, simply multiply it by 20/100 = 0.2
HINT: Value X is between 50 and 300, if it's >= 50 && <= 300 😉

GOOD LUCK 😀

# solution

const bill = 430;
const tip = bill <= 300 && bill >= 50 ? bill _ 0.15 : bill _ 0.2;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);
