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
var individualLaceObject = {};


//iterate through upper inventory array
for (var i = 0; i < inventory.length; i ++){
  //iterate through inner array at shoes
  for (var j = 0; j < inventory[i].shoes.length; j++){
    //at key name in shoes object
    //console.log(inventory[i].shoes[j].name)
      //split string and create array on the space
      var shoeArray = (inventory[i].shoes[j].name).split(' ')
      console.log('shoeArray', shoeArray)
    for(var k = 0; k < shoeArray.length; k++){
        if( shoeArray[k].indexOf('lace') !== -1){
            console.log('shoeArray[k]', shoeArray[k], 'indexOf Lace', k)
            individualLaceObject = {
                'nameWords' : shoeArray,
                'targetWordIndex' : k
            }
            masterArray.push(individualLaceObject)



        }


    }
      //if index of lace in shoeArray is not equal to -1
      
        //get index of 'lace' and store in variable
       
        //object = object @ nameWords key and targetWordIndex
        //set 'nameWords' =  word array into empty object
        //set 'targetWordIndex' =  'lace' index into empty object
        //push object into master array variable
        
        //clear variable for next iteration
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

  var result = listAllLaceShoes(currentInventory);
  console.log(result)

//   var expectedResult = [
//     {
//       "nameWords": [
//         "tasselled",
//         "black",
//         "low-top",
//         "lace-up"
//       ],
//       "targetWordIndex": 3
//     },
//     {
//       "nameWords": [
//         "tasselled",
//         "green",
//         "low-top",
//         "lace-up"
//       ],
//       "targetWordIndex": 3
//     },
//     {
//       "nameWords": [
//         "red",
//         "leather",
//         "laced",
//         "sneakers"
//       ],
//       "targetWordIndex": 2
//     },
//     {
//       "nameWords": [
//         "black",
//         "leather",
//         "laced",
//         "sneakers"
//       ],
//       "targetWordIndex": 2
//     }
//   ];



