"use strict";
// City Names: Write a function called city_country() that takes in the name
// of a city and its country. The function should return a string formatted like this:
// "Lahore, Pakistan"
// Call your function with at least three city-country pairs, and print the value
// that’s returned.
function City_Country(city, country) {
    return `${city},${country}`;
}
console.log(City_Country("Islamabad", "Pakistan"));
console.log(City_Country("Kuala Lumpur", "Malaysia"));
console.log(City_Country("Canberra", "Australia"));
