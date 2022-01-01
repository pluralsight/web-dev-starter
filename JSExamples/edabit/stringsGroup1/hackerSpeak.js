/*
In order to work properly, the function should replace all "a"s 
with 4, "e"s with 3, "i"s with 1, "o"s with 0, and "s"s with 5.
*/

function hackerSpeak(str) {
    var accArr = [];
    str = str.split('');
  
    while(str.length > 0){
      if(str[0] === 'a'){
        accArr.push('4')
        str.splice(0,1)
      } else if (str[0] === 'e'){
        accArr.push('3')
        str.splice(0,1)
      } else if (str[0] === 'i'){
        accArr.push('1')
        str.splice(0,1)
      } else if (str[0] === 'o'){
        accArr.push('0')
        str.splice(0,1)
      } else if (str[0] === 's'){
        accArr.push('5')
        str.splice(0,1)
      } else {
        accArr.push(str[0])
        str.splice(0,1)
      }
    }
    console.log(accArr.join(''))
  }
  
  hackerSpeak("javascript is cool")// ➞ "j4v45cr1pt 15 c00l"
  
  hackerSpeak("programming is fun")// ➞ "pr0gr4mm1ng 15 fun"
  
  hackerSpeak("become a coder")// ➞ "b3c0m3 4 c0d3r"
  