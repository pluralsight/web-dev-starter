function chosenWine (arr){
    if(arr.length === 0){
      return null
    }
    if(arr.length === 1){
      return arr[0].name
    }
    
    //sort array by increasing value
    var accArr = []
    for(let keys of arr){
      accArr.push(keys.price)
    }
    for(let keys of arr){
      if(keys.price === frugalSort(accArr)){
        return keys.name
      }
    }
  }
  
  function frugalSort(arr){
    //find second lowest
    arr = arr.sort(function(a, b){return a-b});
    return arr[1]
  }
  
  var result = chosenWine([
    { name: "Wine A", price: 8.99 },
    { name: "Wine 32", price: 13.99 },
    { name: "Wine 9", price: 10.99 }
  ])// ➞ "Wine 9"
  console.log(result)
  
  var result2 = chosenWine([{ name: "Wine A", price: 8.99 }])// ➞ "Wine A"
  //console.log(result2)
  
  var result3 = chosenWine([])// ➞ null
  //console.log(result3)
  