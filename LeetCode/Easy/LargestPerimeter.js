var largestPerimeter = function(nums) {
  debugger
  if (nums < 3) {
    return 0
  }
  nums.sort((a, b) => b - a)
  let largest = 0
  for (let i = 0; i < nums.length - 2; i++ ){
    let current = [nums[i], nums[i+1], nums[i+2]]
    if ( current[2] + current[1] > current[0] ) {
      return current.reduce((a,b) => a + b)
    }
  }
  return 0
};


nums = [3,6,2,3] //expected 8
//nums = [3,2,3,4]
console.log(largestPerimeter(nums))

/*
Given an integer array nums, return the largest perimeter of a triangle with a non-zero area, formed from three of these lengths. If it is impossible to form any triangle of a non-zero area, return 0.

The triangle inequality states that the sum of the lengths of any two sides of a triangle is greater than the length of the remaining side. It follows from the fact that a straight line is the shortest path between two points. The inequality is strict if the triangle is non-degenerate (meaning it has a non-zero area).

Input: nums = [2,1,2]
Output: 5

Input: nums = [1,2,1]
Output: 0

*/