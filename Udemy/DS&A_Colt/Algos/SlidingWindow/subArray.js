
let ssubArray = function (arr, s) {
  debugger

  let sum = 0
  let res = []

  for ( let i = 0; i < arr.length; i++ ) {
    sum = 0;
    for ( let j = i; j < arr.length; j++ ) {
      sum += arr[j]
      if ( sum === s ) {
        res.push(i + 1, j + 1)
        return res
      }
      if ( sum > s ) break;
    }

  }
return -1
}

let subArray = function (arr, s, n) {
  debugger

  let sum
  let j
  let res = []

  for ( let i = 0; i < arr.length; i++ ) {
    sum = arr[i]
    j = i + 1

    while ( j <= n ) {

      if( sum === s ) {
        return [i+1, j]
      }
      if ( sum > s || j === n ) {
        break
      }

      sum += arr[j]
      j++
    }

  }
  return -1
}

//const input = [1,2,3,4,5,6,7,8,9,10]
//const input = [1, 2, 3, 7, 5]
//const s = 15
//const n = 10
//console.log(subArray(input, s, n))
/*
Input:
N = 10, S = 15
A[] = {1,2,3,4,5,6,7,8,9,10}
Output: 1 5
Explanation: The sum of elements
from 1st position to 5th position
is 15.
*/