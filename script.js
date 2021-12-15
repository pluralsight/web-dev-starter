




function plusTwo(num) {
  return num + 2;
}
console.log(plusTwo(3)); // 3 + 2 = 5

function timesTwo(num) {
  return plusTwo(num) * 2;
}
console.log(timesTwo(3)); // (3 + 2) * 2 = 10

function DividedByFive(num) {
  return timesTwo(num) / 5;
}

console.log(DividedByFive(3)) // ((3 + 2) * 2) / 5 = 2









































// // FUNCTION DEFINITION(S)
// function map(array, callbackFunction) {
//   var newArray = [];

//   for (var i = 0; i < array.length; i++) {
//     newArray.push(callbackFunction(array[i]));
//   }

//   return newArray;
// }

// function cubeAll(numbers) {
//   return map(numbers, function(n) {
//     return n * n * n;
//   });
// }

// // ASSERTION FUNCTION(S) TO BE USED
// function assertArraysEqual(actual, expected, testName){
//   var areEqualLength = actual.length === expected.length;

//   var areEqualItems = true;
//   for (var i = 0; i < expected.length; i++){
//     if(expected[i] !== actual[i]){
//       areEqualItems = false;
//       break;
//     }
//   }

//   if(areEqualLength && areEqualItems){
//     console.log(`passed`)
//   } else {
//     console.log("FAILED [" + testName + "] Expected " + expected + ", but got " + actual)
//   }
  

// }

// // TESTS CASES
// var cubeAllTestArray = [1, 2, 3, 4];
// var actualCubeAllTest = cubeAll(cubeAllTestArray);
// var expectCubeAllTest = [1, 8, 27, 64];
// console.log(assertArraysEqual(actualCubeAllTest, expectCubeAllTest, 'should cube all elements and return results in an array'));

































// // FUNCTION DEFINITION(S)
// function every(array, callbackFunction) {
//   var doesEveryElementMatch = true;

//   for (var i = 0; i < array.length; i++) {
//     if (doesEveryElementMatch === false) {
//       break;
//   }
//   doesEveryElementMatch = callbackFunction(array[i]);
//   }
//   return doesEveryElementMatch;
// }

// // ASSERTION FUNCTION(S) TO BE USED
// function assertEqual (actual, expected, testName){
//   //create an asert function to check actual and expected results from given function
//   if (actual === expected) {
//     console.log('passed');
//   } else {
//     console.log('FAILED [' + testName + '] Expected "' + expected + '", but got "' + actual + '"');
//   }
// }


// // TESTS CASES
// function allOddNumber (num){
//   return (num % 2) === 1;
// }


// var arr = [1, 3, 5, 7, 9];
// // console.log(allOddNumber(arr))

// var actualTrue = every(arr, allOddNumber)
// var expectedTrue = true;
// assertEqual(actualTrue, expectedTrue, `Should return true when all elements pass the test`)































// var scalar1 = 'equal';
// var scalar2 = 'equal';
// console.log("two scalars can be compared with each other using triple equals:", scalar1 === scalar2);

// var array1 = [{a:1}, 'a', 'b', 'c'];
// var array2 = [{a:1}, 'a', 'b', 'd'];
// console.log("two arrays can be compared with each other using triple equals", array1 === array2);

// for (var i = 0; i < array1.length; i++){
//   if(array1[i] !== array2[i]){
//     console.log(false);
//   } else {
//     console.log(true);
//   }
// }


































// function transformEmployeeData (arr){
//   //Description of Problem
//   //input - multiple arrays of key value pairs
//   //output - matching objects with key:value pairs equal to 0 and 1 index of array

//   //EDGE CASES
//   //

//   //PseudoCode
//   //create a new object variable to store results
//   //create a copy of arr
//   //iterate over each array of arrays
//     //iterate down each array
//       //set index 0 as key
//       //set index 1 as value
//   //return object
  
//   var newArr = arr.slice()
//   var result = []

  
//   for (var i = 0; i < newArr.length; i++){
//     var personArray = arr[i];
//     var personObject = {};
//     for (var j = 0; j < personArray.length; j++){
//       console.log('personArray', personArray[j])
//       var key = personArray[j][0]
//       var value = personArray[j][1]
//       personObject[key] = value;
//       console.log('personObject', personObject)
//     }
//   result.push(personObject);
//   console.log('result', result)
//   }
//  //return something?
// return result;
// }
// //Test Case




