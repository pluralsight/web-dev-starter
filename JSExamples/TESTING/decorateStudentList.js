// FUNCTION DEFINITION(S)

// USE THIS FUNCTION TO GENERATE A RANDOM NUMBER
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  function decorateClassListWithAges(classList) {
    // creates an object for each string in the input array, with an age of 10 or 11
    // returns an array of these objects
    // use push function to build up array of objects
    // iterate through the array of names, pairing up a name to a number using getRandomIntInclusive
    var newClassArray = [];
    
    for (var i = 0; i < classList.length; i++){
      var studentObject = {
      name: classList[i],
      age: getRandomIntInclusive(10, 17)
      }
       console.log('studentObject', studentObject)
      newClassArray.push(studentObject);
      
    }
    //console.log('newClassArray', newClassArray)
  return newClassArray;
  }
  
  // ASSERTION FUNCTION(S) TO BE USED
  // check to see if age for each name is between 10 and 11
  // if not, failed
  
  // TESTS CASES
  function assertWithinRange (low, high, actual){
    if (low <= actual && high >= actual){
      return true;
    } else {
      return false;
    }
    //test function that takes in classList and classListWithAges
    //iterate over classList
  }
  
    function testDecorateStudentList(input, output){
      
      for (var i = 0; i < input.length; i++){
        if(input[i] !== output[i].name){
          console.log(`FAILED: Incorrect name at index ${i}`)
          return;
        }
      
        if (assertWithinRange(10,11,output[i].age) === false){
        //end the function and log failure message
        console.log(`FAILED: Incorrect age and index: ${i}`)
        return;
        }
      }
      console.log(`Passed`);
  
  }
  
  
  // Sample Input
  var classList = ["Joe", "Jack", "John", "Fred", "Frank", "Barry", "Larry", "Mary",
  "Harry", "Farrell", "Susan", "Monica", "Keira", "Caroline", "Harriet", "Erica",
  "Luann", "Cheryl", "Beth", "Rupa", "Linda", "Allison", "Nancy", "Dora"];
  
  var classListWithAges = decorateClassListWithAges(classList);
  testDecorateStudentList(classList, classListWithAges);
  console.log('hello')
  
  // // Sample Output
  // var classListWithAges = [{"name":"Joe","age":11},{"name":"Jack","age":10},
  // {"name":"John","age":11},{"name":"Fred","age":11},{"name":"Frank","age":11},
  // {"name":"Barry","age":11},{"name":"Larry","age":11},{"name":"Mary","age":11},
  // {"name":"Harry","age":11},{"name":"Farrell","age":10},{"name":"Susan","age":10},
  // {"name":"Monica","age":11},{"name":"Keira","age":10},{"name":"Caroline","age":10},
  // {"name":"Harriet","age":11},{"name":"Erica","age":11},{"name":"Luann","age":10},
  // {"name":"Cheryl","age":11},{"name":"Beth","age":10},{"name":"Rupa","age":11},
  // {"name":"Linda","age":10},{"name":"Allison","age":10},{"name":"Nancy","age":10},
  // {"name":"Dora","age":10}]
  
  //var result = decorateClassListWithAges (classList);
  //console.log(result);













//   002_decorateStudentList
// // FUNCTION DEFINITIONS
// function getRandomIntInclusive(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// function decorateClassListWithAges(classList) {

//   var decoratedClassList = [];

//   for (var i = 0; i < classList.length; i++) {
//     var studentObj = {
//       name: classList[i];
//       age: getRandomIntInclusive(10,11)
//     };
//     decoratedClassList.push(studentObj);
//   }
//   return decoratedClassList;
// }

// // ASSERTION FUNCTION(S) TO BE USED
// function assertWithinRange(low, high, actual) {
//     if(low <= actual && hight >= actual){
//         return true;
//     } else {
//         return false;
//     }
  
// }

// // TESTS FOR DECORATE STUDENT LIST
// function testDecorateStudentList() {
//   var classList = ["Joe", "Jack", "John", "Fred", "Frank", "Barry", "Larry", "Mary",
//   "Harry", "Farrell", "Susan", "Monica", "Keira", "Caroline", "Harriet", "Erica",
//   "Luann", "Cheryl", "Beth", "Rupa", "Linda", "Allison", "Nancy", "Dora"];

//   var decoratedList = decorateClassListWithAges(classList);

//   for (var i = 0; i < decoratedList.length; i++) {
//     assertWithinRange(10, 11, decorateList[i].age, 'renders all ages either 10 or 11');
//   }
// }