// Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message 
// indicating the number of people you are inviting to dinner.

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


console.log(`number of friends are invited for dinner: ${guestsList.length}`);