// console.log(transformEmployeeData(input = [
//   [
//       ['firstName', 'Joe'], ['lastName', 'Blow'], ['age', 42], ['role', 'clerk']
//   ],
//   [
//       ['firstName', 'Mary'], ['lastName', 'Jenkins'], ['age', 36], ['role', 'manager']
//   ]
// ]))
























//   //Description of Problem
//   //Given two integers, return the prodct between the two given integers
//   //beginning at num1 and excluding num2
//   //example, the product between 1 and 4 is 1*2*3 = 6

//   //EDGE CASE
//   //if num2 is less than num1, return zero


// function multiplyBetween (num1, num2){

// if(num2 < num1){
//   return 0;
// }
// if (num1 === num2){
//   return 0;
// }
//  //remove negative numbers
// //  num1 = Math.abs(num1);
// //  num2 = Math.abs(num2);

//  var product = 1;
// for (var i = num1; i < num2; i++){
//   console.log('i', i, 'num1', num1)
//   product = product * i
//   }
// return product;

// }


// var output = multiplyBetween(-2, 5);
// console.log(output); // --> 24























// function multiply (num1, num2){
//   var isNegative = false;
//   if((num1 > 0 && num2 < 0) || (num2 > 0 && num1 < 0)){
//     isNegative = true;
//   }
//   num1 = Math.abs(num1)
//   num2 = Math.abs(num2)

//   var result = 0;
//   for (var i = 0; i < num2; i++){
//     result += num1;
//   }

//   if(isNegative){
//     return -result;
//   } else {
//     return result;
//   }

// }

// //Test Case
// var output = multiply(5, -2);
// console.log(output); // --> 28




































// function findShortestWordAmongMixedElements (arr){
  //Description of Problem
  //Given an array, returns the shortest STRING within the array

  //EDGE CASE
  //if there are ties, return the first case in the array
  //expect array to have different types of values
  //if array is empty, return empty string
  //if array has no strings, return empty string -- natural case
  // if(arr === undefined || arr.length === 0|| Array.isArray(arr) === false){
  //   return '';
  // }

  //PseduoCode
  //create an empty strings ARRAY to hold array of strings
  //create a variable to hold shortest STRING element and set to really big number
  //iterate over the array
    //if curent value is a string AND length is less than current shortest variable
      //set to current shortest variable
  //return shortest STRING variable

// var strings = [];
  
// for( var i = 0; i < arr.length; i++){
//   if (typeof arr[i] === "string"){
//     strings.push(arr[i]);
//     console.log ('strings', strings)
//     }
//   }

//   if (strings.length === 0){
//     return "";

//   }

// var shortestWord = strings[0]
// for (var i = 1; i < strings.length; i++){
//   if (strings[i].length < shortestWord.length){
//     shortestWord = strings[i];
//   }
// }


 
//   //return something?
//   return  shortestWord;
// }

































// function getOddLengthWordsAtProperty (obj, key){
//   //Description of Problem//
//   //Given an object and key, return an array containing all the odd length word elements of the array
//   /////////

//   //EDGE CASES
//   //if array is empty OR contains no matching elements OR is NOT and array OR no array at key return []
//   ////////////
//   arr = obj[key];
//   if(arr === undefined || arr.length === 0 || Array.isArray(arr) === false){
//     return [];
//   }
  

//   //PseudoCode
//   //create array variable and link to array in object at key, check formating
//   //iterate over array
//     //if current item is even
//       //splice it from the array (delete)
//       //adjust counter to accomodate missing element
//   //return obj

// for (var i = 0; i < arr.length; i++){
//   if(arr[i].length % 2 === 0){
//     arr.splice(i,1);
//     i--;
//   }

// }

// return arr;
// //don't forget to return something
// }



// var obj = {
//   key: ['It', 'some', 'word']
//   //key: undefined
// };
// var output = getOddLengthWordsAtProperty(obj, 'key');
// console.log('output', output); // --> ['has', 'words']
























// function getElementsLessThan100AtProperty (obj, key){
//   //return an array containing all the elements of the array locatd at the given key that are less than 100

//   //set up array to work with
//   var arr = obj[key]

//    //if no property at key or array is empty or not an array
//     //return empty array
//   if(arr === undefined || arr.length === 0 || Array.isArray === false) {
//     return [];
//   }

// //setup new array to store data
// //iterate down the array
//   //if number < 100
//   // push number to new array
// //return new array
// var newArray = [];

// for (var i = 0; i < arr.length; i++){
//   if(arr[i] < 100){
//     newArray.push(arr[i])
//   }
// }

// return newArray;
// }



// var obj = {
//   key: [1000, 20, 50, 500]
// };
// var output = getElementsLessThan100AtProperty(obj, 'key');
// console.log(output); // --> [20, 50]






















