/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function(nums) {
  let max = -Infinity
  let sum = 0

  for ( let i = 0; i < nums.length; i++ ) {
    debugger
    sum += nums[i]
    if ( sum > max ) {
      max = sum
    }
    if ( sum < 0 ) {
      sum = 0
    }
  }
  return max
 }

//multiple pointers?
//currentMax in current loop
//is currentMax > max
//replace max with currentMax


nums = [-2,1,-3,4,-1,2,1,-5,4]
//nums = [-1]
//Output: 6
//Explanation: [4,-1,2,1] has the largest sum = 6.

console.log(maxSubArray(nums))
