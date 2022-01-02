function uncensor (str, key){
    if(!key){
      return str
    }
    //insert splice of key at each match
    //create array of letters
    //iterate
      //if *
        //replace with splice of key
    //return array join('')
    str = str.split('')
    key = key.split('')
    var accArr = []
    
    for(let i = 0; i < str.length; i++){
    
      if(str[i] === '*'){
        str[i] = key.splice(0,1)[0]     
      } 
    }
  return str.join('')
  }
  
  
  var result = uncensor("Wh*r* d*d my v*w*ls g*?", "eeioeo")// ➞ "Where did my vowels go?"
  console.log(result)
  var result2 = uncensor("abcd", "")// ➞ "abcd"
  console.log(result2)
  var result3 = uncensor("*PP*RC*S*", "UEAE")// ➞ "UPPERCASE"
  console.log(result3)