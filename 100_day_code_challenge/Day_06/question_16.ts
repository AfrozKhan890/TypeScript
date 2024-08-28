// Question 16: More Guests: You've found a bigger dinner table, so there's room for more guests.
// When you have more space, you can add more guests to your list. You can add guests at the 
// beginning, middle, and end of an array.


let Guests:string[] = ["Ali Abid", "Murad Ali", "Aftab Khan"]
console.log("\nGreat News! We have found more space for dinner table.\n");

Guests.unshift("Shahzaib")
Guests.push("Shayan")
Guests.splice(4,0,"Wahab")


Guests.forEach(Guest => {
    console.log(`Dear ${Guest},You have invited for dinner.`); 
});


