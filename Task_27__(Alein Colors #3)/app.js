"use strict";
//  Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.
// • If the alien is yellow, print a message that the player earned 10 points.
// • If the alien is red, print a message that the player earned 15 points.
// • Write three versions of this program, making sure each message is printed for the appropriate color alien.
// • If the alien is green, print a message that the player earned 5 points.
// 1st Part
var alien_color = 'Green';
console.log("\n Output of If Condition:  ");
if (alien_color === 'Green') {
    console.log("Congratulations! You have earned 5 points.");
}
else if (alien_color === 'Red') {
    console.log("Congratulations! You have earned 10 points.");
}
else {
    console.log("Congratulations! You have earned 15 points.");
}
// • If the alien is yellow, print a message that the player earned 10 points.
// 2nd Version
var alien_color = "Yellow";
console.log("\n Output of Else If Condition:   ");
if (alien_color === 'Green') {
    console.log("Congratulations! You have earned 5 points.");
}
else if (alien_color === "Yellow") {
    console.log("Congratulations! You have earned 10 points.");
}
else {
    console.log("Congratulations! You have earned 15 points.");
}
// • If the alien is red, print a message that the player earned 15 points.
// 3rd Part
var alien_color = "Red";
console.log("\n Output of Else Condition:   ");
if (alien_color === 'Green') {
    console.log("Congratulations! You have earned 5 points.");
}
else if (alien_color === "Yellow") {
    console.log("Congratulations! You have earned 10 points.");
}
else {
    console.log("Congratulations! You have earned 15 points.");
}
