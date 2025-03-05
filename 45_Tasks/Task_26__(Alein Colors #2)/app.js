"use strict";
// Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and
// write an if-else chain.
// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.
// • Write one version of this program that runs the if block and another that runs the else block.
// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
//1st Part
var alien_color = 'Green';
console.log("\n Output of If Condition:  ");
if (alien_color === 'Green') {
    console.log("Congratulations! You have earned 5 points.");
}
else {
    console.log("Congratulations! You have earned 10 points.");
}
// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.
// 2nd Part
var alien_color = "Yellow";
console.log("\n Output of Else  Condition");
if (alien_color === 'green') {
    console.log("Congratulations! You have earned 5 points.");
}
else {
    console.log("Congratulations! You have earned 10 points.");
}
