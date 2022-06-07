/**
 * @param {number[]} nums
 * @return {boolean}
 */
//  var containsDuplicate = function(nums) {

//   for ( let i = 0; i < nums.length; i++ ) {
//     if ( nums.lastIndexOf(nums[i]) !== i ) {
//       return true
//     }
//   }
//   return false

// };

var containsDuplicate = function(nums) {
 newNums = new Set(nums)
return !(newNums.size === nums.length)
};


nums = [1, 2, 3, 1]
console.log(containsDuplicate(nums))

module.exports = containsDuplicate

/*
Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

Input: nums = [1,2,3,1]
Output: true

Input: nums = [1,2,3,4]
Output: false

Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true

Constraints:

1 <= nums.length <= 105
-109 <= nums[i] <= 109

*/