var itemData = [
    { category: 'fruit',  itemName: 'apple', onSale: false },
    { category: 'canned', itemName: 'beans', onSale: false },
    { category: 'canned', itemName: 'corn',  onSale: true  },
    { category: 'frozen', itemName: 'pizza', onSale: false },
    { category: 'fruit',  itemName: 'melon', onSale: true  },
    { category: 'canned', itemName: 'soup',  onSale: false },
    { category: 'frozen', itemName: 'pizza', onSale: false },
    { category: 'fruit',  itemName: 'melon', onSale: true  },
  ];
  
  var actual1 = organizeItems(itemData);
  // console.log('result', result);
  
  var expected1 = {
    fruit:  ['apple', 'melon($)'],
    canned: ['beans', 'corn($)', 'soup'],
    frozen: ['pizza']
      
    
  };
  
  function organizeItems(arr) {
  //I - array of objects
  //O - Obj
    //key will be category of each item in array
    //value will be array of itemName
  
    //create accumulator object
    //iterate through the array
      //if category value is undefined in object
        //insert in object []
        //push onSaleHelper into array
      //otherwise
        //push onSaleHelper into array
    var accObj = {};
    for(let i = 0; i < arr.length; i++){
      //var cat = accObj[arr[i].category]
      //console.log(accObj)
      if(accObj[arr[i].category] === undefined){
        accObj[arr[i].category] = []
        accObj[arr[i].category].push(onSaleHelper(arr[i].itemName, arr[i].onSale))
      } else {
        var updateItem = onSaleHelper(arr[i].itemName, arr[i].onSale)
        if(accObj[arr[i].category].indexOf(updateItem) !== -1){
          accObj[arr[i].category].splice(accObj[arr[i].category].indexOf(updateItem),1)
          updateItem = '+' + updateItem
          accObj[arr[i].category].push(updateItem)
        } else {
            accObj[arr[i].category].push(updateItem)
          }        
        }
      }
    
      
  return accObj;
  }
  
  
  function onSaleHelper (str, bool) {
    if(bool) {
      str += '($)';
      return str;
    } else {
      return str;
    }
  }
  
  console.log(actual1)
  
  