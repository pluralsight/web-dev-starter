function isPositiveDominant(a){

 
    arr = [...new Set(arr)]
  negArr = []
  posArr = []
  
  for(let i = 0; i < arr.length; i++){
    if(arr[i] === 0){
      arr = arr.splice(i)
    }
    if(arr[i] > 0){
      posArr.push(arr[i])
    } else {
      negArr.push(arr[i])
    }
  }
  if (posArr[0] === undefined || posArr[0] === null){
    return false
  }
  if (negArr[0] === undefined || negArr[0] === null){
    return true
  }
  return (posArr.length > negArr.length)
}


//  const isPositiveDominant = a =>
//  [...new Set(a)].filter(x => x > 0).length >
//  [...new Set(a)].filter(x => x < 0).length;


var result = isPositiveDominant([1, 1, 1, 1, -3, -4])// ➞ false
// There is only 1 unique positive value (1).
// There are 2 unique negative values (-3, -4).
console.log(result)

var result = isPositiveDominant([5, 99, 832, -3, -4])// ➞ true
console.log(result)

var result = isPositiveDominant([5, 0])// ➞ true
console.log(result)

var result = isPositiveDominant([0, -4, -1])// ➞ false
console.log(result)

var result = isPositiveDominant([1, 0, 0, -1])// ➞ false
console.log(result)
