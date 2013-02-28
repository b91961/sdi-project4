// alert("Hello Mr. Lewis!");
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
	var titleCase = function(str) {
    var arr = str.split(/\s|_/);
    for(var i=0,l=arr.length; i<l; i++) {
        arr[i] = arr[i].substr(0,1).toUpperCase() + 
                 (arr[i].length > 1 ? arr[i].substr(1).toLowerCase() : "");
    }
        return arr.join(" ");
}
/*	
	// Was running some tests that I couldn't get to work. ALL CAPS
	var toProperCase = function(str) {
	var results = [];
		for (var i=0; i < str.length; i++) {
			var letter = str[i].charAt(0).toUpperCase();
     results.push(letter + str[i].slice(1));
  }
  return results.join(" ");
};
*/	
	// I can get this one to capital first letter in each word but I feel my other one works better.
	var toProperCase = function(str) {
	var splitStr = str.split(" ");
	var results = "";
	for (var i = 0, j = splitStr.length; i < j; i++) {
			var splitNew = splitStr[i].replace(splitStr[i].charAt(0),(splitStr[i].charAt(0)).toUpperCase());
			results = results.concat(splitNew + " ");
		};
		return results;
}

	// Return a string with the first separator changed to the second.
	var sepReplace = function(str) {
    var list = str.split(",");
    return list.join("/");
}
	
	
	// CHECK NUMERIC FUNCTION
	// Format a number to use a specific number of decimal places as for money.
	var formatNumber = function(num, decplaces) {
    var	testnum = (num);
    	if (!isNaN(num)) {
        	var str = "" + Math.round (eval(num) * Math.pow(10,decplaces));
        if (str.indexOf("e") != -1) {
            return "Out of Range";
        } while (str.length <= decplaces) {
	            str = "0" + str;
	    } var decpoint = str.length - decplaces;
	    	return str.substring(0,decpoint) + "." + str.substring(decpoint,str.length);
	    } else {
		    return "NaN";
    }
}

	// Fuzzy-match a number: is the number above or below a number within a certain percent?
	var fuzzyMatch = function (num,compareNum,percent) {
	var percentage = (num/compareNum) * 100;
		if ((num >= compareNum && percentage >= percent) || (num < compareNum && percentage < percent)) {
			return false;
		} else {
			return true;
	}
}
		
	// Test Sample
	var checkNumeric = function(val) {
		
		if(isNaN(val)){
			return false;
		} else {
			return true;
		}
	}

	// NAME FUNCTION
	// Test Sample
	var areYouJamal = function(val) {
		
		var name = (val === "Jamal");
		return name;
	}

	// RETURN OBJECT
	return {
		"usNumber": usNumber,
		"email": email,
		"url": url,
		"titleCase": titleCase,
		"toProperCase": toProperCase,
		"sepReplace": sepReplace,
		"formatNumber": formatNumber,
		"fuzzyMatch": fuzzyMatch,
		"checkNumeric": checkNumeric,
		"areYouJamal": areYouJamal
	}

}

var newLib = new myLibrary();

console.log("Is this a valid US phone number format? " + newLib.usNumber("123-456-7890"));
console.log("Is this a valid email address format? " + newLib.email("aaa@bbb.ccc"));
console.log("Does this URL start with a http: or https:? " + newLib.url("https://www.fullsail.com")); console.log(newLib.titleCase("fiRsT_lEttEr_cApItAl,_thE_reSt loWerCase_anD_rePLacE_underSCOrE with_space."));
console.log(newLib.toProperCase("This capitalizes the first letter of every word in a string."));
console.log(newLib.sepReplace("a,b,c,d,e,f,g"));
console.log("$" + newLib.formatNumber("12.345678",2));
console.log("Is this a fuzzy match? " + newLib.fuzzyMatch(50,10));
console.log("Is this a number? " + newLib.checkNumeric("1"));
console.log("Is this Jamal? " + newLib.areYouJamal("John"));



