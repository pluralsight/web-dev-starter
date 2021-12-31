


var currentInventory = [
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

function listAllLaceShoes (inventory){
  //I array of objects
  //O array of objects
  


}

function indexValue (string) {
  var index = 0;

  var stArr = string.split(' ')

  for (let i = 0; i < stArr.length; i++){
    if(stArr.indexOf('lace') !== -1){
      return stArr.indexOf('lace')
    }
  }

}

console 
//console.log(listAllLaceShoes(currentInventory))





var expectedResult = [
  {
    "nameWords": [
      "tasselled",
      "black",
      "low-top",
      "lace-up"
    ],
    "targetWordIndex": 3
  },
  {
    "nameWords": [
      "tasselled",
      "green",
      "low-top",
      "lace-up"
    ],
    "targetWordIndex": 3
  },
  {
    "nameWords": [
      "red",
      "leather",
      "laced",
      "sneakers"
    ],
    "targetWordIndex": 2
  },
  {
    "nameWords": [
      "black",
      "leather",
      "laced",
      "sneakers"
    ],
    "targetWordIndex": 2
  }
];














// //removeElement eductional exercise - Remove all lucky 7s
// function removeElement (arr, target) {

//   var mySet = new Set()



//   var garbage = []
//   while(arr.indexOf(target) !== -1) {
//     var i = arr.indexOf(target);
//     garbage.push(arr.splice(i, 1)[0]);
//   }
// console.log(garbage)
// return arr;
// }



// console.log(removeElement([1, 3, 5, 7, 9, 7, 4, 2, 1, 7, 7, 5], 7))






// function fun (array) {
//   var accArr = [];

//   // while(array.length !== 0){
//   //   //accArr = accArr.concat(array.splice(array.length-1,1))


    
//   // }

//   for(let i = 0; i < array.length; i++){
//     //accArr.push(array.splice(0,1)[0])
//     accArr = accArr.concat(array.splice(array.length - 1,1))
//     i--
//   }
// return accArr;
// }

// console.log(fun([22, 23, 24, 25, 26]))



