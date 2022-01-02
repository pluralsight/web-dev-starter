function doubleSwap(str, c1, c2){
  
    str = str.split('')
    for(let i = 0; i < str.length; i++){
      if(str[i] === c1){
        str[i] = c2
      } else if(str[i] === c2){
        str[i] = c1
      }
    }
    
  return str.join('')
  }
  
  console.log(doubleSwap( "aabbccc", "a", "b"))// ➞ "bbaaccc"
  
  console.log(doubleSwap("random w#rds writt&n h&r&", "#", "&"))
  //➞ "random w&rds writt#n h#r#"
  
  console.log(doubleSwap("128 895 556 788 999", "8", "9"))
  //➞ "129 985 556 799 888"


  const doubleSwap = (str, a, b) =>
  str.replace(RegExp(`[${a + b}]`, 'g'), m => (m === a ? b : a))


 function doubleSwap(str, c1, c2) {
	return [...str].map((character) => {
		if (character === c1) return c2
		if (character === c2) return c1
		return character
	}).join('')
}

