// alert("JavaScript works!");

// Jamal Moubarak
// Project 4
// SDI 1302

// Function Library 

var myLibrary = function() {

	// CHECK STRING PATTERN
	
	// Validate US Phone Number
	var usNumber = function(testNumber) {
	var phoneNumber = testNumber;
	var validateNumber = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
		if (validateNumber.test(phoneNumber)) {
			return true;
		} else {
			return false;
		}
}
		/*  Was running some tests that I couldn't get to work.		
			var areaCodeEnd     = myString.indexOf("-"),
				exchangeStart   = myString.indexOf("-")+1,
				exchangeEnd     = myString.lastindexOf("-"),
				subscriberStart = myString.lastIndexOf("-")+1,
				subscriberEnd   = myString.length; */

	// Validate email adress
	var email = function(testEmail) {
	var emailAddress = testEmail;
	var validateEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,4}$/;
		if (validateEmail.test(emailAddress)) {
			return true;
		} else {
			return false;
		}
}

	// Validate URL for http: and https:
	var url = function(testUrl) {
	var validateUrl = /^(?:http|https):/;
		return validateUrl.test(testUrl);
}

	// CHECK NUMERIC FUNCTION
	var checkNumeric = function(val) {
		
		if(isNaN(val)){
			return false;
		} else {
			return true;
		}
	}

	// NAME FUNCTION
	var areYouJamal = function(val) {
		
		var name = (val === "Jamal");
		return name;
	}

	// RETURN OBJECT
	return {
		"checkNumeric": checkNumeric,
		"usNumber": usNumber,
		"areYouJamal": areYouJamal,
		"email": email,
		"url": url
	}

}

var newLib = new myLibrary();

console.log("Is this a valid US phone number format? " + newLib.usNumber("123-456-7890"));
console.log("Is this a valid email address format? " + newLib.email("aaa@bbb.ccc"));
console.log("Does this URL start with a http: or https:? " + newLib.url("https://www.fullsail.com"));
console.log("Is this a number? " + newLib.checkNumeric("1"));
console.log("Is this Jamal? " + newLib.areYouJamal("John"));
