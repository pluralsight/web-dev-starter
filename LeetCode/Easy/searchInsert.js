/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var searchInsert = function(nums, target) {
   if ( target > nums[nums.length - 1] ) {
     return nums.length
   }
   if ( target < nums[0] ) {
     return 0
   }

   let min = 0;
   let max = nums.length
   let middle = Math.floor( (max + min) / 2)

   while ( target !== nums[middle] ) {

    if ( nums[middle] === target || target > nums[middle] && target < nums[middle + 1]) {
      return middle + 1
    }

    if ( target > nums[middle - 1] && target < nums[middle] ) {
      return middle
    }

    if ( target < nums[middle] ) {
      max = middle;
      middle = Math.floor( ( max + min ) / 2 )
      continue
    }

    if (target > nums[middle] ) {
      min = middle
      middle = Math.ceil ( (max + min) / 2 )
    }
   }
   return middle

};

nums = [1, 3, 5], target = 4
//nums = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130], target = 20
searchInsert(nums, target)
//Output: 2

// O(log N) complexity
// efficient search algo
// 1 <= nums.length <= 104
// -104 <= nums[i] <= 104
// nums contains distinct values sorted in ascending order.
// -104 <= target <= 104

module.exports = searchInsert;