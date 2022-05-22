/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
 var nextGreaterElement = function(nums1, nums2) {
  debugger

 // nums1 is a subset of nums2
 // iterate across nums1
   // look for indexOf current num in the nums2 array
     // iterate across nums2 array starting at indexOf num1 in num2
       // if current number in nums2 is larger than nums1[i]
         // push into answer array
     //otherwise
       // push -1 into answer array

       const ans = []

       for (let i = 0; i < nums1.length; i++) {
         const idx = nums2.indexOf(nums1[i])
         for (let j = idx; j < nums2.length; j++ ) {
           if(nums2[j] > nums1[i]) {
             ans.push(nums2[j])
             break
           }
         }
         if (ans.length < i + 1) {
           ans.push(-1)
         }
       }
       return ans

};

//nums1 = [1,3,5,2,4]
//nums2 = [6,5,4,3,2,1,7]
//expected [7,7,7,7,7]
//nums1 = [2,4], nums2 = [1,2,3,4]
nums1 = [4,1,2], nums2 = [1,3,4,2]
console.log(nextGreaterElement(nums1, nums2))

/*
The next greater element of some element x in an array is the first greater element that is to the right of x in the same array.

You are given two distinct 0-indexed integer arrays nums1 and nums2, where nums1 is a subset of nums2.

For each 0 <= i < nums1.length, find the index j such that nums1[i] == nums2[j] and determine the next greater element of nums2[j] in nums2. If there is no next greater element, then the answer for this query is -1.

Return an array ans of length nums1.length such that ans[i] is the next greater element as described above.

Input: nums1 = [4,1,2], nums2 = [1,3,4,2]
Output: [-1,3,-1]
Explanation: The next greater element for each value of nums1 is as follows:
- 4 is underlined in nums2 = [1,3,4,2]. There is no next greater element, so the answer is -1.
- 1 is underlined in nums2 = [1,3,4,2]. The next greater element is 3.
- 2 is underlined in nums2 = [1,3,4,2]. There is no next greater element, so the answer is -1.


Input: nums1 = [2,4], nums2 = [1,2,3,4]
Output: [3,-1]
Explanation: The next greater element for each value of nums1 is as follows:
- 2 is underlined in nums2 = [1,2,3,4]. The next greater element is 3.
- 4 is underlined in nums2 = [1,2,3,4]. There is no next greater element, so the answer is -1.
*/
