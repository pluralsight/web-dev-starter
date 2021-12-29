function detectOutlierValue(string) {
  var oddArr = []
  var evenArr = []
  var arr = string.split(' ')

  for (let i = 0; i < arr.length; i++){
    if (arr[i] % 2 === 0){
      evenArr = evenArr.concat(parseInt(arr[i]))
    } else {
      oddArr = oddArr.concat(parseInt(arr[i]))
    }
    arr[i] = Number(arr[i])
  }
    
  if (evenArr.length > oddArr.length){
    return arr.indexOf(oddArr[0]) + 1
  } else {
    return arr.indexOf(evenArr[0]) + 1
  }


}


console.log(detectOutlierValue("2 4 7 8 10")); // => 3 - Third number is odd, while the rest of the numbers are even
console.log(detectOutlierValue("1 10 1 1"));  //=> 2 - Second number is even, while the rest of the numbers are odd
