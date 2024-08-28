//  Question 21: They think of something you could store in a TypeScript Object. Write a 
// program that creates Objects containing these items.


let Car:{Brand:string , Color:string, MakeYear: number, Price: number} = {
    Brand: "Audi",
    Color: "Black",
    MakeYear: 2023,
    Price:7000000
}

console.log(`The car is ${Car.Brand} and Color is ${Car.Color}.The making year of car is ${Car.MakeYear} and Price is only ${Car.Price}`);
