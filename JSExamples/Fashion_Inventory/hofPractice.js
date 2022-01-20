//https://stackoverflow.com/questions/32139773/sum-array-of-arrays-matrix-vertically-efficiently-elegantly

const x = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
];

const a = x.map((y) => y.reduce((a, b) => a + b));
const b = x.reduce((a, b) => a.map((v, i) => v + b[i]));
const c = x.flat().reduce((a , b) => a + b)

console.log('a', a);
console.log('b', b);
console.log('c', c);

console.log('Summing horizontally: '  + JSON.stringify(a));
console.log('Summing vertically: ' + JSON.stringify(b));
console.log('Summing whole array: ' + JSON.stringify(c));


var Inv = [
  {
    name: 'Brunello Cucinelli',
    shoes: [
      {name: 'tasselled black low-top lace-up', price: 1000},
      {name: 'tasselled green low-top lace-up', price: 1100},
      {name: 'plain beige suede moccasin', price: 950},
      {name: 'plain olive suede moccasin', price: 1050}
    ]
  },
  {
    name: 'Gucci',
    shoes: [
      {name: 'red leather laced sneakers', price: 800},
      {name: 'black leather laced sneakers', price: 900}
    ]
  }
];




const shoeArray = Inv.map(function (x) {return x.shoes.map(function (y) {return y.price})})
console.log(shoeArray)
/*
(2) [Array(4), Array(2)]
0: (4) [1000, 1100, 950, 1050]
1: (2) [800, 900]
*/

const sumShoe = Inv.map(function (x) {return x.shoes.map(function (y) {return y.price})}).map(function (b) {return b.reduce(function (memo, a) {return memo + a})/b.length})
console.log(sumShoe)
/*
(2) [1025, 850]
0: 1025
1: 850
*/
