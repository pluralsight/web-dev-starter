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

