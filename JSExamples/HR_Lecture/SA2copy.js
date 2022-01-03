














































function countInstancesOf(letter, sentence) {
    // create result variable
    //iterate through the array
      //each time indox of array matches leter
       //add one to result
    //return result
  
    var result = 0;
    for (var i = 0; i < sentence.length; i++){
      if (sentence[i] === letter){
        result ++
      }
    }
  
  return result;
  }
  




































function titleCase(str) {
    // set all letters in str to lower case
    //split the strings into separate words
    //iterate through array of words
      //at each word
        //iterage through the word
          //convert first letter to upper case and concatentate with empty string
           //concatentate rest of letters onto string
    //return string
  
    var newString = ''
    var arrayOfWords = []
    str = str.toLowerCase()
    //console.log(str);
  arrayOfWords = str.split(' ')
  //console.log(arrayOfWords)
  for (var i = 0; i < arrayOfWords.length; i++){
    newString += arrayOfWords[i][0].toUpperCase()
    for (var j = 1; j < arrayOfWords[i].length; j++){
      newString += arrayOfWords[i][j]
  
      //console.log('newstring', newString)
    }
    newString += ' '
    
    
  }
  newString = newString.trim();
  return newString;
  
  }
  
















































function getNameAndBirthday (obj){

    return `${obj.name.first} ${obj.name.last}: ${obj.birthDay.month} ${obj.birthDay.day}, ${obj.birthDay.year}`
    
    }





































function renderInfoNeatly (obj) {
  
    var firstName = (obj.name.first)[0].toUpperCase() + (obj.name.first).slice(1).toLowerCase()
    var lastName = (obj.name.last)[0].toUpperCase() + (obj.name.last).slice(1).toLowerCase()
    var monthCorrect = (obj.birthDay.month)[0].toUpperCase() + (obj.birthDay.month.slice(1).toLowerCase())
    var dayValue = obj.birthDay.day;
    var yearValue = obj.birthDay.year
    return `${firstName} ${lastName}: ${monthCorrect} ${dayValue}, ${yearValue}`
  }
  









































function getPeopleBornIn(obj, str) {
    //output - array of strings.. push them into collector array
    var accumArray = []
    for (var i = 0; i < obj.length; i++){
      if(obj[i].birthDay.month === str){
        accumArray.push(`${obj[i].name.first} ${obj[i].name.last}: ${obj[i].birthDay.month} ${obj[i].birthDay.day}, ${obj[i].birthDay.year}`)
  
      }
    }
  return accumArray
  }
  