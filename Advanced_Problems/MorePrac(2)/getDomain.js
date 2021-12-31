/*
Write a function that when given a URL as a string, parses out just 
the domain name and returns it as a string. For example:

Input1: "http://github.com/carbonfive/raygun  " Output1: "github"

Input2: "http://www.zombie-bites.com  " Output2: "zombie-bites"

Input3: "https://www.cnet.com  " Output3: "cnet"
*/

function getDomain (str){
    var arrOfLetters = str.split('')
    if(str.indexOf('https://') !== -1){
      arrOfLetters.splice(0,8)
    }
    if(str.indexOf('http://') !== -1) {
      arrOfLetters.splice(0,7)
    }
    if(str.indexOf('www.') !== -1) {
      arrOfLetters.splice(0,4)
    }
    if(arrOfLetters.join('').indexOf('.') !== -1){
        arrOfLetters.splice(arrOfLetters.join('').indexOf('.'))
      }
  return arrOfLetters.join('');
}

var result = getDomain("http://github.com/carbonfive/raygun")
console.log(result);

var result2 = getDomain('http://www.zombie-bites.com')
console.log(result2)

var result3 = getDomain("http://google.co.j")
console.log(result3)

var result4 = getDomain('xakep.ru')
console.log(result4)
