// var twoSum = function(nums, target) {

//   for (let i = 0; i < nums.length; i++ ) {
//     let counter = i + 1
//     while( counter !== nums.length) {
//       if (nums[i] + nums[counter] === target) {
//         return [i, counter]
//       }
//       counter++
//     }
//   }
// return null
// };

//target - current number = required number
// store all the results in hash map
// check to see if requried number is in hash map
// if it is, current index and index stored in has map
// answer is key, index is value

// var twoSum = function(nums, target) {
//   debugger
//   let cache = {}
//   let shouldSkip = false;
//   var result = []

// nums.forEach((num1, index) => {
//     if (shouldSkip) return;

//     var num2 = target - num1

//     if (num2 in cache) {
//       shouldSkip = true
//       result = [index, cache[num2]]
//     }
//     cache[num1] = index
//   });
//   return result
// }


var twoSum = function(nums, target) {
  while(nums) {
    var idx1 = nums.length - 1
    var num1 = nums[idx1]
    var num2 = target - num1
    nums.pop()

    let idx2 = nums.indexOf(num2)
    if( idx2 > -1 ) {
      return [idx1, idx2]
    }
  }
  return null
}



/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
*/

let nums = [3, 3]
let target = 6

console.log(twoSum(nums, target))

