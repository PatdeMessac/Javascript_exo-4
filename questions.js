
//selects elements starting with A', function() {
       // var result = selectElementsStartingWithA(['bananas', 'apples', 'pears', 'avocados']);
       // expect(result).toEqual(['apples', 'avocados']);
    
var selectElementsStartingWithA = function(array) {
var tableau = ['bananas', 'apples', 'pears', 'avocados'];
var result = "";
for (i = 0; i <= tableau.length; i++){
    if (tableau[0] === "a") {
return result
    }
//var result = array.charAt(0);
 //return result;
// http://stackoverflow.com/questions/35989496/my-methods-arent-very-dry


//THE FILTER METHOD (?)

//1. var startingWithA = yourArray.filter((n) => n.charAt(0)==="a" )

//2. var startingWithVowel = yourArray.filter((n) => n[0].match(/^[aeiou]$/) )

//3. var withoutNullElements = yourArray.filter((n) => n !== undefined )

//selects elements starting with A', function() {
//var result = selectElementsStartingWithA(['bananas', 'apples', 'pears', 'avocados']);
//expect(result).toEqual(['apples', 'avocados']);

/*var selectElementsStartingWithA = function(array) {
  this.newArray = []
  array.forEach(function(n) {
    if (n.charAt(0) === "a") {
      this.newArray.push(n)
    };
  });
  return this.newArray;
}
*/
//AUTRE METHODE :
 var selectElementsStartingWithA = function(array) {
		var newArray = array.filter(function(n){
		  return n.charAt(0)==="a";
		});
return newArray;
}
//OU ? : 
/*var selectElementsStartingWithA = function(array) {
var selectElementsStartingWithA = array.filter(n => (n.charAt(0)==="a"));
return selectElementsStartingWithA;
}*/

//selects elements starting with a vowel', function() {
//var result = selectElementsStartingWithVowel(['john', 'david', 'omar', 'fred', 'idris', 'angela']);
//expect(result).toEqual(['omar', 'idris', 'angela']);

var selectElementsStartingWithVowel = function(array) {
  this.newArray = []
  array.forEach(function(n) {
    if (n[0].match(/^[aeiou]$/)) {
      this.newArray.push(n);
    };
  });
  return this.newArray
}


//removes null values from an array', function() {
       // var result = removeNullElements(['a', 'b', null, null, false, 0]);
       // expect(result).toEqual(['a', 'b', false, 0]);
var removeNullElements = function(array) {
  this.newArray = []
  array.filter(function(n) {
    if (n != undefined) {
      this.newArray.push(n)
    };
  });
  return this.newArray
}


//removes null and false values from an array', function() {
        //var result = removeNullAndFalseElements(['a', 'b', null, null, false, 0]);
        //expect(result).toEqual(['a', 'b', 0]);
var removeNullAndFalseElements = function(array) {
     this.NAF = []
  array.filter(function(n) {
    if (n != undefined  && n != 'false' ) {
      this.NAF.push(n)
    };
  });
  return this.NAF;
}


//reverses the letters of each element in an array', function() {
        //var result = reverseWordsInArray(['dog', 'monkey', 'elephant', 'kayak']);
        //expect(result).toEqual(['god', 'yeknom', 'tnahpele', 'kayak']);
var reverseWordsInArray = function(array) {
    return 'Write your method here';
}

var everyPossiblePair = function(array) {
    return 'Write your method here';
}

var allElementsExceptFirstThree = function(array) {
    return 'Write your method here';
}

var addElementToBeginning = function(array, element) {
    return 'Write your method here';
}

var sortByLastLetter = function(array) {
    return 'Write your method here';
}

var getFirstHalf = function(string) {
    return 'Write your method here';
}

var makeNegative = function(number) {
    return 'Write your method here';
}

var numberOfPalindromes = function(array) {
    return 'Write your method here';
}

var shortestWord = function(array) {
    return 'Write your method here';
}

var longestWord = function(array) {
    return 'Write your method here';
}

var sumNumbers = function(array) {
    return 'Write your method here';
}

var repeatElements = function(array) {
    return 'Write your method here';
}

var stringToNumber = function(string) {
    return 'Write your method here';
}

var calculateAverage = function(array) {
    return 'Write your method here';
}

var getElementsUntilGreaterThanFive = function(array) {
    return 'Write your method here';
}

var convertArrayToObject = function(array) {
    return 'Write your method here';
}

var getAllLetters = function(array) {
    return 'Write your method here';
}

var swapKeysAndValues = function(object) {
    return 'Write your method here';
}

var sumKeysAndValues = function(object) {
    return 'Write your method here';
}

var removeCapitals = function(string) {
    return 'Write your method here';
}

var roundUp = function(number) {
    return 'Write your method here';
}

var formatDateNicely = function(date) {
    return 'Write your method here';
}

var getDomainName = function(string) {
    return 'Write your method here';
}

var titleize = function(string) {
    return 'Write your method here';
}

var checkForSpecialCharacters = function(string) {
    return 'Write your method here';
}

var squareRoot = function(number) {
    return 'Write your method here';
}

var factorial = function(number) {
    return 'Write your method here';
}

var findAnagrams = function(string) {
    return 'Write your method here';
}

var convertToCelsius = function(number) {
    return 'Write your method here';
}

var letterPosition = function(array) {
    return 'Write your method here';
}
