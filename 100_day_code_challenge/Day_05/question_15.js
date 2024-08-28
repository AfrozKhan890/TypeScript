"use strict";
// Question 15: Changing Guest List: One of your guest can't make it to the dinner, so you need to
// send out a new set of invitations with a replacement guest.
let guest = ["Ali Abid", "Murad Ali", "Aftab Khan"];
let notAttend = "Murad Ali";
console.log(`${notAttend} can't make it to dinner.`);
let newGuest = "Shahzaib";
guest[guest.indexOf(notAttend)] = newGuest;
// FOR LOOP
for (let i = 0; i < guest.length; i++) {
    console.log(`Dear ${guest[i]}, You have Invited for dinner.`);
}
