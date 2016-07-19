// http://stackoverflow.com/questions/35989496/my-methods-arent-very-dry
//https://gist.github.com/conradho/b56325eac1fdb7be7b30

/*var selectElementsStartingWithA = function(array) {
    function startingWithA(word) {
        // use .charAt(0) instead of just [0] to be more explicit
        return word.charAt(0) === 'a';
    }
    return array.filter(startingWithA);
};
*/
var selectElementsStartingWithA = function(array) {
    var result =[];
    for (i = 0 ; i < array.length ; i ++) {
        var word = array [i];
        if (word.charAt(0) == 'a'){
            result.push(word);
        }
    }
    return result;
}

//selects elements starting with a vowel', function() {
//var result = selectElementsStartingWithVowel(['john', 'david', 'omar', 'fred', 'idris', 'angela']);
//expect(result).toEqual(['omar', 'idris', 'angela']);

var selectElementsStartingWithVowel = function(array) {
    var vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
    function startingWithVowel(word) {
        var firstChar = word.charAt(0);
        // if firstChar not in list, then index === -1
        return vowels.indexOf(firstChar) !== -1;
    }
    return array.filter(startingWithVowel);
};

//OU

/*
var selectElementsStartingWithVowel = function(array) {
    var vowel = ['a', 'e', 'i', 'o', 'u', 'y'];
    for (var i = 0 ; i < array.length ; i++){
        var Nom = array[i].charAt(0);
        for (var vowel = 0 ; vowel < vowel.length ; vowel ++) {
            if (Nom == vowel[vowel]) {
                tab.push(array[i]);    
            }
        } 
    }
return Nom;
}

*/

//removes null values from an array', function() {
       // var result = removeNullElements(['a', 'b', null, null, false, 0]);
       // expect(result).toEqual(['a', 'b', false, 0]);
var removeNullElements = function(array) {
    function notNull(word) {
        return word !== null;
    }
    return array.filter(notNull);
};

//removes null and false values from an array', function() {
        //var result = removeNullAndFalseElements(['a', 'b', null, null, false, 0]);
        //expect(result).toEqual(['a', 'b', 0]);
var removeNullAndFalseElements = function(array) {
    function notNullOrFalse(word) {
        return word !== null && word !== false;
    }
    return array.filter(notNullOrFalse);
};



//reverses the letters of each element in an array', function() {
        //var result = reverseWordsInArray(['dog', 'monkey', 'elephant', 'kayak']);
        //expect(result).toEqual(['god', 'yeknom', 'tnahpele', 'kayak']);
   var reverseWordsInArray = function(array) {
    function reverseChars(word) {
        return word.split("").reverse().join("");
    }
    return array.map(reverseChars);
};






//it('makes every possible pairing of students', function() {
//        var result = everyPossiblePair(['Jon', 'Tyrion', 'Daenerys']);
//        // sorted alphabetically
//        expect(result).toEqual([
//            ['Daenerys', 'Jon'],
//            ['Daenerys', 'Tyrion'],
//            ['Jon', 'Tyrion']
//        ]);

    var everyPossiblePair = function(array) {
        var everyPossiblePair = [];
            // note: slice(0) creates deep copy of array
            // reverse() manipulates AND saves in place AND returns
        var copyOfArray = array.slice().reverse();
        for (var student1 of array) {
            copyOfArray.pop();
            for (var student2 of copyOfArray) {
                everyPossiblePair.push([student1, student2].sort());
        }
    }
    return everyPossiblePair.sort();
};

//takes all elements except the first 3', function() {
  //      var result = allElementsExceptFirstThree([1, 2, 3, 4, 5, 6, 7, 8]);
    //    expect(result).toEqual([4, 5, 6, 7, 8]);

    var allElementsExceptFirstThree = function(array) {
    return array.slice(3);
};


var addElementToBeginning = function(array, element) {
    array.unshift(element);
    return array;
}

//sorts an array by the last letter of each word', function() {
  //      var result = sortByLastLetter(['Lannister', 'Stark', 'Greyjoy', 'Targaryen']);
    //    expect(result).toEqual(['Stark', 'Targaryen', 'Lannister', 'Greyjoy']);
var sortByLastLetter = function(array) {
    function compareLastLetter(word1, word2) {
        return word1.slice(-1) > word2.slice(-1);
    }
    return array.sort(compareLastLetter);
};

//gets the first half of a string', function() {
  //      var resultOne = getFirstHalf('dragon');
    //    var resultTwo = getFirstHalf('snake');
//expect(resultOne).toEqual('dra');
  //      expect(resultTwo).toEqual('sna');

var getFirstHalf = function(string) {
    return string.slice(0, (string.length + 1) / 2);
};


//makes numbers negative', function() {
 //       var resultOne = makeNegative(5);
  //      var resultTwo = makeNegative(-5);
//
  //      expect(resultOne).toEqual(-5);
    //    expect(resultTwo).toEqual(-5);
var makeNegative = function(number) {
    return -Math.abs(number);
}





//counts elements in an array that are palindromes', function() {
       // var result = numberOfPalindromes(['kayak', 'noon', 'khaleesi', 'hodor', 'racecar', 'abcbc', 'abcba']);
        //expect(result).toEqual(4);
   
   var numberOfPalindromes = function(array) {
    // recursive function to test if an array of letters is palindrome
    function isPalindrome(wordArray) {
        if (wordArray.length < 2) {
            return true;
        }
        var first = wordArray.shift();
        var last = wordArray.pop();
        if (first !== last) {
            return false;
        } else {
            return isPalindrome(wordArray);
        }
    }
    function incrementIfPalindrome(count, word) {
        var wordArray = word.split("");
        return isPalindrome(wordArray) ? count + 1 : count;
    }
    return array.reduce(incrementIfPalindrome, 0);
};








var shortestWord = function(array) {
    function returnMin(previousMin, word) {
        return previousMin.length < word.length ? previousMin : word;
    }
    return array.reduce(returnMin);
};




var longestWord = function(array) {
    function returnMax(previousMax, word) {
        return previousMax.length > word.length ? previousMax : word;
    }
    return array.reduce(returnMax);
};

//sums up the numbers in an array', function() {
  //      var result = sumNumbers([1, 3, 5, 6, 2, 8]);
    //    expect(result).toEqual(25);
// also using this as a helper for other functions
// made it function instead of var because of this
// just in case
function sumNumbers(arrayOfNumbers) {
    function sumNumber(a, b) {
        return a + b;
    }
    return arrayOfNumbers.reduce(sumNumber, 0);
}
//exemple :
//[0, 1, 2, 3, 4].reduce(function(valeurPrecedente, valeurCourante, index, array){
 // return valeurPrecedente + valeurCourante;
//});



//repeats the elements of an array', function() {
  //      var result = repeatElements(['a', 'b', 'c']);
    //    expect(result).toEqual(['a', 'b', 'c', 'a', 'b', 'c']);
    
    var repeatElements = function(array) {
    // concat does not affect array, and creates whole new array
    return array.concat(array);
};

//('turns a number string into a number', function() {
     //   var result = stringToNumber('3');
      //  expect(result).toEqual(3);
var stringToNumber = function(string) {
    return Number(string);
};

//calculates the average of an array of numbers', function() {
  //      var result = calculateAverage([10, 15, 25]);
    //    expect(result).toEqual((10 + 15 + 25) / 3);
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
    return string.toLowerCase();
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
