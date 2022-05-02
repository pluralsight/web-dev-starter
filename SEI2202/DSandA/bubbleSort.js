var bubbleSort = function(arr) {
  //debugger
  // Your code here.
  //start looping from with a variable called i the end of the array towards the begining
  //Start an inner loop with a variable called j from the beginning until i - 1
  //if arr[j] is greater than arr[j + 1]
    //swap those two values
  //return the sorted array
  for (var i = arr.length; i > 0; i--) {
    for (var j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j+1]) {
        swap(arr, j, j + 1)
      }
    }


  }
  return arr;


};

var swap = function (arr, idx1, idx2) {
  var temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}

var res = bubbleSort([37, 45, 29, 8, 14, 40])
console.log(res)

//[37, 45, 29, 8]
//[37, 29, 8, 45]








//CodeWars problem
function sortByLength (array) {

  for (i = array.length; i > 0; i-- ) {
    for (j = 0; j < i -1; j++ ) {
      if (array[j].length > array[j+1].length) {
        swap (array, j)
      }

    }
  }
return array
};

function swap (arr, indx) {
  var temp = arr[indx]
  arr[indx] = arr[indx + 1]
  arr[indx + 1] = temp
}





var res = sortByLength(["Beg", "Life", "I", "To"])//,["I", "To", "Beg", "Life"])
console.log(res)

