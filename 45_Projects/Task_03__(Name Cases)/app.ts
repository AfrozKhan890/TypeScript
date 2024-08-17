// Name Cases: Store a person’s name in a variable, and then print that person’s name 
// in lowercase, uppercase, and titlecase.

let Name:string = "afRoZ kHAn";

// UpperCase
console.log("\nLowerCase: " +  Name.toLowerCase());

// LowerCase
console.log("\nUpperCase: " + Name.toUpperCase());

// TitleCase
let one = Name.split(' ');
let two = one.map (word => word.charAt(0).toUpperCase() + word.substr(1).toLowerCase())
let three = two.join('')

console.log("\nTitleCase: " + `${three}`);
