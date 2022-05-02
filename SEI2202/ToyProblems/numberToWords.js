/**
* Extend the Number prototype with a new method called `toEnglish`.
* It should return the number as a string using English words.
* Examples:
*   (7).toEnglish(); // > "seven"
*   (575).toEnglish(); // > "five hundred seventy-five"
*   (78193512).toEnglish(); // > "seventy-eight million one hundred ninety-three thousand five hundred twelve"
*
* Extra credit: Make your function support decimals.
* Example:
*   (150043.273).toEnglish() // > "one hundred fifty thousand forty-three and two hundred seventy three thousandths"
*
 */

var numbersToWords = {
  0: 'zero',
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'fifteen',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eighteen',
  19: 'nineteen',
  20: 'twenty',
  30: 'thirty',
  40: 'forty',
  50: 'fifty',
  60: 'sixty',
  70: 'seventy',
  80: 'eighty',
  90: 'ninety',
};
var numbersToPlace = {
  10: 'ten',
  100: 'hundred',
  1000: 'thousand',
  1000000: 'million',
  1000000000: 'billion',
  1000000000000: 'trillion',
  1000000000000000: 'quadrillion',
  1000000000000000000: 'quintillion',
};

Number.prototype.toEnglish = function () {

  // return my value as english words
  var helper = {
    1: 1,
    2: 10,
    3: 100,
    4: 1000,
    5: 10000,
    6: 100000,
    7: 1000000,
  }

  //build an array of places
  var per = helper[this.toString().length]
  var accArr = []
  var num = this;
  for (let i = 0; i < this.toString().length ; i++ ) {
    accArr.push(this.toString()[i] * per)
    per = per / 10
  }
  console.log('accArr', accArr)

  var placeArr = []
  for ( let j = 0; j< accArr.length; j++ ) {
    placeArr.push(accArr[j]/accArr[j].toString()[0])
  }
  console.log('placeArr', placeArr)

  var a = '';
  for (let k = 0; k < accArr.length; k++ ) {
     if(accArr[k] >= 10000) {
      a += numbersToWords[accArr[k].toString()[0]] + ' ' + numbersToPlace[placeArr[k]] + ' '
    }
    else if(accArr[k] >= 1000) {
      a += numbersToWords[accArr[k].toString()[0]] + ' ' + numbersToPlace[placeArr[k]] + ' '
    }
    else if(accArr[k] >= 100) {
      a += numbersToWords[accArr[k].toString()[0]] + ' ' + numbersToPlace[placeArr[k]] + ' '
    }
    else if (accArr[k] >= 20){
      a += numbersToWords[accArr[k]] + ' '
    }
    else if (accArr[k] < 20) {
      a += numbersToWords[accArr[k]]
    }
  }
  console.log( a)



  //build up an answer string in variable
  let ans = ''
  var arr = []

  //if number is bigger than 20, break it down
  if (this > 20 && this < 100){
    var second = this % 10
    var first = this - second
    arr = arr.concat(first, second)
  }

  for (let i = 0; i < arr.length; i++) {
    for( let key in numbersToWords) {
      if(key == arr[i]) {
        console.log(numbersToWords[key])
        ans += numbersToWords[key] + ' '
      }
    }
  }
  console.log(ans)

};
