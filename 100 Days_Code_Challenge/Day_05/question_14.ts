// Question 14: Guest List: If you could invite anyone, living or deceased, to dinner, 
// who would you invite? Make a list that includes at least three people you’d like to 
// invite to dinner. Then use your list to print a message to each person, inviting them to dinner.


let guests:string[] = ["Ali Abid", "Murad Ali", "Aftab Khan"]
// FOR LOOP
for (let i = 0; i < guests.length; i++) {
    console.log(`Dear ${guests[i]}, You have Invited for dinner.`);
}


// FOREACH LOOP
guests.forEach(guest=>{
    console.log(`Dear ${guest}, You have Invited for dinner.`);
    
})