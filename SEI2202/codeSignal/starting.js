

function solution (inp) {
  //debugger

  var each = []
  var acc = []
  var counter = 0

  for (var i = 0; i < inp[0].length; i++) {
    for (var j = 0; j < inp.length; j++) {
      each = each.concat(inp[j][i])
    }
  acc.push(each)
  each = []
  }

  for (var k = 0; k < acc.length; k++) {
    for (var l = 0; l < acc[k].length; l++) {
      if (acc[k][l] !== 0 ) {
        counter += acc[k][l]
      } else {
        break
      }
    }
  }


  return counter
}

//var hotel = [[0,1,1,2],[0,5,0,0],[2,0,3,3]]
//console.log(solution(hotel))




function solutionnnnn(inp) {
  debugger
  //set up a counter variable
  //counter the number of times next num is less than current
  //if greater than one
  //return false
  var counter = 0;

  for (var i = 0; i < inp.length; i++) {

    if( inp[i+1] > inp[i]) {
      if ( inp[i+2] <= inp[i]) {
        counter ++
        inp.splice(i+2, 1)

      }
    } if ( inp[i+1] <= inp[i]) {
      counter ++
    }
  }
  return counter > 1 ? false : true

}

//console.log(solution([1, 2, 3, 4, 3, 6]))  //true
//console.log(solution([1, 3, 2, 1]))  //false
//console.log(solution([1, 2, 1, 2]))
//console.log(solution([1, 1, 2, 3, 4, 4]))  //false
//console.log(solution([10, 1, 2, 3, 4, 5])) //true
//console.log(solution([40, 50, 60, 10, 20, 30]))  //false
//sequence = [1, 3, 2, 1] false








// function solution(inp) {
//   //debugger
// inp.sort(function(a,b) {return a - b})
// console.log(inp)
// var total = 0
// for (var i = 0; i < inp.length; i++) {
//     if (Math.abs(inp[i+1] - inp[i]) > 1 ) {
//     total += Math.abs(inp[i+1] - inp[i]) - 1

//     }
// }
// return total

// }

// console.log(solution([6, 2, 3, 8]))
