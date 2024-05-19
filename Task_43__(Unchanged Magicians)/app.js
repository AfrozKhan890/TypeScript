"use strict";
// Unchanged Magicians: Start with your work from Exercise 40. Call the
// function make_great() with a copy of the array of magicians’ names. Because the
// original array will be unchanged, return the new array and store it in a separate array.
// Call show_magicians() with each array to show that you have one array of the original
// names and one array with the Great added to each magician’s name.
let Magicians = ["Harry Houdini", "David Blaine", "David Copperfield", "Robert-Houdin", "Michael Ammar"];
function copyArray(myArray) {
    return [...myArray];
}
function make_great(magiciansArray) {
    // Create a copy of the array to avoid modifying the original
    let modifiedArray = [...magiciansArray];
    for (let i = 0; i < modifiedArray.length; i++) {
        modifiedArray[i] = "The Great " + modifiedArray[i];
    }
    return modifiedArray;
}
function Show_Magicians(magicians) {
    magicians.forEach(Element => {
        console.log(Element);
    });
}
const copymagiciansArray = copyArray(Magicians);
const greatMagiciansArray = make_great(copymagiciansArray);
console.log("\n\nThis is my Original Array:");
Show_Magicians(Magicians);
console.log("\n\nThis is my Changeable Array:");
Show_Magicians(greatMagiciansArray);
