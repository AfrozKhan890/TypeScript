// Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? 
// Make a list that includes at least three people you’d like to invite to dinner.
// Then use your list to print a message to each person, inviting them to dinner.


let guestsList:string[] = ["Ali Abid", "Shahzaib", "Wahab", "Hunzala"];

for(let i=0; i<guestsList.length; i++){
    console.log(`Hello ${guestsList[i]}, You are invited for Dinner.`);
}