// function getElementsThatEqual10AtProperty(obj, key){
//   //given an object and key
//   //return an array with all elements of the array at the given key that are equal to ten
//   //edge case : if array is empty - return empty array
//   //edge case : if array has no elements equal to 10, it should return empty array
//   //edge case : if the property at the given key is not an array, return empty array
//   //edge case : if no property at the key, it should return an empty array

// //loop through object[key] array looking for 10
//   //if number is equal to 10
//   //add to new array
// //return new array
// var arr = obj[key];
// if(arr === undefined){  // no property at key
//   return [];
// } else if(arr.length === 0){ //is it empty
//   return [];
// }
// if(Array.isArray(arr) === false){  //is it an array?
//     return [];
// }

// var newArr = [];
// for(var i = 0; i < arr.length; i++){
//   if(arr[i] === 10){
//     newArr.push(arr[i]);
//     }

// }
// return newArr;

// }

// var obj = {
//   key: [1100, 10, 10, 50]
// };
// var output = getElementsThatEqual10AtProperty(obj, 'key');
// console.log(output); // --> [10, 10]














// function getLargestElement (arr){
//   //given an array
//   //returns the largest number in array
//   //if array is empty, return 0
//   if(arr.length === 0){
//     return 0;
//   }
//   //create largestNumber variable
//   //iterate through array
//     //if current number is greater than largestNumber
//     //replace largetsNumber by current number
//   //return largest number
//   var largestNumber = -Infinity;
//   for (var i = 0; i < arr.length; i++){
//     if(arr[i] > largestNumber){
//       largestNumber = arr[i];
//     }
//   }
// return largestNumber;
// }

// var output = getLargestElement([5, 2, 8, 3]);
// console.log(output); // --> 8;











// function getLengthOfShortestElement(arr){
//   //create length variable
//   //iterate through array
//     //if index is less than current index
//       //set current index
//   //return smalles word
//   var length = 100;
//   for (var i = 0; i < arr.length; i++){
//     if (arr[i].length < length){
//        length = arr[i].length;
//        console.log(arr[i]);
//   }

// }
// return length;
// }




// var output = getLengthOfShortestElement(['one', 'two', 'three']);
// console.log(output); // --> 3











// function filterEvenElements(arr) {
//   //create a new array
//   //iterate through the array
//     //if even number add to new array
//   //return new array
//   var newArray = [];
//   for (var i = 0; i < arr.length; i++){
//     if(arr[i] % 2 === 0){
//       newArray.push(arr[i]);
//     }

//   }
//   return newArray;
// }






// var output = filterEvenElements([2, 3, 4, 5, 6]);
// console.log(output); // --> [2, 4, 6]






// function nextAndLastBusTimes (arr){
//   var last = arr.length -1
//   //console.log(arr.length);
//   return `The next bus is in ${arr[0]} minutes. The last bus is in ${arr[last]} minutes.`
// }






// var bus10Schedule = [12, 24, 35, 47, 60];
// nextAndLastBusTimes(bus10Schedule); //"The next bus is in 12 minutes. The last bus is in 60 minutes."
// console.log(bus10Schedule);









// function isItExpensive (obj){
//   //check the value of price in the object
//   //if less than 100
//     //return false;
//   //else if the value is greater than or equal to 100
//     //return true
//   //else if null, return no data
//   console.log('obj.price', obj.price )
//   if (obj.price === null){
//     return 'no data'
//   }else if (obj.price >= 100){
//     return true;
//   } else if (obj.price < 100){
//     return false;
//   } else if (obj.price === null){
//     return "no data"
//     }
// }


// var appleWatch = {price: 400}
// var applesAndWatches = {price: 30}
// var watchingApples = {price: null}

// console.log ('true', isItExpensive(appleWatch)); //true
// console.log (' false', isItExpensive(applesAndWatches)); //false
// console.log( 'null', isItExpensive(watchingApples)); //"no data"











// function myFavoriteSong (){
//   obj = {title: "Countdown", artist: "Beyonce", durationInSeconds: 212};
//   return obj;
// }











// function addOnlyFirstFourNums (arr){
//   var result = (arr[0]+ arr[1] + arr[2] + arr[3])
//   return result;
// }








// function addFourNums (num1, num2, num3, num4){
//   var sum = num1 + num2 + num3 + num4;
//     return sum;
// }

// addFourNums(10, 20, 30, 40)





// function wasItFunny (input){
//   if(input === true){
//     return "HAHAHA'"
//   } else {
//     return "meh"
//   }
// }





