//only perfect score gets pushed into array

function whoPassed(obj){
    accArr = [];
    
    for(let keys in obj){
      if(isPerfectScore(obj[keys])){
        accArr.push(keys)
      }
    }  
  return accArr
  }
  
  
  function isPerfectScore (arr){
    var accArr = []
    for(let val of arr){
      val = val.split('/').map(Number)
      if(val[0] !== val[1]){
        return false
      }    
    }
  return true
  }
  var result = whoPassed({
    "John" : ["5/5", "50/50", "10/10", "10/10"],
    "Sarah" : ["4/8", "50/57", "7/10", "10/18"],
    "Adam" : ["8/10", "22/25", "3/5", "5/5"],
    "Barry" : ["3/3", "20/20"]
  })// ➞ ["Barry", "John"]
  console.log(result)
  var result1 = whoPassed({
    "Zara" : ["10/10"],
    "Kris" : ["30/30"],
    "Charlie" : ["100/100"],
    "Alex" : ["1/1"]
  })// ➞ ["Alex", "Charlie", "Kris", "Zara"]
  console.log(result1)
  var result3 = whoPassed({
    "Zach" : ["10/10", "2/4"],
    "Fred" : ["7/9", "2/3"]
  })// ➞ []
  console.log(result3)