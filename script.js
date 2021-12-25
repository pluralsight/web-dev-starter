function sumOfDigits(num) {
  if (num === 0) {
      return 0;
  }
  return num % 10 + sumOfDigits(Math.floor(num / 10));
}
console.log(sumOfDigits(432))




// function computeSummationToN(n) {
//   if(n === 0){
//       return 0;
//   } else {
//       return computeSummationToN(n-1) + n
//   }
//  }

//  var output = computeSummationToN(7);
// console.log(output); // --> 21

// function (computeSummationToN(n)){

// }