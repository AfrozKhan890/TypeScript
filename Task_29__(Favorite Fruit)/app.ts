// Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.

// Make a array of your three favorite fruits and call it favorite_fruits.
// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement,
// such as You really like bananas!

var favorite_fruits:string[] = ["Pomegranate", "Mango", "Apple"];

if(favorite_fruits.includes("Pomegranate")){
  console.log("I really like Pomegranate.");
}

if(favorite_fruits.includes("Pineapple")){
    console.log("I don't like Pineapples.");
  }

  if(favorite_fruits.includes("Mango")){
    console.log("I really like Mangoes.");
  }

  if(favorite_fruits.includes("Papaya")){
    console.log("I don't like Papayas.");
  }

  if(favorite_fruits.includes("Apple")){
    console.log("I really like Apples.");
  }