function happinessNumber (str){
    str = str.split('')
    accSum = 0;
    
    for(let i = 0; i < str.length; i++){
      console.log(str[i], str[i+1])
      if(str[i] === ':' && str[i+1] === ')' || str[i] === '(' && str[i+1] === ':'){
        accSum++
      } else if(str[i] === ')' && str[i+1] === ':' || str[i] === ':' && str[i+1] === '('){
        accSum--
      }      
    }
  return accSum
  }
  
  console.log(happinessNumber(":):("))// ➞ -1
  
  console.log(happinessNumber("(:)"))// ➞ 2
  
  console.log(happinessNumber("::::"))// ➞ 0
  