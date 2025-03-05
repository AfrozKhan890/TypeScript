"use strict";
// No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.
var friends_Names = ["Afroz Khan", "Aftab Khan", "Murad Ali", "Admin", "Jawad Saeed"];
if (friends_Names.length === 0) {
    console.log("We need to find some users!");
}
else {
    friends_Names = [];
    console.log(`All the user has been removed from an array. \n${friends_Names.length}`);
}
