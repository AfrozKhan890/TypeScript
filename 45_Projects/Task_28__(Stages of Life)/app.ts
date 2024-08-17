// Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:

// • If the person is less than 2 years old, print a message that the person is a baby.
// • If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
// • If the person is at least 4 years old but less than 13, print a message that the person is a kid.
// • If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
// • If the person is at least 20 years old but less than 65, print a message that the person is an adult.
// • If the person is age 65 or older, print a message that the person is an elder.

var myAge:number = 18;

if(myAge < 2){
    console.log("The person is a Baby.");
}
    else if(myAge >= 2 && myAge < 4){
console.log("The person is a Toddler.");
    }
    else if(myAge >= 4 && myAge < 13){
    console.log("The person is a Kid.");
    }
    else if(myAge >= 13 && myAge < 20){
    console.log("The person is a Teenager.");
    }
    else if(myAge >= 20 && myAge < 65){
        console.log("The person is an Adult.");
    }
    else{
        console.log("The person is an Elder.");
    }