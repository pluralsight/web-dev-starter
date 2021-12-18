

function currentNameString(inventory){
//function renderInventory(inventory){
  //access all the shoes across each designer
  //return them out in a flast list string in the form of
  //"First line\nSecond Line\nThird Line"
  //console.log('inventory', inventory);
  var returnString = ''
for(var i = 0; i < inventory.length; i ++){
  var eachObj = inventory[i].shoes
  currentShoeDesigner = inventory[i].name;
  for(var j = 0; j < eachObj.length; j++){
    if( j === eachObj.length - 1 && i === inventory.length - 1){
      returnString += currentShoeDesigner + ',' + ' ' + eachObj[j].name +',' + ' ' + eachObj[j].price
    } else {
      returnString += currentShoeDesigner + ',' + ' ' + eachObj[j].name +',' + ' ' + eachObj[j].price + '\n'
    }
    }     
  }
  return returnString;
}
var result = currentNameString(currentInventory);
console.log(result);







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







//assertion function to be used
// assertEqual(actual,expected,testName){
//   if(actual === expected){
//     console.log(`Passed`)
//   } else {
//     console.log(`FAILED ${testName} Expected ${expected} but got ${actual}`);
//   }
// }

//TEST CASES

