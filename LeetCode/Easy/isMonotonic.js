/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var isMonotonicOrig = function(nums) {

   const sortNums = nums.slice()
   if ( nums[0] < nums[nums.length - 1]) {
     sortNums.sort((a,b) => a - b)
    } else {
      sortNums.sort((a,b) => a + b)
    }

   for (let i = 0; i < nums.length; i++ ) {
     if ( nums[i] !== sortNums[i] ) {
       return false
     }
   }
return true

};

var isMonotonic = function (nums) {
  if ( nums[0] > nums[nums.length - 1] ) {
    nums = nums.reverse()
  }
  for (let i = 0; i < nums.length - 1; i++ ) {
    if ( nums[i] > nums[i + 1] ) {
      return false
    }
  }
return true
}

nums = [4,4,3,2, 1]
isMonotonic(nums)
module.exports = isMonotonic