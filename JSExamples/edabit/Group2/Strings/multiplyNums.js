// function multiplyNums(str){
//   var accSum = 1;
//   str = str.split(', ').map(Number)

//   for(let i = 0; i< str.length; i++){
//     accSum *= str[i]
//   }
// return accSum
// }

function multiplyNums(str){
    return str.split(', ').map(Number).reduce((previousValue, currentValue) => previousValue * currentValue)
  }
  
  
  
  console.log(multiplyNums("2, 3"))// ➞ 6
  
  console.log(multiplyNums("1, 2, 3, 4"))// ➞ 24
  
  console.log(multiplyNums("54, 75, 453, 0"))// ➞ 0
  
  console.log(multiplyNums("10, -2"))// ➞ -20
  