var canMakeArithmeticProgression = function(arr) {


  if ( arr.length < 2 ) {
    return false
  }

  let isProgress = true

  const result = arr.sort((a, b) => a - b)
  const diff = arr[1] - arr[0]

  for (let i = 0; i < result.length - 1; i++ ) {
    if( isProgress ) {
      if (result[i + 1] - result[i] !== diff){
        isProgress =  false
      }
    }
  }
  return isProgress
};


let rezzy = canMakeArithmeticProgression([3, 5, 1])
console.log(rezzy)
/*
A sequence of numbers is called an arithmetic progression if the difference between any two consecutive elements is the same.

Given an array of numbers arr, return true if the array can be rearranged to form an arithmetic progression. Otherwise, return false.

Input: arr = [3,5,1]
Output: true
Explanation: We can reorder the elements as [1,3,5] or [5,3,1] with differences 2 and -2 respectively, between each consecutive elements.

Input: arr = [1,2,4]
Output: false
Explanation: There is no way to reorder the elements to obtain an arithmetic progression.

2 <= arr.length <= 1000
-106 <= arr[i] <= 106

*/