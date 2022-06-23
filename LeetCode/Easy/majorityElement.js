/**
 * @param {number[]} nums
 * @return {number}
 */
 var majorityElement = function(nums) {
  debugger
  //build a hash map
  let max = 0;
  let key = ''
  let hash = {};

  for (let i = 0; i < nums.length; i++ ) {
    hash[nums[i]] = (hash[nums[i]] || 0) + 1
  }

  for ( let key in hash ) {
    if (hash[key] > max) {
      max = hash[key]
      maj = key
    }
  }
    return max
};


nums = [3,2,3]
// Output: 3


//nums = [2,2,1,1,1,2,2]
majorityElement(nums)
//Output: 2
