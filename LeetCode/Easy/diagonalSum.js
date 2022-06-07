/**
 * @param {number[][]} mat
 * @return {number}
 */
 var diagonalSum = function(mat) {

  let adjLength = mat.length - 1
  let sum = 0;

  for (let i = 0; i < mat.length; i++ ) {
    if ( i === adjLength - i) {
      sum += mat[i][i]
    } else {
      sum += mat[i][i] + mat[i][adjLength - i] //+ mat[adjLength - i][i] + mat[adjLength - i][adjLength - i]
    }
  }
return sum
};


//mat = [[1,2,3],[4,5,6],[7,8,9]] //25
//mat = [[1,1,1,1],[1,1,1,1],[1,1,1,1],[1,1,1,1]] //8
mat = [[5]] //5
console.log(diagonalSum(mat))

/*
Given a square matrix mat, return the sum of the matrix diagonals.

Only include the sum of all the elements on the primary diagonal and all the elements on the secondary diagonal that are not part of the primary diagonal.

Input: mat = [[1,2,3],
              [4,5,6],
              [7,8,9]]
Output: 25
Explanation: Diagonals sum: 1 + 5 + 9 + 3 + 7 = 25
Notice that element mat[1][1] = 5 is counted only once.

Input: mat = [[1,1,1,1],
              [1,1,1,1],
              [1,1,1,1],
              [1,1,1,1]]
Output: 8

Input: mat = [[5]]
Output: 5

*/






const ayy = (arr) => {
  const accArr = []
  for (let i = 0; i < arr.length; i++ ) {
    console.log(arr[i], arr[(arr.length - 1 )- i])
    if ( arr[i] === arr[(arr.length - 1) - i] ) {
      accArr.push([arr[i]])
    } else {
      accArr.push([arr[i], arr[(arr.length - 1 ) - i]])
    }
  }
  console.log(accArr)
}



//ayy([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11])
