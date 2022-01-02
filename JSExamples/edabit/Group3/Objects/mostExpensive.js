function mostExpensive (obj){
    var mostExpItem = '';
    var mostExpNum = 0;
    
    for(let keys in obj){
      if(obj[keys] > mostExpNum){
        mostExpNum = obj[keys]
        mostExpItem = keys
      }
    }
  return `The most expensive one is the ${mostExpItem}`
  }
  
  
  var result = mostExpensive ({
    "Diamond Earrings": 980,
    "Gold Watch": 250,
    "Pearl Necklace": 4650
  })// ➞  "The most expensive one is the Pearl Necklace"
  console.log(result)
  var result2 = mostExpensive({
    "Silver Bracelet": 280,
    "Gemstone Earrings": 180,
    "Diamond Ring": 3500
  })// ➞ "The most expensive one is the Diamond Ring"
  console.log(result2)