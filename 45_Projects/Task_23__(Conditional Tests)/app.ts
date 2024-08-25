// Conditional Tests: Write a series of conditional tests. Print a statement
// describing each test and your prediction for the results of each test. Your code
// should look something like this:
// let car = 'subaru';
// console.log("Is car == 'subaru'? I predict True.")
// console.log(car == 'subaru')
// • Look closely at your results, and make sure you understand why each line evaluates to True or False.
// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.

let watch:string = "luxury";

console.log(" \n ----> True Statements.\n");

//Test 01
console.log("Is watch =='luxury'? I predict True.");
console.log(watch == 'luxury');

//Test 02
console.log("Is watch !='Rado'? I predict True.");
console.log(watch != 'Rado');

//Test 03
console.log("Is the length of watch <= 6 ? I predict True.");
console.log(watch.length <= 6);

//Test 04
console.log("Is the length of watch > 4 ? I predict True.");
console.log(watch.length > 4);

//Test 05
console.log("Does watch start with 'l'? I predict True.");
console.log(watch.startsWith('l'));



console.log(" \n ----> False Statements.\n");

//Test 01
console.log("Is watch =='luxury'? I predict False.");
console.log(watch != 'luxury');

//Test 02
console.log("Is watch =='Rado'? I predict False.");
console.log(watch != 'Rado');

//Test 03
console.log("Is the length of watch > 4 ? I predict False");
console.log(watch.length < 4);


//Test 04
console.log("Is the length of watch <= 6 ? I predict False");
console.log(watch.length < 6);


//Test 05
console.log("Does watch start with 'y'? I predict False.");
console.log(watch.startsWith('y'));
