function getTotalPrice(arr){
    accSum = 0;
    //iterate over array
      //accSum += amount from helper function
  
    //return accSum
    for (let key of arr){
      accSum += totalPrice(key.quantity, key.price)
    }
  return accSum.toFixed(1)
  }
  
  function totalPrice (qty, price){
    return qty * price
  }
  
  
  var result = getTotalPrice([
    { product: "Chocolate", quantity: 1, price: 0.10 },
    { product: "Lollipop", quantity: 1, price: 0.20 }
  ])// ➞ 0.3
  /*
  var result = getTotalPrice([
    { product: "Milk", quantity: 1, price: 1.50 },
    { product: "Eggs", quantity: 12, price: 0.10 },
    { product: "Bread", quantity: 2, price: 1.60 },
    { product: "Cheese", quantity: 1, price: 4.50 }
  ])// ➞ 10.4
  */
  console.log(result)
  
  