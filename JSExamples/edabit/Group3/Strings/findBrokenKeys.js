function findBrokenKeys(str1, str2){
    var arr1 = str1.split('') 
    var arr2 = str2.split('')
    var accArr = [];
    if(arr1.length !== arr2.length){
      return `FAIL : uneven lengths`
    }
    for(let i = 0; i < arr1.length; i++){
      if(arr1[i] !== arr2[i]){
        accArr.push(arr1[i])      
      }
    }
  accArr = accArr.join('')
  //const newSet = new Set('pp')
    //= new Set(accArr.join(''))
    
  return [...new Set(accArr)]
  
  }
  console.log(findBrokenKeys("happy birthday", "hawwy birthday"))// ➞ ["p"]
  
  var result = findBrokenKeys("starry night", "starrq light")// ➞ ["y", "n"]
  console.log(result)
  console.log(findBrokenKeys("beethoven", "affthoif5"))// ➞ ["b", "e", "v", "n"]