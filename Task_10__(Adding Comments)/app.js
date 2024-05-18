"use strict";
// Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write
// because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence
// describing what the program does.
console.log("\n Program # 01 \n\n");
// • Store the locations in a array. Make sure the array is not in alphabetical order.
const favoritePlaces = ["Saudi Arabia", "Australia", "Finland", "Canada", "Dubai"];
// • Print your array in its original order.
console.log(`\n Original order: ${favoritePlaces}`);
// • Print your array in alphabetical order without modifying the actual list.
console.log(`\n Alphabetical order : ${[...favoritePlaces].sort()}`);
// • Show that your array is still in its original order by printing it.
console.log(`\n Original order: ${favoritePlaces}`);
// • Print your array in reverse alphabetical order without changing the order of the original list.
console.log(`\n Reverse alphabetical order : ${[...favoritePlaces].sort().reverse()}`);
// • Show that your array is still in its original order by printing it again.
console.log(`\n Original order: ${favoritePlaces}`);
// • Reverse the order of your list. Print the array to show that its order has changed.
console.log(`\n Reverse alphabetical order : ${favoritePlaces.sort().reverse()}`);
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log(`\n Reverse alphabetical order : ${favoritePlaces.reverse()}`);
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log(`\n Alphabetical order : ${favoritePlaces.sort()}`);
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log(`\n Reverse alphabetical order : ${favoritePlaces.sort().reverse()}`);
console.log("\n Program # 02 \n\n");
var alien_color = "red";
// • Write an if statement to test whether the alien’s color is green. If it is, print
// a message that the player just earned 5 points.
if (alien_color === 'red') {
    console.log("\n Congratulations! You have earned 5 points.");
}
// • Write one version of this program that passes the if test and another that
// fails. (The version that fails will have no output.)
if (alien_color === 'yellow') {
    console.log("\n Congratulations! You have earned 5 points.");
}
