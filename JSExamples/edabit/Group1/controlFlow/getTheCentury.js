/*
Create a function that takes in a year and returns the correct 
century.
Examples

century(1756) ➞ "18th century"

century(1555) ➞ "16th century"

century(1000) ➞ "10th century"

century(1001) ➞ "11th century"

century(2005) ➞ "21st century"

Notes

    All years will be between 1000 and 2010.
    The 11th century is between 1001 and 1100.
    The 18th century is between 1701-1800.
*/

function century(num) {
    var accStr = '';
  
  var centuryObj = {
    "10th century" : 1000,
    "11th century" : 1100,
    "12th century" : 1200,
    "13th century" : 1300,
    "14th century" : 1400,
    "15th century" : 1500,
    "16th century" : 1600,
    "17th century" : 1700,
    "18th century" : 1800,
    "19th century" : 1900,
    "20th century" : 2000,
    "21th century" : 2100
  }
  
  for(var keys in centuryObj) {
    if (num <= centuryObj[keys]){
      accStr += keys;
      break;
    }
    }
  return accStr
  }
  
  console.log(century(1756))// ➞ "18th century"
  
  console.log(century(1555))// ➞ "16th century"
  
  console.log(century(1000))// ➞ "10th century"
  
  console.log(century(1001))// ➞ "11th century"
  
  console.log(century(2005))// ➞ "21st century"
  