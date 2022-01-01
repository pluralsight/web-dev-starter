function indexShuffle(str) {
    var alp = '00abcdefghijklmnopqrstuvwxyz';
    str = str.split('')
    evenArr = [];
    oddArr = [];
  
    while (str.length > 0) {
      if(alp.indexOf(str[0]) % 2 === 0){
        evenArr.push(str[0])
        str.splice(0,1)
      } else {
        oddArr.push(str[0])
        str.splice(0,1)
      }
    }
  
  console.log(evenArr.concat(oddArr).join(''))
      
  }
  
  
  indexShuffle("abcd")// ➞ "acbd"
  // "ac" (even-indexed) + "bd" (odd-indexed)
  
  indexShuffle("abcdefg")// ➞ "acegbdf"
  
  indexShuffle("holiday")// ➞ "hldyoia"
  
  indexShuffle("maybe")// ➞ "myeab"
  
  