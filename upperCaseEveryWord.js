function upperCaseEveryWord(nameStr) {
    array = nameStr.split(' ')
    newArray = []
    for (var i = 0; i < array.length; i++){
      if(i === array.length-1){
        newArray += (array[i].charAt(0).toUpperCase() + array[i].slice(1) + '.');
      } else {
          newArray += (array[i].charAt(0).toUpperCase() + array[i].slice(1) + ' ');
      }
        
   }
    return newArray;
  }
  
  var result = upperCaseEveryWord('Now is the time for joy');
  console.log (result);
  