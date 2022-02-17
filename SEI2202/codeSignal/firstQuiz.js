
//iterate down word
  //find the index of the current letter
    //concat the next letter in map to variable
//return str


function alphaShift (inp) {

  var wordMap = '0abcdefghijklmnopqrstuvwxyza'
  var str = ''
  var ind

  //console.log(wordMap.indexOf('d'), wordMap[4+1])

  for (var i = 0; i < inp.length; i++) {
    ind = wordMap.indexOf(inp[i])
    str += wordMap[ind+1]
  }
return str
}
//console.log(alphaShift('crazy'))


//split the inp into an array on decimal
  //check each number range
    //if each number is in range
      //counter++
//if counter is greater than 4
  //return true//

function ipFour (inp) {
debugger
  var counter = 0

  inp = inp.split('.')
  //console.log(inp)

  if (inp[i] >= 0 && inp[i] <= 255 && inp[i] !== '' && inp[i] !== '00' $$ inp[i] !== '01') {
    counter++
  }
  if (inp[1] >= 0 && inp[0] <= 255 && inp[1] !== '') {
    counter++
  }
  if (inp[2] >= 0 && inp[0] <= 255) {
    counter++
  }
  if (inp[3] >= 0 && inp[0] <= 255 && inp[3] !== '') {
    counter++
  }

  // for (var i = 0; i < inp.length; i++) {
  //   console.log(Number(inp[i]))
  //   if (Number(inp[i]) >= 0 && Number(inp[i]) <= 255)
  //   counter++
  // }

return counter === 4

}

//console.log(ipFour('192.168.1.00'))
