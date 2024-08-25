// Question 15: Changing Guest List: One of your guest can't make it to the dinner, so you need to
// send out a new set of invitations with a replacement guest.

let guest:string[] = ["Ali Abid", "Murad Ali", "Aftab Khan"]

// Unable to Attend
let notAttend:string = "Murad Ali";
console.log(`${notAttend} can't make it to dinner.`);

// New guest replacement with unable guest
let newGuest:string = "Shahzaib";
guest[guest.indexOf(notAttend)]  = newGuest

// New Invitation using 'FOR' loop
for (let i = 0; i < guest.length; i++) {
    console.log(`Dear ${guest[i]}, You have Invited for dinner.`);
}