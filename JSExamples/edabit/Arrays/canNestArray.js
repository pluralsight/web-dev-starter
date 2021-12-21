/*
Create a function that returns true if the first array can be nested inside the second.

arr1 can be nested inside arr2 if:

    arr1's min is greater than arr2's min.
    arr1's max is less than arr2's max.

Examples

canNest([1, 2, 3, 4], [0, 6]) ➞ true

canNest([3, 1], [4, 0]) ➞ true

canNest([9, 9, 8], [8, 9]) ➞ false

canNest([1, 2, 3, 4], [2, 3]) ➞ false

Notes

Note the strict inequality (see example #3)
*/
function canNest(arr1, arr2) {
    //find smaller value of array
    //compare with arr1
      //if not less than number
        //false
    //otherwise
      //compare other number of array
        //compare with arr1
          //if not more than any number
            //false
    //otherwise
     //true
     var a = arr2[0];
     var b = arr2[1]
     if(a < b) {
         a = arr2[1]
         b = arr2[0]
       } else {
           a = arr2[0]
           b = arr2[1]
       }
       

     for (var i = 0; i < arr1.length; i++) {
         if(a <= arr1[i] || b >= arr1[i]) {
            return false;
         } else {
             continue;
         }
     }
     return true
}

// var nestArray = [0, 6]
// var testArray = [1, 2, 3, 4]
// console.log(canNest(testArray, nestArray))


var nestArray1 = [8, 10]
var testArray1 = [9, 9, 8]
console.log(canNest(testArray1, nestArray1))
