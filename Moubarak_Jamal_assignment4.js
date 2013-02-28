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

	// Title-case a string
	var titleCase = function toPascalCase(str) {
    var arr = str.split(/\s|_/);
    for(var i=0,l=arr.length; i<l; i++) {
        arr[i] = arr[i].substr(0,1).toUpperCase() + 
                 (arr[i].length > 1 ? arr[i].substr(1).toLowerCase() : "");
    }
    return arr.join(" ");
}
/*	// Was running some tests that I couldn't get to work. ALL CAPS
	var toProperCase = function(str) {
	var results = [];
		for (var i=0; i < str.length; i++) {
			var letter = str[i].charAt(0).toUpperCase();
     results.push(letter + str[i].slice(1));
  }
  return results.join(" ");
};
	// Was running some tests that I couldn't get to work. Displays Original and Answer.
	var toProperCase = function(string) {
	var aStr = string.split(" ");
	var arr = [string];
		for (str in aStr) {
        	arr.push(aStr[str].charAt(0).toUpperCase() + aStr[str].slice(1));    }
        return arr.join(" ");
}
*/

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
		"url": url,
		"titleCase": titleCase,
		// "toProperCase": toProperCase
	}

}

var newLib = new myLibrary();

console.log("Is this a valid US phone number format? " + newLib.usNumber("123-456-7890"));
console.log("Is this a valid email address format? " + newLib.email("aaa@bbb.ccc"));
console.log("Does this URL start with a http: or https:? " + newLib.url("https://www.fullsail.com"));
console.log(newLib.titleCase("mY nAme_is jaMal"));
console.log("Is this a number? " + newLib.checkNumeric("1"));
console.log("Is this Jamal? " + newLib.areYouJamal("John"));
// console.log(newLib.toProperCase("my name is jamal"));





