// Changing Guest List: You just heard that one of your guests can’t make the
// dinner, so you need to send out a new set of invitations. You’ll have to think of
// someone else to invite.

// • Start with your program from Exercise 14. Add a print statement at the
// end of your program stating the name of the guest who can’t make it.

// • Modify your list, replacing the name of the guest who can’t make it with
// the name of the new person you are inviting.

// • Print a second set of invitation messages, one for each person who is still
// in your list.




let guestsList:string[] = ["Ali Abid", "Shahzaib", "Wahab", "Hunzala"];

for(let i=0; i<guestsList.length; i++){
    console.log(`Hello "${guestsList[i]}" \n You are invited for Dinner. \n`);
}
console.log(`Unfortunately ${guestsList[3]} can not come for dinner beacause of some reason.`);

console.log("Inavation list is change \n");


guestsList[3] = "Shayan";
for (let j = 0; j < guestsList.length; j++) {
    console.log(`Dear "${guestsList[j]}":\n you are invited dinner. \n `);
}
