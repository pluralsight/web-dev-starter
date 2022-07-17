/*
Given an array of integers, nums, each element in the array either appears once or twice. Return a list containing all the numbers that appear twice.
Note: Each element in nums is between one and nums.length (inclusive).

Ex: Given the following array nums…

nums = [2, 3, 1, 5, 5], return [5].
Ex: Given the following array nums…

nums = [1, 2, 3], return [].
Ex: Given the following array nums…

nums = [7, 2, 2, 3, 3, 4, 4], return [2,3,4].

*/

var duplicateNumbers = function (nums) {

  //hashmap buildout
  let obj = {}
  let result = []

  for ( let i = 0; i < nums.length; i++ ) {
    obj[nums[i]] = ( obj[nums[i]] || 0 ) + 1
  }

  for ( let num in obj ) {
    if ( obj[num] > 1 ) {
      result.push(num)
    }
  }
  return result

}

const test2 = [7, 2, 2, 3, 3, 4, 4]
//const test1 = [2, 3, 1, 5, 5]
console.log(duplicateNumbers(test2))
