function checkout (arr) {
    accSum = 0;
  
    for(let i = 0; i < arr.length; i++){
      var price = arr[i].prc
      var quantity = arr[i].qty
      var isTax = arr[i].taxable
      accSum += (totalCost(price, quantity, isTax))
    }
  
  return accSum;
  }
  
  
  
  function totalCost(prc, qty, bool){
    //6% sales tax
    if(bool){
    return (prc * qty) * 1.06
    } else {
      return (prc * qty)
    }
  }
  
  
  
  var result = checkout([
    { desc: "potato chips", prc: 2, qty: 2, taxable: false },
    { desc: "soda", prc: 3, qty: 2, taxable: false },
    { desc: "paper plates", prc: 5, qty: 1, taxable: true }
  ])
  console.log(result)
  //➞ 15.3
  