"use strict";
// Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
// • Print your array in its original order.
// • Print your array in alphabetical order without modifying the actual list.
// • Show that your array is still in its original order by printing it.
// • Print your array in reverse alphabetical order without changing the order of the original list.
// • Show that your array is still in its original order by printing it again.
// • Reverse the order of your list. Print the array to show that its
// order has changed.
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
// Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
const favoritePlaces = ["Saudi Arabia", "Australia", "Finland", "Canada", "Dubai"];
// • Print your array in its original order.
console.log(`\n Original order: ${favoritePlaces}`);
// • Print your array in alphabetical order without modifying the actual list.
console.log(`\n Alphabetical order : ${[...favoritePlaces].sort()}`);
// • Show that your array is still in its original order by printing it.
console.log(`\n Original order: ${favoritePlaces}`);
// • Print your array in reverse alphabetical order without changing the order of the original list.
console.log(`\n Reverse alphabetical order : ${[...favoritePlaces].sort().reverse()}`);
// • Show that your array is still in its original order by printing it again.
console.log(`\n Original order: ${favoritePlaces}`);
// • Reverse the order of your list. Print the array to show that its order has changed.
console.log(`\n Reverse alphabetical order : ${favoritePlaces.sort().reverse()}`);
console.log(favoritePlaces);
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log(`\n Reverse alphabetical order : ${favoritePlaces.reverse()}`);
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log(`\n Alphabetical order : ${favoritePlaces.sort()}`);
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log(`\n Reverse alphabetical order : ${favoritePlaces.sort().reverse()}`);
