//I object
//O arry of keys with values of 500 or more

function products (obj){
    var accArr = []
    
    //iterate over object keys
      //if value is > 500
      //push key into array
    //return array
    
    for(let keys in obj){
      if(obj[keys] > 500){
        accArr.push(keys)
      }
    }
  return accArr
  }
  
  
  console.log(products({"Computer" : 600, "TV" : 800, "Radio" : 50}))// ➞ ["TV","Computer"]
  
  console.log(products({"Bike1" : 510, "Bike2" : 401, "Bike3" : 501}))// ➞ ["Bike1", "Bike3"]) 
  
  console.log(products({"Loafers" : 50, "Vans" : 10, "Crocs" : 20}))// ➞ []
  
  