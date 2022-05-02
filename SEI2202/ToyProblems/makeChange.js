

















/*

In England the currency is made up of pound, £, and pence, p, and there are eight coins in general circulation:

1p piece
2p piece
5p piece
10p piece
20p piece
50p piece
£1 (100p)
£2 (200p)

It is possible to make £2 in the following way:

1 * £1 + 1 * 50p + 2 * 20p + 1 * 5p + 1 * 2p + 3 * 1p
How many different ways can £2 be made using any number of coins?

example usage of `makeChange`:

// aka, there's only one way to make 1p. that's with a single 1p piece
makeChange(1) === 1
// aka, there's only two ways to make 2p. that's with two, 1p pieces or with a single 2p piece
makeChange(2) === 2
*/
var makeChange = function (total) {


  var coins = [1,2,5,10,20,50,100,200]
  counter = 0;

  var recursion = (sum, idx) => {
    if (sum === total) {
      counter++;
    }
    if(sum <= total) {
      for (var i=idx; i<coins.length; i++) {
        recursion(coins[i] + sum, i)
      }
    }
  }

  recursion(0, 0)
  return counter;

  }

  console.log(makeChange(200))



// var makeChange = function(total) {

//   var coinMap = {
//     '£1' : 100,
//     '50p': 50,
//     '20p': 20,
//     '10p': 10,
//     '5p' : 5,
//     '2p' : 2,
//     '1p' : 1
//   }
//   //make an empty array... need someplace to store results
//   //iterate, create a loop to find all possible combinations
//    //lets look into empty base cases
//    var change = []
// //debugger
//    if (total === 0) {
//     return null
//   }
//   //ok, lets set up simple cases
//   if (total === 1) {
//     return '1p';
//       }


//   for (var key in coinMap){
//     while (total >= coinMap[key]) {
//       change.push(key);
//       total -= coinMap[key];
//     }
//   }

//   var result = {}
//   for (var i = 0; i < change.length; i++ ){
//     result[change[i]] = result[change[i]] || 0
//     result[change[i]]++
//   }

//   var cn = ''

//   for (var coin in result) {

//     cn += ` ${result[coin]} * ${coin} +`
//   }
// return cn.slice(0,-1).trim();

// }
// console.log(makeChange(45))