/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */
 function isBadVersion(ver) {
  if ( ver < bad ) {
    return false
  } else {
    return true
  }
}

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
 var solution = function(isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */

  return function(n) {
    debugger

    if ( n === 1 ) {
      if ( isBadVersion(1) ) {
        return 1;
      }
      return n + 1
    }

    let min = 1;
    let max = n;
    let mid = Math.floor((max + min) / 2 );

    while(min <= max ) {
      if ( !isBadVersion(mid) ) {
        min = mid + 1;
      } else {
        max = mid - 1;
      }
      mid = Math.floor( (max + min) / 2 );
    }
    return mid + 1
  };
};

bad = 4
let doesthiswork = solution()
doesthiswork(5)



/*
You are a product manager and currently leading a team to develop a new product. Unfortunately, the latest version of your product fails the quality check. Since each version is developed based on the previous version, all the versions after a bad version are also bad.

Suppose you have n versions [1, 2, ..., n] and you want to find out the first bad one, which causes all the following ones to be bad.

You are given an API bool isBadVersion(version) which returns whether version is bad. Implement a function to find the first bad version. You should minimize the number of calls to the API.



Example 1:

Input: n = 5, bad = 4
Output: 4
Explanation:
call isBadVersion(3) -> false
call isBadVersion(5) -> true
call isBadVersion(4) -> true
Then 4 is the first bad version.
Example 2:

Input: n = 1, bad = 1
Output: 1
*/