// function removePartyKillers (arr){
//   //create a copy of the arr
//   //iterate over object
//      //if objs value is greater than 480, delete object property
//      //delete title, artist and durationInSeconds
//   //return new array
//   newArray = arr.slice();

//   for (var i = 0; i < arr.length; i++){
//     for (var currentKey in object){

//     }
    
//   }
 
// }




// var awesomePlaylist = [
//   {
//     title: "Hay Day",
//     artist: "Robo-Crop",
//     durationInSeconds: 378
//   }, {
//     title: "10,000 Pounds",
//     artist: "L-Ton Jonn",
//     durationInSeconds: 498,
//   }, {
//     title: "Caesar's Salad",
//     artist: "DJ Dinner Julius",
//     durationInSeconds: 600,
//   }, {
//     title: "The British Are On Their Way",
//     artist: "Raul Pevere",
//     durationInSeconds: 1095,
//   }, {
//     title: "13th",
//     artist: "The Doctors",
//     durationInSeconds: 185,
//   }
// ];

// removePartyKillers(awesomePlaylist);





// function executiveSummary(str){
//   console.log (str);
//   var newString = str.substring(0,14);
//   //return newString;
//   //console.log(str.substring(0,14));
// }



// executiveSummary('URGENT: the lobby is rapidly filling up with popcorn. We cannot locate where the popcorn is coming from. Send help.');


// executiveSummary('URGreat!!!');











// function addGenre (obj, song){
//   //add property genre with value song to existing object
//   console.log(obj);
//   obj['genre'] = song;
//   console.log(obj);
//   return obj;

// }





// var favoriteSong = {
//   title: "Countdown", 
//   artist: "Beyonce", 
//   durationInSeconds: 212
// };

// result = addGenre(favoriteSong, "Contemporary R&B");

// console.log(result); //{title: "Countdown", artist: "Beyonce", durationInSeconds: 212, genre: "Contemporary R&B"};










// function displayBusTimes (obj, str){
//   if (obj === undefined){
//     return 0;
//   }
//   //iterate over the object
//     //when str === object key
//     //console.log "The buss will arrive in the next ${obj key} minutes"
//     //console.log(obj['bus15Schedule']);
//    // console.log(str);

//     for(var currentKey in obj){
//       if (currentKey === str)
//       //console.log(obj[currentKey]);
//       //console.log `The buss will arrive in the next ${obj[currentKey]} minutes.`
//       //console.log ('The buss will arrive in the next [' + obj[currentKey] + '] minutes.');
//       return 'The bus will arrive in the next [' + obj[currentKey] + '] minutes.'

//     }
    
// }


// var cityZBusSchedules = {
//   bus12Schedule: [9, 18, 27, 36],
//   bus15Schedule: [11, 22, 33, 44],
//   bus22Schedule: [15, 30, 45]
//   };

// console.log(displayBusTimes(cityZBusSchedules, "bus15Schedule")); //"The bus will arrive in the next [11,22,33,44] minutes."







// //write a function that converts a number
// //if string is 'cm' it will convert into cm by * 2.54
// //if string is 'in' it will convert into in by / 2.54

// function convertTo (str, num){
//   //create convertedNumber variable
//   //read in str value
//     //if 'cm' 
//       //multiply by 2.54
//     //if 'in'
//       //divide by 2.54
//   //return convertedNumber
//   var convertedNumber;
  
//   if(str === 'cm'){
//     convertedNumber = num *2.54;

//   } else if (str === 'in') {
//       convertedNumber = num / 2.54;
//     }
//     return convertedNumber;

//   }




// console.log (convertTo('cm', 100)); //254
// console.log (convertTo('in', 50.8)); //20




















// function filterEvenElements(arr) {
//   //arr check, if empty return 0
//   //create a new array to store even elements
//   //iterate over arr
//     //if current value is even
//     //push into new array
//   //return new array
//   if(arr.length === 0){
//     return 0;
//   }
//   var EvenElementsArray = []
// }

// var output = filterEvenElements([2, 3, 4, 5, 6]);
// console.log(output); // --> [2, 4, 6]









// function computeProductOfAllElements(arr) {
//   //check to see if arr is empty
//     //if empty return 0
//   //create ProductOfElements variable and set to 1
//   //iterate over array
//     //continue to multiply array elements together
//   //return ProductOfElements
//   if ( arr.length === 0){
//     return 0;
//   }
//   var ProductOfAllElements = 1;
//   for (var i = 0; i < arr.length; i++){
//     ProductOfAllElements = ProductOfAllElements * arr[i];
//   }



