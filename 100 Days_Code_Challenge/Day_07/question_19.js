"use strict";
// Question 19: Dinner Guests: Use one of your programs from Exercises 14 through 18 to print
//  a message indicating the number of people you are inviting to dinner.
console.log("I am trying on question no 15...... ");
let guest = ["Ali Abid", "Murad Ali", "Aftab Khan"];
// Unable to Attend
let notAttend = "Murad Ali";
console.log(`${notAttend} can't make it to dinner.`);
// New guest replacement with unable guest
let newGuest = "Shahzaib";
guest[guest.indexOf(notAttend)] = newGuest;
// New Invitation using 'FOR' loop
for (let i = 0; i < guest.length; i++) {
    console.log(`Dear ${guest[i]}, You have Invited for dinner.`);
}
console.log(`There is ${guest.length} are invited for dinner.`);
