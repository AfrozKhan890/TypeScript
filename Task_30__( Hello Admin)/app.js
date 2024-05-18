"use strict";
// Hello Admin Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user
// after they log in to a website. Loop through the array, and print a greeting to each user.
// • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report
// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
var friends_Names = ["Afroz Khan", "Aftab Khan", "Murad Ali", "Admin", "Jawad Saeed"];
if (friends_Names.length === 0) {
    console.log("We need to find some users!");
}
else {
    for (let i = 0; i < friends_Names.length; i++) {
        if (friends_Names[i] == 'Admin') {
            console.log(`\n \t Hello ${friends_Names[i]}, Would you like to see a status report?`);
        }
        else {
            console.log(`\nHello ${friends_Names[i]}, thank you for logging in again.`);
        }
    }
}
