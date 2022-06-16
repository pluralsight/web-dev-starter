/**
 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicates = function(nums) {
  newNums = Array.from(new Set(nums))

  for ( let i = 0; i < nums.length; i++ ) {
    if ( i < newNums.length ) {
    nums[i] = newNums[i]
  } else {
    nums[i] = '_'
  }
  }
  return newNums.length

};

removeDuplicates([0,0,1,1,1,2,2,3,3,4])

module.exports = removeDuplicates;