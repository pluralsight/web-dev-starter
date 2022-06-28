
let minJump = function(arr, n) {
  debugger
  let count = 0
  let i = 0
  while ( i < n - 1 ) {
    i += arr[i]
    count ++
    if ( arr[i] === 0 ) {
      return -1
    }
  }
  return count
}


//const input = [1, 3, 5, 8, 9, 2, 6, 7, 6, 8, 9]
//const n = 11

const n = 10
const input = [2, 3, 1, 1, 2, 4, 2, 0, 1, 1]
//4

//const input = [1, 4, 3, 2, 6, 7]
//const n = 6
console.log(minJump(input, n))
/*
Input:
N = 11
arr[] = {1, 3, 5, 8, 9, 2, 6, 7, 6, 8, 9}
Output: 3
Explanation:
First jump from 1st element to 2nd
element with value 3. Now, from here
we jump to 5th element with value 9,
and from here we will jump to the last.
*/