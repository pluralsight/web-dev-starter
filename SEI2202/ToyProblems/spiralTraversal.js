/*
 * Write a function that accepts a 2-dimensional array (that is, an array containing many same-length arrays),
 * and prints out every value found, but in a spiral from the upper left in to the center
 * Please write some form of specs, tests, or assertions for your code, and check as many edge cases as you can think of
 *
 * example:

    spiralTraversal([
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ]);

    returns [1, 2, 3, 6, 9, 8, 7, 4, 5]
 */

    var spiralTraversal = function(matrix) {



      // Create empty array of arrays called accArr
      // Create a counter varaible
      // As long as (start column <= end column) AND (start row <= end row)
        // Loop from start column to end column
          // At accArr[start_row][i] assign counter variable
          // Increment counter
        // Increment start row
        // Loop from start row to end row
          // At accArr[i][end_column] assign counter variable
          // Increment counter
        // Decrement end row
        // ...repeat for other two sides
/*
           start         end
           col = 0       col = 2
        [   1      2      3   ]   start row = 0
        [   4      5      6   ]
        [   7      8      9   ]   end row = 2
*/

        var accArr = []
        var counter = 1;

        //starting first loop
        //as long as i < matrix[0].length

        for (let i = 0, i < matrix[0].length; i++) {
          accArr.push(matrix[0][i])
        }





    };
