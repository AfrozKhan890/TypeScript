// Question 06: Stripping Names: Store a person’s name, and include some whitespace characters at the 
// beginning and end of the name. Use "\t" (tab) and "\n" (new line) at least once. Print the name 
// once, so the whitespace around the name is displayed. Then print the name after stripping the 
// white spaces.

let Name :string = "\n\t Afroz Khan \n\n"

console.log(Name); // Print the Name with whiteSpaces
console.log(Name.trim());  // Print the Name without whiteSpaces
