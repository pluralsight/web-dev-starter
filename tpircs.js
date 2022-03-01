/*
* Write a function that generates every sequence of throws a single
* player could throw over a three-round game of rock-paper-scissors.
*
* Your output should look something like:
*   ["RRR",
*    "RRP",
*    "RRS",
*    "RPR",
*    ...etc...
*   ]
*
* Extra credit:
*   - Make your function return answers for any number of rounds.
*
* Example:
* rockPaperScissors(5); // => ['RRRRR', 'RRRRP', 'RRRRS', etc...]
*
*/


var rockPaperScissors = function () {

var accArr = [];
var rps = ['R', 'P', 'S']
  for ( var i = 0; i < 3; i++ ) {
    for (var j = 0; j < 3; j++ ) {
      for (var k = 0; k < 3; k++ ) {

        accArr.push(`${rps[i]}${rps[j]}${rps[k]}`)
      }
    }
  }
  return accArr;

};



//Extra Credit Work
/*
var rockPaperScissors = function (n) {

  var str = ''

  for ( i = 0; i < n; i++ ) {
    str += "R"
  }
  console.log(str)

var rps = ['R', 'P', 'S']
var accArr = [];

for ( var i = str.length -1; i > 0; i-- ) {
  for (var j = 0; j < rps.length; j++ ) {
    for (var k = 0; k < rps.length; k++ ) {

      accArr.push()
    }
  }
}
}
*/


//console.log(rockPaperScissors(5))




















// //parent class Nut
// class Nut {
//   constructor(color, type) {
//     this.color = color;
//     this.type = type;
//   }
//   favNutType() {
//     return `Are ${this.type}s your favorite type of nut?`;
//   }
//   sayHello() {
//     return `Hello, I am a ${this.type}!`;
//   }
// }
// //now the subclass Almond
// class Almond extends Nut {
//   constructor(color, type, shape) {
//     super(color, type);
//     this.shape = shape;
//   }
//   favNutType() {
//     return `The ${this.type} looks like a ${this.shape}.`;
//   }
// }
// const peeledAlmond = new Almond('white', 'almond', 'teardrop');
// console.log(peeledAlmond.constructor);//Function, Almond constructor
// console.log(peeledAlmond.sayHello());  //'Hello, I am a almond!'
// console.log(peeledAlmond.favNutType());  //'The almond looks like a    teardrop.'
