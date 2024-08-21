// Question 3: Name Cases: Store a person’s name in a variable,
// and then print that person’s name in lowercase, uppercase, and titlecase.
var myName = "aFrOZ KhaN";
console.log(myName.toLowerCase()); // Name prints in lower case
console.log(myName.toUpperCase());
console.log(myName.charAt(0).toUpperCase() +
    myName.slice(1, 5).toLowerCase() + " " +
    myName.charAt(6).toUpperCase() +
    myName.slice(7).toLowerCase());