//   return ProductOfAllElements;
// }


// var output = computeProductOfAllElements([2, 5, 6]);
// console.log(output); // --> 60





// function filterOddElements(arr) {
//   //check to see if input array is empty
//     //return 0 if empty
//   //create a new array for odd elements of array
//   //iterate over array 
//     //if element is odd
//     //push it to new array

//   //return new array of all odd elements
//   if ( arr.length === 0 ){
//     return [];
//   }
//   arrOfOddElements = [];
  
//   for (var i = 0; i < arr.length; i++){
//     if(arr[i] % 2 === 1){
//       arrOfOddElements.push(arr[i])
//     }
//   }
//   return arrOfOddElements;
// }

// var output = filterOddElements([1, 2, 3, 4, 5]);
// console.log(output); // --> [1, 3, 5]












// function squareElements(arr) {
//   //check to see if arr is empty
//   //create a new array
//   //iterate over the array
//     //calculate the square : arr[i] * arr[i]
//     //push answer to new array
//   //return array
//   if ( arr.length === 0){
//     return 0;
//   }
//   var arrayOfSquares = [];
//   for (var i = 0; i < arr.length; i++) {
//     arrayOfSquares.push(arr[i] * arr[i]);
//   }



//   return arrayOfSquares;
// }




// var output = squareElements([1, 2, 3]);
// console.log(output); // --> [1, 4, 9]
















// function getLengthOfLongestElement(arr) {
//   if( arr === []){
//     return 0;
//   }
//   currentLongestWord = 0;
//   for (var i = 0; i < arr.length; i++){
//     if (arr[i].length > currentLongestWord){
//       currentLongestWord = arr[i].length;
//     }
//   }
//   return currentLongestWord;
// }

// var output = getLengthOfLongestElement(['one', 'two', 'three']);
// console.log(output); // --> 5








// function filterOddLengthWords(words) {
//   //create empty array variable
//   //iterate array and filter even words
//   //if word is even
//     //add to empty array
//   //return array
//   var arr = [];
//   for (var i = 0; i < words.length; i++){
//     if(words[i].length % 2 === 1){
//       arr.push(words[i]);
//     }
//   }
// return arr;
// }


// var output = filterOddLengthWords(['there', 'it', 'is', 'now']);
// console.log(output); // --> ['there', "now']




































// function countAllCharacters(str) {
//   //create an object variable
//   //create an array from str
//   //iterate over the string comparing letter to object
//     //if object is undefined, create key with value 1
//     //if object is defined, ++
//   //return object
//   var newObj = {};
//   var array = str.split('');
//   for (var i = 0; i < array.length; i++){
//     index = array[i];
//     if(newObj[index] === undefined){
//       newObj[index] = 1;
//     } else {
//       newObj[index]++
//     }
//   }
// return newObj
// }









// var output = countAllCharacters('banana');
// console.log(output); // --> {b: 1, a: 3, n: 2}


















// function select(arr, obj) {
//   newObj = {}
//   for (var keys in obj){
//     for (var i =0; i < arr.length; i++){
      
//       console.log(keys)
//       if (keys === arr[i]){
//         newObj[keys] = obj[keys]
//       }
//     }
//   }
//   return newObj;
// }


// var arr = ['a', 'c', 'e'];
// var obj = {
//   a: 1,
//   b: 2,
//   c: 3,
//   d: 4
// };
// var output = select(arr, obj);
// console.log('output', output); // --> { a: 1, c: 3 }



// function findShortestOfThreeWords(word1, word2, word3) {
//   array = [word1, word2, word3]
//   minLength = word1.length
//   positionOfWord = 0;
//   for (var i = 0; i < array.length; i++){
//       if(array[i].length < minLength){
//           minLength = array[i].length;
//           positionOfWord = i
//       }
//   }
//   return array[positionOfWord];
// }


// var output = findShortestOfThreeWords('aaaaa', 'two', 'te');
// console.log(output); // --> 'a'




// function getLongestOfThreeWords(word1, word2, word3) {
//   // set up an array 
//   //iterate over array looking for longest word
//   //return first longest word
//   array = [word1, word2, word3]
//   maxLength = word1.length
//   positionOfWord = 0;
//   for (var i = 0; i < array.length; i++){
//       if(array[i].length > maxLength){
//           maxLength = array[i].length;
//           positionOfWord = i
//       }
//   }
//   return array[positionOfWord];
// }



// var output = getLongestOfThreeWords('thee', 'eeehree', 'ords');
// console.log(output); // --> 'these'

