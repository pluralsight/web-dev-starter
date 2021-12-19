function organizeItems (items){
    //Description
    //input - array of objects
    //output - object with arrays
  
    //EDGE CASE
    //input will standard
  
    //PseudoCode
    //create a new Object
    //iterate over the array
      //check the object.category
        //if NOT in object
          //add it to object and give it an empty array
          //add itemname value to object array
            //if object.onSale is true
              //append $ to end of itemName
    //return obj
        
     
  var newObj = {};
  
  for (var i = 0; i < items.length; i++){
    console.log('i',i)
    //console.log('category', items[i]['category'], 'items[i][itemName]',  items[i]['itemName'], items[i]['onSale'])
    
    var key = items[i]['category']
    var item = items[i]['itemName']
    var bool = items[i]['onSale']
  console.log('key', key, 'item', item, 'bool', bool)
  if(newObj[key] === undefined){
    newObj[key] = []
  }
    
    if(item === 'apple'){
      newObj[fruit].push('apple')
      console.log('APPLE TIME')
    } else if (item === 'beans'){
      console.log('bean Time')
    } else if (item === 'pizza'){
      console.log('pizza time')
    } else if (item === 'melon'){
      console.log('melon time')    
    } else if (item === 'soup'){
      console.log('soup time')
    } else if (item === 'corn'){
      console.log('corn time')
    }
    
    //all objects and keys have been created
    //newObj['canned'] , newObj['frozen'], newObj['fruit']
    
    //creat a condition for testing each itemName
      //if it matches
        //place in obj[key]
    
    
    
    
    //     if (items[i]['itemName'] === 'apple'){
    //   var fruitArray = newObj['fruit'];
    //   //console.log('fruit test array', fruitArray, 'newObj', newObj)
    //   newObj['fruit'].push('apple')
    //   console.log('fruitArray', fruitArray)
    // }
    
    // if(newObj[items[i]['category']] === -1){
    //   newObj[items[i]['category']] = [];
    //   console.log('newObj', newObj);
    // }
  }
        
      
    
  
  
  
  console.log('final return', newObj)
    return newObj;
  }
  
  
  
  var itemData = [
    { category: 'fruit',  itemName: 'apple', onSale: false },
    { category: 'canned', itemName: 'beans', onSale: false },
    { category: 'canned', itemName: 'corn',  onSale: true  },
    { category: 'frozen', itemName: 'pizza', onSale: false },
    { category: 'fruit',  itemName: 'melon', onSale: true  },
    { category: 'canned', itemName: 'soup',  onSale: false },
  ];
  
  var result = organizeItems(itemData);
  console.log('result', result);
  // return value
  // {
  //   fruit:  ['apple', 'melon($)'],
  //   canned: ['beans', 'corn($)', 'soup'],
  //   frozen: ['pizza']
  // };
  
  
  
  