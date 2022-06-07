/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */

 var matrixReshape = function(mat, r, c) {
  debugger
 //check to make sure it is legal
 // array length * individual array equals r * c
 if ( mat.length * mat[0].length !== r * c ) {
   return mat
 }

 //flatten out array so we can iterate down all nums
 mat = mat.flat()

 let crawler = 0; //mat walker
 let accArr = []; // accumulator bucket

 //set up crawler variable
 //set up accArr

 for (let i = 0; i < r; i++ ) {
   accArr.push([]) //create a new bucket @ each row
   for (let j = 0; j < c; j++ ) {
     //fill up each row bucket by column number
     accArr[i].push(mat[crawler])
     crawler++
   }
 }

 // iterate from 0 to r
   // each row gets its own bucket

   //iterate from 0 to c
     // walk down flatten array
     // deposit number into bucket
     return  accArr;


};

mat = [[1,2],[3,4]], r = 4, c = 1
matrixReshape(mat, r, c)


/*
In MATLAB, there is a handy function called reshape which can reshape an m x n matrix into a new one with a different size r x c keeping its original data.

You are given an m x n matrix mat and two integers r and c representing the number of rows and the number of columns of the wanted reshaped matrix.

The reshaped matrix should be filled with all the elements of the original matrix in the same row-traversing order as they were.

If the reshape operation with given parameters is possible and legal, output the new reshaped matrix; Otherwise, output the original matrix.

Input: mat = [[1,2],[3,4]], r = 1, c = 4
Output: [[1,2,3,4]]

Input: mat = [[1,2],[3,4]], r = 2, c = 4
Output: [[1,2],[3,4]]

[1, 2, 3]
[4, 5, 6]
c can be 1, 3, 6
r can be 1, 3, 6

[1, 2, 3, 4, 5, 6]
r can be 1, 3, 6
r can be 1, 3, 6

[1, 2, 3, 4, 5]
r can be 1, 5
c can be 1, 5

*/

