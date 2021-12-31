// function generateLaceDetails(inventory) {
//   var laced = [];
//   for (var i = 0; i < inventory.length; i++) {
//       for (var j = 0; j < inventory[i].shoes.length; j++) {
//           var curShoe = inventory[i].shoes[j];
//           if (curShoe.name.includes('lace') || curShoe.name.includes('laced')) {
//               laced.push({
//                   'nameWords': curShoe.name.split(' ')
//               });
//           }
//       }
//   }
//   for (var i = 0; i < laced.length; i++) {
//       laced[i]['targetWordIndex'] = laced[i].nameWords.findIndex(findMe);
//     }
//   return laced;
// }
// function findMe(word) {
//   return word.includes('lace');
// }

function generateLaceDetails(inventory) {
    // debugger;
    var shoeArr = [];
    for (var i = 0; i < inventory.length; i++) {
        for (var j = 0; j < inventory[i].shoes.length; j++) {
            var curShoe = inventory[i].shoes[j];
            if (curShoe.name.includes('lace')) {
                shoeArr.push({
                    'nameWords': curShoe.name.split(' ')
                    'targetWordIndex' : findIndex(word)
                });
            }
        }
    }
    for (var k = 0; k < shoeArr.length; k++) {
        shoeArr[k]['targetWordIndex'] = shoeArr[k].nameWords.findIndex((word) => {
            return word.includes('lace');
        });
    }
    return shoeArr;
  }
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
  var result = generateLaceDetails(currentInventory);
  console.log(result)
  
  