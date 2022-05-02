/**
 * Write a function that takes a number as its argument and
 * returns a string that represents that number's simplified fraction.
 *
 * Example: toFraction(0.5) === '1/2'
 *
 * Whole numbers and mixed fractions should be returned as irregular fractions
 *
 * Example: toFraction(3.0) === '3/1'
 *
 * Example: toFraction(2.5) === '5/2'
 *
 */

 var toFraction = function(number) {
  //place the decimal number over its place value
  //0.6 would become 6/10
debugger
  let numArr = number.toString().split('.')


  let frontHalf = +numArr[0]
  let backHalf = numArr[1]


  if(backHalf !== undefined) {
    let divisor = backHalf.length * 10;

    for (var i = Math.max(backHalf, divisor); i > 1; i--) {
      if((backHalf % i == 0) && (divisor % i == 0)) {
        backHalf /= i;
        divisor /= i;
      }
    }
    if(frontHalf === 0 ) {
      return `${backHalf}/${divisor}`
    }
    var backResult = `${backHalf}/${divisor}`
  }

  if ( divisor !== undefined) {
    frontHalf = frontHalf * divisor
    return `${frontHalf + backHalf}/${divisor}`
  }


console.log(frontHalf)
console.log(backHalf)
console.log(backResult)

};
//console.log(toFraction(1.0))

