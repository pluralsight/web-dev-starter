//case one
//case two

//check if current inp is greater than recursive input
//if recursive answer is greater than current input
//return recursive answer,
//else if current input is greater, return curr Input


var findHighest = function (inp) {
  console.log(inp)



  if (inp.length === 0) {
    return []
  }

  var recRes = findHighest(inp.slice(1))
  if (inp[0] > recRes) {
    return inp[0];
  } else {
    return recRes;
  }

}

//console.log(findHighest([1, 2]))
console.log(findHighest([0, 12, 4, 87]))



var findHighest = function (inp, curLarge = 0) {

  if (inp.length === 0) {
    return curLarge;
  }

  for (var i = 0; i < inp.length; i++) {
    if (inp[0] > curLarge) {
      return findHighest(inp.slice(1), inp[0])
    } else {
      return findHighest(inp.slice(1), curLarge)
    }
  }
  return curLarge

}

console.log(findHighest([0, 12, 4, 87]))
  //console.log(findHighest([0, 12, 4, 87, 34]))