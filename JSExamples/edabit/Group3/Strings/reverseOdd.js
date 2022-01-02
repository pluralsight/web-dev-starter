function reverseOdd(str){
    //split str into array of words
    //iterate array
      //if word.length is odd
        //current word split reverse join
    //return join array
    
    str = str.split(' ');
    
    for(let i = 0; i < str.length; i++){
      if(str[i].length % 2 === 1){
        str[i] = str[i].split('').reverse().join('')
      }
    }
  return str.join(' ')
  }
  
  console.log(reverseOdd("Bananas"))// ➞ "sananaB"
  
  console.log(reverseOdd("One two three four"))// ➞ "enO owt eerht four"
  
  console.log(reverseOdd("Make sure uoy only esrever sdrow of ddo length"))
  //➞ "Make sure you only reverse words of odd length"