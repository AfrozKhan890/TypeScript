"use strict";
// Cities: Write a function called describe_city() that accepts the name of
// a city and its country. The function should print a simple sentence, such as
// Karachi is in Pakistan. Give the parameter for the country a default value.
// Call your function for three different cities, at least one of which is not in the
// default country.
function Describe_City(city, country = "Default Country") {
    console.log(`\n${city} is the capital of ${country}.`);
}
Describe_City("Islamabad", "Pakistan");
Describe_City("Dhaka", "Bangladesh");
Describe_City("Paris");
