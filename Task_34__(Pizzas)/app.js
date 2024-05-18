"use strict";
// Pizzas: Think of at least three kinds of your favorite pizza. Store these
// pizza names in a array, and then use a for loop to print the name of each pizza.
// • Modify your for loop to print a sentence using the name of the pizza
// instead of printing just the name of the pizza. For each pizza you should
// have one line of output containing a simple statement like I like pepperoni
// pizza.
// • Add a line at the end of your program, outside the for loop, that states
// how much you like pizza. The output should consist of three or more lines
// about the kinds of pizza you like and then an additional sentence, such as
// I really love pizza!
const favoritePizzas = ["Pepperoni", "Margherita", "BBQ Chicken"];
// pizza names in a array,
console.log("My favourite Pizza are : ");
for (const pizza of favoritePizzas) {
    console.log(pizza);
}
// Modify the loop to print a sentence for each pizza
console.log("\nMore detail about my  favourite Pizza are :");
for (const pizza of favoritePizzas) {
    console.log(`I really like ${pizza} pizza`);
}
console.log("\n Pizza is just amazing. It's the ultimate comfort food. The combination of cheese, sauce, and toppings is irresistible. I really love pizza!");
