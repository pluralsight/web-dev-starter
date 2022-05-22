/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
 var checkStraightLine = function(coordinates) {
  debugger
 coordinates.sort((a, b) => a[1] - b[1])

  let isStraight = true

  let Xdiff = (coordinates[1][0]-coordinates[0][0])
  let Ydiff = (coordinates[1][1]-coordinates[0][1])
  let slope = Ydiff/Xdiff

  for ( let i = 2; i < coordinates.length; i++ ) {

    let curXDiff = (coordinates[i][0] - coordinates[0][0])
    let curYDiff = (coordinates[i][1] - coordinates[0][1])
    const currentSlope = curYDiff/curXDiff
    if (currentSlope !== slope) {
      isStraight = false
      break;
    }
  }
  return isStraight
};


coordinates = [[2,4],[2,5],[2,8]] //true
//coordinates = [[2,1],[4,2],[6,3]] //true
//coordinates = [[0,0],[0,1],[0,-1]] //true
//coordinates = [[1,1],[2,2],[2,0]] //false
//coordinates = [[1,1],[2,2],[3,4],[4,5],[5,6],[7,7]]
//coordinates = [[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]]
console.log(checkStraightLine(coordinates))


/*
Input: coordinates = [[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]]
Output: true

Input: coordinates = [[1,1],[2,2],[3,4],[4,5],[5,6],[7,7]]
Output: false

2 <= coordinates.length <= 1000
coordinates[i].length == 2
-10^4 <= coordinates[i][0], coordinates[i][1] <= 10^4
coordinates contains no duplicate point.


You are given an array coordinates, coordinates[i] = [x, y], where [x, y] represents the coordinate of a point. Check if these points make a straight line in the XY plane.
*