// function findMaxLengthOfThreeWords(word1, word2, word3) {
//   //return Math.max(word1.length, word2.length, word3.length);
//   array = [word1, word2, word3]
//   maxLength = word1.length
//   for (var i = 0; i < array.length; i++){
//       if(array[i].length > maxLength){
//           maxLength = array[i].length;
//       }
//   }
//   return maxLength;
// }

// var output = findMaxLengthOfThreeWords('a', 'be', 'see');
// console.log(output); // --> 3

// function getIndexOf(char, str) {
//   for (var i = 0; i < str.length; i++){
//     if (str[i] === char){
//     return i;
//     } 
  

//   }
// return -1
// }


// var output = getIndexOf('z', 'I am a hacker');
// console.log(output); // --> 2











// function getAllElementsButNth(array, n) {
//   array.splice(n,1);

//   return array;
// }

// var output = getAllElementsButNth(['a', 'b', 'c'], 1);
// console.log(output); // --> ['a', 'c']







// function addToBackOfNew(arr, element) {
//   newArray = arr.slice();
//   newArray.push(element);
//   return newArray;
// }


// var input = [1, 2];
// var output = addToBackOfNew(input, 3);
// console.log(input); // --> [1, 2]
// console.log(output); // --> [1, 2, 3]










// function addToFrontOfNew(arr, element) {
//   //unshift
//   var newArray = arr.slice();
//   newArray.unshift(element);
//   return newArray;
// }

// var input = [1, 2];
// var output = addToFrontOfNew(input, 3);
// console.log('[3, 1, 2]', output); // --> [3, 1, 2];
// console.log('[1, 2]', input); // --> [1, 2]











// function removeStringValuesLongerThan(num, obj) {
//   for (var currentKey in obj){
//         if(typeof (obj[currentKey]) === 'string' && obj[currentKey].length > num){
//         delete obj[currentKey]
//         }
//       }
// }

// var obj = {
//   name: 'Montana',
//   age: 20,
//   location: 'Texas'
// }
// removeStringValuesLongerThan(6, obj);
// console.log(obj); // { age: 20, location: 'Texas' }











// function removeNumbersLessThan(num, obj) {
//   for (var currentKey in obj){
//     if(typeof (obj[currentKey]) === 'number' && obj[currentKey] < num){
//     delete obj[currentKey]
//     }
//   }
// }
// var obj = {
//   a: 8,
//   b: 2,
//   c: 'montana'
// }
// removeNumbersLessThan(5, obj);
// console.log(obj); // --> { a: 8, c: 'montana' }


// function coinFlip(){
//   heads = '####################'
//   tails = '@@@@@@@@@@@@@@@@@@@@'
//   lucky5 = 0

//   var count = 0
//   while (count < 50000){
//   var randomNum = Math.floor(Math.random() * 11) 
//     count++
//     if (randomNum >= 0 && randomNum < 5){ //0, 1, 2, 3 or 4
//       tails = tails.substring(1);
//       heads = heads + "#";
//     } else if (randomNum > 5 && randomNum <= 10){ //6, 7, 8, 9 or 10
//       heads = heads.substring(1);
//       tails = tails + "@";
//     } else {
//       lucky5++;
//       console.log ('lucky5', lucky5);
//     }
//     console.log('heads',heads);
//     console.log('tails',tails);
    
//   }
//   //return randomNum;
//   console.log('Heads:', heads.length);
//   console.log('Tails:', tails.length);
//   console.log('Lucky5', lucky5);
// }

// random = coinFlip();



// function removeStringValues(obj) {
//   for (var currentKey in obj){
//     if(typeof obj[currentKey] === 'string'){
//       delete obj[currentKey];
//     }
//   }
  
// }

// var obj = {
//   name: 'Sam',
//   age: 20
// }
// removeStringValues(obj);
// console.log(obj); // { age: 20 }




// function removeArrayValues(obj) {
//   for (var currentKey in obj){
//     if(Array.isArray(obj[currentKey]) === true){
//       delete obj[currentKey]
//     }
//   }
//   return obj;
// }


// var obj = {
//   a: [1, 3, 4],
//   b: 2,
//   c: ['hi', 'there']
// }
// removeArrayValues(obj);
// console.log(obj); // --> { b: 2 }
















// for(let line = '#'; line.length < 8; line += '#')
// console.log(line);



// function isPrime(element, index, array) {
//   let start = 2;
//   while (start <= Math.sqrt(element)) {
//     if (element % start++ < 1) {
//       //console.log(element);

