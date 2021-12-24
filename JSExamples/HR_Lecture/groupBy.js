 
function groupBy(arr) { 
    var obj = {};
    
    
    for(var i = 0; i < arr.length; i++) {
      
      if(obj[arr[i][0]] === undefined){
          obj[arr[i][0]] = [];
          obj[arr[i][0]].push(arr[i])
       
      } else {
        obj[arr[i][0]].push(arr[i])
      }
  
  } 
  return obj
  }
  
  console.log(groupBy(['apple', 'cat', 'boat', 'card', 'bond'])); 
  // { 'a': ['apple'], 'c': ['cat', 'card'], 'b': ['boat', 'bond'] }
  
  
  