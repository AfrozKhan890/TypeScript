// More Guests: You just found a bigger dinner table, so now more space is
// available. Think of three more guests to invite to dinner.

// • Start with your program from Exercise 15. Add a print statement to the end of your program
//  informing people that you found a bigger dinner table.

// • Add one new guest to the beginning of your array.

// • Add one new guest to the middle of your array.
// • Use append() to add one new guest to the end of your list.
// • Print a new set of invitation messages, one for each person in your list.


let guestsList:string[] = ["Ali Abid", "Shahzaib", "Wahab", "Hunzala"];

for (let j = 0; j < guestsList.length; j++) {
    console.log(`Dear "${guestsList[j]}":\n you are invited dinner. \n `);
}
console.log("Good News for my Friends. we've found a big dinner.so we invite more friends to dinner.So new guests are: \n");

guestsList.unshift("Shaham");
guestsList.splice(3,0,"Jawad");
guestsList.push("Rahid");

for (let i = 0; i < guestsList.length; i++) {
    console.log(`Dear ${guestsList[i]}: \n You are invited for Dinner. \n`);
}