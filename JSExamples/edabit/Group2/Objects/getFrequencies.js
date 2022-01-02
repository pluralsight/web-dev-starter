function getFrequencies(arr){
    accObj = {};
    //iterate array
      //if value is undefined in object
        //add current key to object
        //set to 1
      //otherwise its in object already
        //add 1 to value at current key
  
    //return accObj
  
    for (let i = 0; i < arr.length; i++){
      if(accObj[arr[i]] === undefined){
        accObj[arr[i]] = 1;
      } else {
        accObj[arr[i]]++
      }
    }
  return accObj
  }
  
  console.log(getFrequencies(["A", "B", "A", "A", "A"]))// ➞ { A: 4, B: 1 }
  
  console.log(getFrequencies([1, 2, 3, 3, 2]))// ➞ { "1": 1, "2": 2, "3": 2 }
  
  console.log(getFrequencies([true, false, true, false, false]))// ➞ { true: 2, false: 3 }
  
  console.log(getFrequencies([]))// ➞ {}
  
  