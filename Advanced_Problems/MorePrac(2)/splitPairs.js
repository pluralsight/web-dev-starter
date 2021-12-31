function splitPairs (string) {
    var accArr = [];
    var spArr = string.split('')
  
    while (spArr.length > 0) {
      if(spArr.length % 2 === 0){
      accArr.push(spArr[0] + spArr[1])
      spArr.splice(0,2)
      } else {
        if (spArr[1] === undefined){
          accArr.push(spArr[0] + '_')
          spArr.splice(0,1)
        } else {
          accArr.push(spArr[0] + spArr[1])
          spArr.splice(0,2)
        }
      }
  
  
    }  
  return accArr;
  }
  
  
  
  
  
  
  
  
  var input = 'iamastring' // even
  //output: ['ia', 'ma', 'st', 'ri', 'ng'] //even
  var input2 = 'notstring' // odd
  //output: ['no', 'ts', 'tr', 'in', 'g_'] // odd
  console.log(splitPairs(input))
  console.log(splitPairs(input2))
  