//       return false;
//     }
//   }
//   return element > 1;
// }

// console.log([4, 6, 8, 12].find(isPrime)); // undefined, not found
// console.log([4, 5, 8, 12, 13].find(isPrime)); // 5











// function isAnAgent(agentList, agent){
//   newArray = agentList.slice();  //copy of agentList, keep original intact
//   //ewArray = agentList;  //<-- does NOT work to make a copy

//   if(newArray.indexOf(agent) > -1){ 
//     //if search term is missing from array||string return -1
//   return `${agent} was found in agent list`
//   } else {
//     //agentList[agentList.length] = agent;
//     console.log('Agent was not found in the list... adding now:')
//     newArray.pop(); //removes 111
//     newArray.push(agent); //adds new ${agent}
//     newArray.splice(2,0,agent)  //splices ${agent} into index 2
//     console.log('else statment' , newArray);
//     return newArray
//   }
// }


// var agentList = ['001', '002', '003', '004', '005', true, false, 111]
// var agent = '007'
// console.log('before function call', agentList);
// console.log('at Function Call', isAnAgent(agentList, agent));
// console.log('after function call', agentList);








// function logNameReverse(nameStr) {
//   var reverseStr = nameStr.split('').reverse().join('');
//   console.log('My name backwards is: "' + reverseStr + '"');
// }

// logNameReverse('Now is the time for all good men');

//////////////////////////////////////////////


// function sayName(person) {
//   return "Hello, " + person.name.first + '!';
// }

// var batman = {
//   name : {
//     first : "Bruce",
//     last : "Wayne"
//   }
// }

// //console.log(sayName(batman));
// console.log(sayName("Bruce Wayne"));
// // var strBatman = "Bruce Wayne";
// // console.log(strBatman.name);

// function sayName(person) {
//   if (typeof person === 'string') {
//     console.log(person.split(' '))
//     var firstName = person.split(' ')[0];
//     return "Hello, " + firstName + "!";
//   }
//   return "Hello, " + person.name.first + '!';
// }

// // // errors - ____ is not a function

// var batman = {
//   name : {
//     first : "Bruce",
//     last : "Wayne"
//   },
//   split : "hi"
// }


// function sayName(person) {
//   var firstName = person.split(' ')[0];
//   return "Hello, " + firstName + "!";
// }

// console.log(sayName("Bruce Wayne"));
// console.log(sayName(batman));
// // console.log(batman.split);

// //input: person - either string with first and last name separated by a space or an obj with key name and value obj with keys first and last both with string values
// // output: greeting - string

// function sayName(person) {
//   if (typeof person === 'string') {
//     var firstName = person.split(' ')[0];
//     return "Hello, " + firstName + "!";
//   }
//   return "Hello, " + person.name.first + '!';
// }


















// function addATeam(reportTotals, team){
//   //if (reportTotals === 0);
//   if (reportTotals === undefined){
//   console.log('No object to work with : UNDEFINED');
//   console.log('TYPEOF', typeof reportTotals)
//   } else {
//   console.log('else do nothing');
//   }
// };





// var reportTotals = {
//   a_team: 12,
//   b_team: 34,
//   c_team: 56,
//   d_team: 78
// }
// var emptyObj = {};

// console.log(reportTotals)
// console.log(addATeam(emptyObj));





// function addOdds(numArray) {
//   //implement this function
//   var index = 0;
//   sum = 0;
//   while (index < numArray.length){
    
//     if (numArray[index] % 2 === 1){
//       console.log(numArray[index])
//       sum += numArray[index];
//       //console.log(sum)
//       return sum;

//     } 
//     index ++;
    
//   }
//   return sum;
// }

// var numbersToAdd = [1, 11, 20, 21, 30];
// addOdds(addOdds);
// console.log(numbersToAdd)






// // function indexesOnly(arr) {
// //   //implement this function
// //   //console.log(arr)
// //   //newArr = [];
// //   //sum = 0;
// //   console.log("Arr length", arr.length)
// //   for (i = 0; i < arr.length; i++){
// //      if(arr[i] !== undefined){
       
// //       arr[i] = i;
// //       //arr[i] = sum
// //       //sum += 1
// //      }

// //     }
// // return arr;
       
// // }

// function indexesOnly(arr) {
//   index = 0;
//   while(index < arr.length){
//     arr[index] = index;
//     index ++;
//   }
//   return arr;
// }


// test = ['a', 'b', 'c', 10, true, 3, 2, 2, 2, 2, 2]
// console.log("original", test)
// console.log(indexesOnly(test));
// console.log('test after function', test)


