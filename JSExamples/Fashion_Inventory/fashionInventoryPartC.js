function listAllBlackShoes(inventory){
    //input - object with current inventory
    //output - string with Designer, "black" shoes and price
    // add /n to all lines except last one
  
    //create empty variable to hold string of designers with black shoes
    var stringOfDesigners = '';
   
    
    for (var i = 0; i < inventory.length; i++){  
      //create variable for shoe designer in current object
      var currentDesigner = inventory[i].name;
      
      //iterate through shoes array [inventory[i].shoes]
      for (var j = 0; j < inventory[i].shoes.length; j++){
          var shoeString = inventory[i].shoes[j].name
          var priceString = inventory[i].shoes[j].price

        //if indexOf black is NOT -1 at object key of 'name'
        if(shoeString.indexOf('black') !== -1){
            //console.log(shoeString)
            if (i === inventory.length -1 && j === inventory[i].shoes.length - 1){
                stringOfDesigners += `${currentDesigner}, ${shoeString}, ${priceString}`
            } else {
                stringOfDesigners += `${currentDesigner}, ${shoeString}, ${priceString}\n`
            }
        }
        
        //if last index of outerarray AND last index of inner array
          //push designer into new variable
          //push string into new strings variable
          //push .price into strings variable
        //otherwise
          //push designer into new variable
          //push string into new strings variable
          //push .price into strings variable
          //push a \n character
       }
  
    }
  
  
    //return stringOfDesigners;
    return stringOfDesigners;
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
  
  var result = listAllBlackShoes(currentInventory)
  console.log(result)
  
  
