//  Animals: Think of at least three different animals that have a common characteristic.
// Store the names of these animals in a list, and then use a for loop to
// print out the name of each animal.
// • Modify your program to print a statement about each animal, such as
// A dog would make a great pet.
// • Add a line at the end of your program stating what these animals have in
// common. You could print a sentence such as Any of these animals would
// make a great pet!

const petAnimals:string[] = ["Dog" ,  "Cat" , "Rabbit"];

// Print the name of each animal
console.log("Pet Animals are :");
for(const animals of petAnimals){
 console.log(animals);
}

// Modify the loop to print a statement about each animal
console.log("\n More information about these pet animals :");
for(const animals of petAnimals){
    console.log(`${animals} would make a great pet.`);
   }

// Add a line at the end to state what these animals have in common
   console.log("\nAny of these animals would make a great pet!");
   