/////////////////

// function sayFavoriteFood(person, food) {
//   //implement this function
//   var obj = {
//     "name" : person,
//     'favoriteFood' : food
//   }
//   return person = `'${obj["name"] }'s favorite food is ${obj['favoriteFood']}'`
    

  
// }
// var person = {};
// console.log(sayFavoriteFood("Kevin", "tacos"));


// function myLaptopInfo(obj) {
//   //implement this function
//   var obj={
//     type : "Macbook Air",
//     color : '',
//     yearPurchased : '',
//   }
// return obj
// }

// console.log(myLaptopInfo);











// function indexesOnly(arr) {
//   //implement this function
//   console.log(arr)
//   newArr = [];
//   sum = 0;
//   console.log("Arr length", arr.length)
//   for (i = 0; i < arr.length; i++){
//      if(arr[i] !== undefined){
       
//       newArr[i] = sum
//       sum += 1
//      }

//     }
// return newArr;
       
// }









// function reassignAProperty(object, key, newValue) {
//   // reassign the property's value in the object, located at the key, to the newValue parameter
//   // return the input object
//   console.log('newValue is ', object);
//   return object[key] = newValue;
// }



// var resultObject = reassignAProperty({name: 'Ramses', favoriteFood: 'chicken', type: 'dog'}, 'favoriteFood', 'goose');
// console.log('should replace "chicken" with "goose":', resultObject);










// function computeSumOfAllElements(numbers){
//   if(numbers.length === 0){
//      return alert('Rock and Roll');
//   };
  
//   let sum = 0;
//   for (var i = 0; i < numbers.length; i ++){
//     //var result += numbers[i];
//    sum += numbers[i] 
//   }
  
//   return sum;
//   }
//   var result1 = computeSumOfAllElements([1, 2, 3]);
//   console.log('should log 6:', result1);  










// //Toy Problem Solving Recipe

// // Write a function collectionConverter that takes an object or an array and returns a new collection in a different format (object to array or array to object).

// //input array should have strings at even indexes ... every other item will become object.keys
// //input array should have an even number of elements (lets just assume this to make things easy)
// //input: collection - either array(even number of elements) or an Object
// //output: array if input is object
// //output: object if input is array


// function collectionConverter(collection){
//   //if the collection is an array true
//   if(Array.isArray(collection)){
//     //convert to obj
//     var converted = convertToObj(collection);
      
//   } else {
//     //if not, convert to array
//     var converted = convertToArr(collection);
//   }
// return converted;
// //return the converted value

// }

// //convert to obj
// //input: array
// //output: object
// function convertToObj(arr){
//  //create object
//  var obj = {};
//  //loop through the array by twos
//  for (var i = 0; i < arr.length; i+=2){
//     //add key and value to object
//     var key = arr[i];
//     var value = arr[i+1];
//     obj[key] = value;
//  }
//  //return object
//  return obj;
// }

// //convert to array
// //input : obj
// //output: arr

// function convertToArr(obj){
//  //create arr
//  var arr = [];
//  //loop through my obj
//  for (var key in obj){
//    //push key and value to array
//    var value = obj[key];
//     //push key and value to array
//    arr.push(key, value);

//  };
//   return arr;
//  //return arr

// }

// var arrZoo = ['zebra', 4, 'rhino', true, 'monkeys', 'many', 'tiger', 'siberian'];

// var objZoo = {
//  zebra: 4,
//  rhino: true,
//  monkeys: 'many',
//  tiger: 'siberian'
// }

// console.log(convertToArr(objZoo)); //['zebra', 4, 'rhino', true, 'monkeys', 'many', 'tiger', 'siberian']

// console.log(convertToObj(arrZoo)); // { zebra: 4, rhino: true, monkeys: 'many', tiger: 'siberian'}

// console.log(collectionConverter(arrZoo)); // { zebra: 4, rhino: true, monkeys: 'many', tiger: 'siberian'}

// console.log(collectionConverter(objZoo)); // ['zebra', 4, 'rhino', true, 'monkeys', 'many', 'tiger', 'siberian']



// [
//   'zebra',   4,
//   'rhino',   true,
//   'monkeys', 'many',
//   'tiger',   'siberian'
// ]
// { zebra: 4, rhino: true, monkeys: 'many', tiger: 'siberian' }
// { zebra: 4, rhino: true, monkeys: 'many', tiger: 'siberian' }
// [
//   'zebra',   4,
//   'rhino',   true,
//   'monkeys', 'many',
//   'tiger',   'siberian'