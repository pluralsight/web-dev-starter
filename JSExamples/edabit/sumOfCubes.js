//I -array of numberes
//O - sum of cubes of numbers in array

// function sumOfCubes (arr) {
//   var accSum = 0;
  
//   while(arr.length > 0) {
//     accSum += arr[0] ** 3
//     arr.splice(0,1)
//   }
// return accSum
// }

function sumOfCubes (arr){
    var newArr = [];
    var accSum = 0;
    var reducer = (previousValue, currentValue) => previousValue + currentValue;
    //return arr.map(x => x**3).reduce(reducer)
    newArr = arr.map(x => x**3)
    console.log(newArr, arr)
    for(let i = 0; i < newArr.length; i++) {
      accSum += newArr[i]
    }
  return accSum;
  }
  
  
  
  
  
  console.log(sumOfCubes([1, 5, 9]))
  