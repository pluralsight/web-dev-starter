function listAllLaceShoes (inventory){
  //find all the 'laced' shoes in the inventory
  //input - inventory of shoes
  //output - array of objects where each object is a 'laced' shoe
    //each object will have 
      //'nameWords' with array of description words
      //'targetWordIndex' with index location of 'lace'
  
//Pseudocode
//create an empty master array variable
//create an empty object variable
var masterArray = [];


//iterate through upper inventory array
for (var i = 0; i < inventory.length; i ++){
//iterate through inner array at shoes
for (var j = 0; j < inventory[i].shoes.length; j++){
  //at key name in shoes object
    //split string and create array on the space
    var shoeArray = (inventory[i].shoes[j].name).split(' ')
  for(var k = 0; k < shoeArray.length; k++){
      if( shoeArray[k].indexOf('lace') !== -1){
          masterArray.push({
              'nameWords' : shoeArray,
              'targetWordIndex' : k
          })
          

      }

  }
    
    }

 }
 return masterArray;

}




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

  //var result = listAllLaceShoes(currentInventory);
  //console.log(result)

 // ASSERTION FUNCTION(S)
 function assertArraysEqual(actual, expected, testName) {
  var isLengthEqual = false;
  if (actual.length === expected.length) {
      isLengthEqual = true;
  } else {
      console.log(`FAILED [${testName}] Expected "${expected}", but got "${actual}"`);
  }
  var isEqual = true;
  for (var i = 0; i < actual.length; i++) {
      var stringA = JSON.stringify(actual[i]);
      var stringE = JSON.stringify(expected[i]);
      if (stringA !== stringE) {
          isEqual = false;
      }
  }
  if (isLengthEqual === true && isEqual === true) {
      console.log(`Passed [${testName}]`);
  } else {
      console.log(`FAILED [${testName}] Expected "${expected}", but got "${actual}"`);
  }
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

  var actual1 = listAllLaceShoes(currentInventory);
  assertArraysEqual(actual1, expectedResult, 'Should list nameWords and targetWordIndex in Array/Object format');

