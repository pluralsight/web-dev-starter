//Without .charAt()

function upperCaseEveryWord(nameStr){
  const mySentence = "freeCodeCamp is an awesome resource";
  let words = mySentence.split(" ");
  
  for (let i = 0; i < words.length; i++) {
      words[i] = words[i][0].toUpperCase() + words[i].substring(1);
  }
  console.log(words.join(' '))
  return words
}


  var result = upperCaseEveryWord('Now is the time for joy');
  console.log (result);
  










/*

//With .charAt()

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
  */