// alert("JavaScript works!");

// Jamal Moubarak
// Project 3
// SDI 1302

// String

// 1: Does a string follow a 123-456-7890 pattern like a phone number?
// Variables
var usNumber = function (testNumber) {
var phoneNumber = testNumber;
var validateNumber = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
// Expression	
	if (validateNumber.test(phoneNumber)) {
		var formattedPhoneNumber = 
			phoneNumber.replace(validateNumber, "($1) $2-$3");
			console.log("This is a valid US phone number!");
	} else {
		return console.log("This is not a valid US phone number!");
	}
}
// Solution
console.log("Question 1: ");
usNumber("123-456-7890");

// 2: Does a string follow an aaa@bbb.ccc pattern like an email address?
// Variables


// Expression


// Solution
console.log("Question 2: ");

// 3: Is the string a URL? (Does it start with http: or https:
// Variables


// Expression


// Solution
console.log("Question 3: ");

// 2: Does a string follow an aaa@bbb.ccc pattern like an email address?
// Variables


// Expression


// Solution
console.log("Question 3: ");

// 4: Title-case a string (split into words, then uppercase the first letter of each word)
// Variables


// Expression


// Solution
console.log("Question 4: ");

// 5: Given a string that is a list of things seperated by a given string, as well as another string separator, 		return a string with the first seperator changed to the second: "a,b,c" + "," + "/" → "a/b/c".
// Variables


// Expression


// Solution
console.log("Question 5: ");

// Number

// 6: Format a number to use a specific number of decimal places, as for money: 2.1 → 2.10
// Variables


// Expression


// Solution
console.log("Question 6: ");

// 7: Fuzzy-match a number: is the number above or below a number within a certain percent?
// Variables


// Expression


// Solution
console.log("Question 7: ");

// 8: Find the number of hours or days difference between two dates.
// Variables


// Expression


// Solution
console.log("Question 8: ");

// 9: Given a string version of a number such as "42", return the value as an actual Number, such as 42.
// Variables


// Expression


// Solution
console.log("Question 9: ");

// Array

// 10: Find the smallest value in an array that is greater than a given number
// Variables


// Expression


// Solution
console.log("Question 10: ");

// 11: Find the total value of just the numbers in an array, even if some of the items are not numbers.
// Variables


// Expression


// Solution
console.log("Question 11: ");

// 12: Given an array of objects and the name of a key, return the array sorted by the value of that key in each of 		the objects: "a" + [{a:2}, {a:3},{a:1}] → [{a:1},{a:2},{a:3}].
// Variables


// Expression


// Solution
console.log("Question 12: ");




