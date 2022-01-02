function removeVowels(str) {
    accArr = []
    str = str.split('')
  
    var vowels = 'aeiou'
  
    while (str.length > 0 ){
      if(vowels.indexOf(str[0]) !== -1){
        str.splice(0,1)
      } else {
        accArr.push(str[0])
        str.splice(0,1)
      }
    }
    
  console.log(accArr.join(''))
    
  
  }
  
  
  
  
  
  
  removeVowels("I have never seen a thin person drinking Diet Coke.")
  ////➞ " hv nvr sn  thn prsn drnkng Dt Ck."
  
  removeVowels("We're gonna build a wall!")
  //➞ "W'r gnn bld  wll!"
  
  removeVowels("Happy Thanksgiving to all--even the haters and losers!")
  //➞ "Hppy Thnksgvng t ll--vn th htrs nd lsrs!"
  
  