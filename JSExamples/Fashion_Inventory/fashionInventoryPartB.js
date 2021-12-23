//Fashion Inventory ######################################


  function calculateAveragePricePerDesigner(inventory){
    //Description of Problem
    //create an object with a key of designers
    //create an empty array to hold Brunello and Gucci
    //create brunello object with name key and name value from inventory
    //create Gucci object with name key and name value from inventory
  
    var masterObject = {};
    var arrayOfDesigners = []
    var designersObject = {}
    
    
    //create a sum variable
    //create an average variable
    var sum = 0;
    var average = 0;
    //iterate over the array of objects
    for (var i = 0; i < inventory.length; i++){
      //iterate over the object 
      for (var j = 0; j < inventory[i].shoes.length; j++){
        sum += inventory[i].shoes[j].price
      //sum up the price
      //comput the average
      //add designer and average to sub object
      //push sub object into array
      //set array to key designers in Object
      }
      average = sum/inventory[i].shoes.length
      arrayOfDesigners[i] = {'name' : inventory[i].name,
                           'averagePrice' : average} 
      
      sum = 0; //reset variable
      average = 0;
          
      }
    
    masterObject['designers'] = arrayOfDesigners;
    
  
    return masterObject;
    
    
    
    
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
  


  // var result = calculateAveragePricePerDesigner(currentInventory);
  // console.log(result);
  // console.log(result.designers)

  var actual1 = calculateAveragePricePerDesigner(currentInventory)
  var expected1 = {
    'designers': [
      {
        'name': 'Brunello Cucinelli',
        'averagePrice': 1025
      },
      {
        'name': 'Gucci',
        'averagePrice': 850
      }
    ]
  };
assertObjectsEqual(actual1, expected1, 'both objects should be the same')


function assertObjectsEqual (actual, expected, testName){
      var actual = JSON.stringify(actual)
      var expected = JSON.stringify(expected)

      if(actual === expected){
          console.log(`Passed`)
      }else{
          console.log(`FAILED ${testName} Expected ${expected} but got ${actual}`)
      }
  }
  