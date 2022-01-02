function numInStr (arr) {
    var accArr = []
    //iterate through array
    //check if current value is Integer
    for(let word of arr){
      if(numChecker(word)){
        accArr.push(word)
      }
    }
  return accArr
  }
  
  function numChecker (str) {
    strArr = str.split('');
  
    for(let letter of strArr){
      if(Number.isInteger(parseInt(letter))){
        return str
      }
    } 
  }
  
  
  console.log(numInStr(["1a", "a", "2b", "b"]))// ➞ ["1a", "2b"]
  
  console.log(numInStr(["abc", "abc10"]))// ➞ ["abc10"]
  
  console.log(numInStr(["abc", "ab10c", "a10bc", "bcd"]))// ➞ ["ab10c", "a10bc"]
  
  console.log(numInStr(["this is a test", "test1"]))// ➞ ["test1"]
  