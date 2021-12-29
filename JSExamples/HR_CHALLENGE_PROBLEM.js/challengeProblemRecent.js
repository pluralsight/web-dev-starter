function organizeItems (items){
    //create accumulator object
    var accObj = {};
    //iterate through array
    for (let i = 0; i < items.length; i++) {
      //if category is -1
      var currentCat = items[i].category
      var currentBol = items[i].onSale
      var currentItem= items[i].itemName
      if (accObj[items[i].category] === undefined ){
        //create key with empty array value
        accObj[currentCat] = []
        accObj[currentCat].push(onSaleHelper(currentItem, currentBol))
        
        //push itemName value (returned from OnSale function) into empty array
      //otherwise
      } else {
        accObj[currentCat].push(onSaleHelper(currentItem, currentBol))
   
        //push item itemName (returned from OnSale function) array at Key
      }
    }
  //console.log(accObj)  
  return accObj;
  }
  
  function onSaleHelper (str, boolean){
    var accStr = '';
    if(boolean){
      return accStr = `${str}($)`;
    } else {
    return str;
    }
  }
  
  
  var itemData = [
    { category: 'fruit',  itemName: 'apple', onSale: false },
    { category: 'canned', itemName: 'beans', onSale: false },
    { category: 'canned', itemName: 'corn',  onSale: true  },
    { category: 'frozen', itemName: 'pizza', onSale: false },
    { category: 'fruit',  itemName: 'melon', onSale: true  },
    { category: 'canned', itemName: 'soup',  onSale: false },
  ];
  
  var actual1 = organizeItems(itemData);
  // console.log('result', result);
  
  var expected1 = {
    fruit:  ['apple', 'melon($)'],
    canned: ['beans', 'corn($)', 'soup'],
    frozen: ['pizza']
    
    
  };
  
  function assertObjectsEqual (actual, expected, testName){
    actual = JSON.stringify(actual);
    expected = JSON.stringify(expected);
    console.log(actual)
    console.log(expected)
  
    if (actual === expected){
      console.log(`Passed`)
    } else {
      console.log(`Failed`)
    }
  
  }
  
  
  assertObjectsEqual(actual1, expected1, 'both objects should be equal')