function cardHide(str) { 
    var accArr = [];
    str = str.split('');
    var four = str.slice(str.length -4)
    //console.log(str)
  
    for (let i = 0; i < str.length; i++){ 
      accArr.push('#');	
  }
  console.log(accArr.concat(four).join(''))
  }
  
  
  
  
  cardHide("1234123456785678")// ➞ "************5678"
  
  cardHide("8754456321113213")// ➞ "************3213"
  
  cardHide("35123413355523")// ➞ "**********5523"
  
  