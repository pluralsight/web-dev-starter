//digital roots
//sum up all digits in number until only single number remains

function digitalRoot (num) {
    var accSum = 0;
    numArr = num.toString().split('').map(Number)
    
    while (num > 9){
      num = 0
      for(let i = 0; i < numArr.length; i++){     
        num += numArr[i]
      }
      numArr = num.toString().split('').map(Number)
    }
  return num 
  }
  
  
  console.log(digitalRoot(555)) // 5
  


function digital_root(n){
    n = JSON.stringify(n)
    while(n > 9){
        var total = 0;
        for(var i = 0; i < n.length; i++){
            total += Number(n[i]);

        }
        n = JSON.stringify(total)
    }
return parseInt(n)
}

console.log(digital_root(455))