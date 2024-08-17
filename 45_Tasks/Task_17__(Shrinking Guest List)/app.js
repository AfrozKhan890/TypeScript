"use strict";
// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the
//  dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can
//  invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you
//  pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still
//  invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure
//  you actually have an empty list at the end of your program.
let guestsList = ["Ali Abid", "Shahzaib", "Wahab", "Hunzala"];
console.log("\nGood News for my Friends. we've found a big dinner.so we invite more friends to dinner.So new guests are: \n");
guestsList.unshift("Shaham");
guestsList.splice(3, 0, "Jawad");
guestsList.push("Rahid");
for (let i = 0; i < guestsList.length; i++) {
    console.log(`Dear ${guestsList[i]}: \n You are invited for Dinner. \n`);
}
console.log("Unfortunately the new dinner cannot arrive at the time. So now we are inviting two people for dinner. \n");
while (guestsList.length > 2) {
    let notInvited = guestsList.pop();
    console.log(`Sorry Due to limited space we can't invited you for a dinner . "${notInvited}"\n`);
}
for (let i = 0; i < guestsList.length; i++) {
    console.log(`Dear ${guestsList[i]}: \n You are still invited for Dinner. \n`);
}
guestsList.pop();
guestsList.pop();
console.log(guestsList);
