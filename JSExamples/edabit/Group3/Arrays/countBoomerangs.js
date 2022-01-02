function countBoomerangs (arr) {

    //iterate array
      //slice next three digits
        //if isBoom
          //increase sum
    var accSum = 0;
  
    for(let i = 0; i < arr.length - 2; i++){
      var slice = arr.slice(i,i + 3)
      if(isBoom(slice)){
        accSum++
      }
    }  
  return accSum;
  }
  
  function isBoom(arr) {
    //return true if boomer
    //otherwise, false
    console.log('isBoom', arr)
    if(arr[0] === arr[2]){
      if(arr[0] !== arr[1]){
        return true
      } else {
        return false;
      }
    }  
  return false
  }
  
  console.log(countBoomerangs([9, 5, 9, 5, 1, 1, 1]))// ➞ 2
  
  console.log(countBoomerangs([5, 6, 6, 7, 6, 3, 9]))// ➞ 1
  
  console.log(countBoomerangs([4, 4, 4, 9, 9, 9, 9]))// ➞ 0
  