function mapLetters(str){
    //split string into array of letters
    //each letter will be a key in object
    var accObj = {};
    str = str.split('')
      
    //iterate down array
      //if current value is undefined in object
        //add to object with empty array
        //push in current index value
      //otherwise -- its already in object
        //push in current index value
    //return object
  
    for (let i = 0; i < str.length; i++){
      if(accObj[str[i]] === undefined){
        accObj[str[i]] = [];
        accObj[str[i]].push(i);
      } else {
        accObj[str[i]].push(i);
      }
    }
  
  return accObj;
  }
  console.log(mapLetters("dodo"))// ➞ { d: [0, 2], o: [1, 3] }
  
  console.log(mapLetters("froggy"))// ➞ { f: [0], r: [1], o: [2], g: [3, 4], y: [5] }
  
  console.log(mapLetters("grapes"))// ➞ { g: [0], r: [1], a: [2], p: [3], e: [4], s: [5] }
  