function countVowels(str) {
  //aeiou
	accSum = 0;
  str = str.toLowerCase()
  console.log(str)
  var vowels = 'aeiou'

  for(let i = 0; i < str.length; i++) {
    if(vowels.indexOf(str[i]) !== -1){
      accSum++
      
    }
  }
console.log(accSum)
}





countVowels("Celebration")// ➞ 5

countVowels("Palm")// ➞ 1

countVowels("Prediction")// ➞ 4
