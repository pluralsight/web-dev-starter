/*
Sum of Cubes

Create a function that takes in an array of numbers and returns the sum of its cubes.
Examples

sumOfCubes([1, 5, 9]) ➞ 855
// Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855

sumOfCubes([3, 4, 5]) ➞ 216

sumOfCubes([2]) ➞ 8

sumOfCubes([]) ➞ 0

Notes

If given an empty array, return 0.
*/

function sumOfCubes(nums) {
    accumulatorSum = 0;
    for (var i = 0; i < nums.length; i++) {
        accumulatorSum += (nums[i]**3)
        console.log(nums[i], nums[i]**3)
    }
	return accumulatorSum;
}






function assertEquals(actual, expected, testName) {
    if(actual === expected) {
        console.log(`Passed`);
    } else {
        console.log(`FAILED: ${testName} Expected ${expected} but got ${actual}`)
    }
}


var arr = [3, 4, 5]
actualTest = sumOfCubes(arr)
expectedTest = 216
assertEquals(actualTest, expectedTest, `should be the sum of all numbers cubed`)
