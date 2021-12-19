//input: num1 - number, num2 - number
//output: lesserNum - number


function lesserNum(num1, num2) {
  //compare nums, return lesser
  //if equal return either
  if(num1 <= num2) {
     return num1;
  }
  return num2;
}

//input: either no input or any input
//output: either true or "Alright, MAYBE. Who's to say?"

//check if input exists
  //if yes return alrigh ...
 //otherwise return true

function isHotdogASandwich(input) {
  if (input !== undefined) {
    return "Alright, MAYBE. Who's to say?";
  }
  return true;
}

//input: subTotal - number
//output: total - number

//get tax
//get tip
// return sum of subTotal + tax + tip

function billTotal(subTotal) {
  //Do not worry about rounding to 2 decimal places
  var tax = subTotal * .09875;
  var tip = subTotal * .2;
  return subTotal + tax + tip;
}

// input: cost - number
// output: budgetMessage

//get over under, compare cost to budget
//get difference find absolute value of cost - 250
//return message with over/under and difference of cost and 250

function budgetStatus(cost) {
  if (cost <= 250) {
    var overUnder = "Under";
  } else {
    var overUnder = "Over";
  }
//   var diff = Math.abs(cost - 250);
  var diff = cost - 250;
  if (diff < 0) {
    diff = diff * -1;
  }
  return overUnder + " budget by " + diff + " dollars(s)";
}

// input: seconds - number
// output: converted - string


// get minutes
// get remaining seconds
//return converted string with minutes and seconds

function secondsConverter(seconds) {
  //If it is greater than 60 minutes, do not worry about converting it to hours.
  var minutes = Math.floor(seconds / 60);
  var remSeconds = seconds % 60;
  
  return minutes + " minutes and " + remSeconds + " seconds";
}

//input: arr - array at least one element
//output: arrInfo - string

//return arrInfo with length and last index

function arrayInfo(arr){
  return "Length: " + arr.length + ", index of last element: " + (arr.length - 1);
}

// input:wordBank - array of strings //You can assume the first letter of each string in the array is capitalized
// output: acronym - string

// make acronym empty string
// Get first letter of each word
  //iterate through the wordBank
    //concat first letter to acronym
// return collected letters
function acronymMaker(wordBank) {
  var acronym = "";
  for (var i = 0; i < wordBank.length; i++) {
    var word = wordBank[i];
    acronym += word[0];
  }
  return acronym;
}

// input: person - obj - city : string, state : string
// output: location - string

// return city and state separated by , 

function getCurrentLocation(person) {
  return person.city + ", " + person.state;
}

//input: numberArray - array of numbers, factor - number
//output: multiArr - array of numbers

//make multiArr a empty arr
//loop through numberArr
  //push to multiArr each num * factor
//return multiArr

function multiplyBy(numberArray, factor) {
  var multiArr = [];
  for(var i = 0; i < numberArray.length; i++) {
    var num = numberArray[i];
    multiArr.push(num * factor);
  }
  return multiArr;
}

//input: objectToCheck - obj
//output: no return - add to obj dataChecked : true, checkedBy : "Mario" 

//add both props to obj

function iValidatedThis(objectToCheck) {
  objectToCheck.dataChecked = true;
  objectToCheck.checkedBy = "Mario";
  return objectToCheck;
}

//Additional Challenges

//input:  letter - string, sentence - string
// output: count - number

// make a count var
// loop through sentence
  //check if current char is same as letter
    //increment count
// return count

function countInstancesOf(letter, sentence) {
  var count = 0
  for(var i = 0; i < sentence.length; i++) {
    var curr = sentence[i];
    if (letter === curr) {
      count++;
    }
  }
  return count;
}

//input: str - string
//output: titleCasedStr - string


// make titleCaseArr
// turn str into collection of words
//  loop through
  //make a title case version
    //get first char and upper case it
    //get all other chars and lowercase
    //push to titleCaseArr
// return titleCaseArr joined with a space
 


function titleCase(str) {
  var titleCaseArr = [];
  var words = str.split(" ");
  for (var i = 0; i < words.length; i++) {
    var word = words[i];
    var titleCaseWord = "";
    titleCaseWord += word[0].toUpperCase();
    titleCaseWord += word.slice(1).toLowerCase();
    titleCaseArr.push(titleCaseWord);
  }
  return titleCaseArr.join(" ");
    
}

//alternate titleCase solution
// input: str - string
// output: titleCaseStr - str

function titleCase(str) {
  var titleCaseStr = "";
  var previousCharIsSpace = false;
  //loop through str
  for (var i = 0; i < str.length; i++) {
    var curr = str[i];
    //either make uppercase or lowercase
    //rules - uppercase
    //first character, and each charater after a space
    if (i === 0) {
      titleCaseStr += curr.toUpperCase();
    } else if (previousCharIsSpace) {
      titleCaseStr += curr.toUpperCase();
    } else {
      titleCaseStr += curr.toLowerCase();
    }
    //lowercase all other characters
    if (curr === " ") {
      previousCharIsSpace = true;
    } else {
      previousCharIsSpace = false;
    }
  }
    
  return titleCaseStr;
}

//input: person - obj - name : obj -
                          //first : string,
                          //last : string
                      //birthDay : obj -
                          //month : string,
                          //day : number,
                          //year : number
//output: name+birthday - string

//get the first, last, month, day ,year
//return as part of string
function getNameAndBirthday(person) {
  var first = person.name.first;
  var last = person.name.last;
  var month = person.birthDay.month;
  var day = person.birthDay.day;
  var year = person.birthDay.year;
  return first + " " + last + ": " + month + " " + day + ", " + year;
}

//same as above but with title casing

function titleCase(str) {
  var titleCaseArr = [];
  var words = str.split(" ");
  for (var i = 0; i < words.length; i++) {
    var word = words[i];
    var titleCaseWord = "";
    titleCaseWord += word[0].toUpperCase();
    titleCaseWord += word.slice(1).toLowerCase();
    titleCaseArr.push(titleCaseWord);
  }
  return titleCaseArr.join(" ");
    
}

function getNameAndBirthday(person) {
  var first = person.name.first;
  var last = person.name.last;
  var month = person.birthDay.month;
  var day = person.birthDay.day;
  var year = person.birthDay.year;
  return first + " " + last + ": " + month + " " + day + ", " + year;
}

function renderInfoNeatly(person) {
  return titleCase(getNameAndBirthday(person));
}

//input: staff - array of person obj (see above), month - string
//output: peopleBornIn - array of birthday strings (see above)

//make peoplebornIn arr
//loop through staff
  //check if person's birthday month matchs target
    //push birthday string into peopleBornIn arr
// return peopleBornIn

function getNameAndBirthday(person) {
  var first = person.name.first;
  var last = person.name.last;
  var month = person.birthDay.month;
  var day = person.birthDay.day;
  var year = person.birthDay.year;
  return first + " " + last + ": " + month + " " + day + ", " + year;
}

function getPeopleBornIn(staff, month) {
  var peopleBornIn = [];
  for (var i = 0; i < staff.length; i++) {
    var person = staff[i];
    if (person.birthDay.month === month) {
      var birthdayStr = getNameAndBirthday(person);
      peopleBornIn.push(birthdayStr);
    }
  }
  return peopleBornIn;
}
