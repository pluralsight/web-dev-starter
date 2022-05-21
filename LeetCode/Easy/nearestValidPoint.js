/**
 * @param {number} x
 * @param {number} y
 * @param {number[][]} points
 * @return {number}
 */


 var nearestValidPoint = function(x, y, points) {
  debugger

  // create smallest variable and index
  // iterate over the points
  // if ai === x OR bi === y
    //valid point
    //calc manhattan distance
    // abs(x - a[i]) + abs(y - b[i])
    // if result < smallest
      //result = smallest
      //index = i
  //return index

  let smallest = Infinity;
  let index = -1;

  for(let i = 0; i < points.length; i ++ ) {
    if ( points[i][0] === x || points[i][1] === y) {
      const result = Math.abs(x - points[i][0]) + Math.abs(y - points[i][1])
      if ( result < smallest ) {
        smallest = result
        index = i
      }
    }
  }
  return index
};

x=3;
y=4;
//points = [[1,2],[3,1],[2,4],[2,3],[4,4]]
points = [[3,4]]


console.log(nearestValidPoint(x, y, points))



/*
You are given two integers, x and y, which represent your current location on a Cartesian grid: (x, y). You are also given an array points where each points[i] = [ai, bi] represents that a point exists at (ai, bi). A point is valid if it shares the same x-coordinate or the same y-coordinate as your location.

Return the index (0-indexed) of the valid point with the smallest Manhattan distance from your current location. If there are multiple, return the valid point with the smallest index. If there are no valid points, return -1.

The Manhattan distance between two points (x1, y1) and (x2, y2) is abs(x1 - x2) + abs(y1 - y2)


Input: x = 3, y = 4, points = [[1,2],[3,1],[2,4],[2,3],[4,4]]
Output: 2
Explanation: Of all the points, only [3,1], [2,4] and [4,4] are valid. Of the valid points, [2,4] and [4,4] have the smallest Manhattan distance from your current location, with a distance of 1. [2,4] has the smallest index, so return 2.

Input: x = 3, y = 4, points = [[3,4]]
Output: 0
Explanation: The answer is allowed to be on the same location as your current location.
*/
