function findSmallestIndex(array) {
    var smallestElement = array[0]; // Stores the smallest value
    var smallestIndex = 0; // Stores the index of the smallest value
  
    for (var i = 1; i < array.length; i++) {
      if (array[i] < smallestElement) {
        smallestElement = array[i];
        smallestIndex = i;
      }
    }
  
    return smallestIndex;
  }
  

  function sortArray (arr) {
    var accArr = [];
  
    //iterate through the array while statment
      //send array to helper function for index of smallest number
      //push or concat to accumulator array
      //delete from array
    //return accumulator array
  
    while(arr.length > 0){
      index = findSmallestElement(arr);
      accArr.push(arr[index])
      //accArr = accArr.concat(arr[index])
      arr.splice(index,1)
      //accArr.push(arr.splice(index, 1)[0])
    }
  return accArr;
  }
  
  // 2. Sort the array
//   function selectionSort(array) {
//     var sortedArray = [];
//     var length = array.length;
  
//     for (var i = 0; i < length; i++) {
//       // Finds the smallest element in the array 
//       var smallestIndex = findSmallestIndex(array);
//       // Adds the smallest element to new array
//       var valueAtIndex = array.splice(smallestIndex, 1)[0]
//       console.log(valueAtIndex);
//       //sortedArray.push(array.splice(smallestIndex, 1)[0]);
//       sortedArray = sortedArray.concat(valueAtIndex)
//     }
  
//     return sortedArray;
//   }
  
  console.log(selectionSort([5, 3, 6, 2, 10])); // [2, 3, 5, 6, 10]
