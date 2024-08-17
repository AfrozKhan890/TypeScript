"use strict";
// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try
// more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than
//  or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array
let string1 = "Afroz";
let string2 = "Khan";
let number1 = 100;
let number2 = 50;
let number3 = 30;
let myArray = [1, 2, 3, 4, 5, 6];
// • Tests for equality and inequality with strings
console.log("\nequality and inequality with strings: ");
console.log(string1 === 'Afroz');
console.log(string1 == string2);
// • Tests using the lower case function
console.log("\nlower case function: ");
console.log(string1.toLowerCase() === 'afroz');
console.log(string2.toLowerCase() === 'Khan');
// • Numerical tests involving equality and inequality, greater than and less than, greater than
//  or equal to, and less than or equal to
console.log("\nEquality and inequality with numbers:");
console.log(number1 >= number2);
console.log(number1 <= 80);
// • Tests using "and" and "or" operators
console.log(`\n 'and' and 'or' operators: `);
console.log(number1 >= number2 || number2 <= 100);
console.log(number1 === number2 && number1 >= 70);
// • Test whether an item is in a array
console.log("\n Array members:");
console.log(myArray.includes(3));
console.log(myArray.includes(7));
// • Test whether an item is not in a array
console.log("\n not a array members:");
console.log(!myArray.includes(8));
console.log(!myArray.includes(4));
