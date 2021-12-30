//More Advanced Practice (2)
//Highest Scoring Word

function highestScoringWord(string) {
    //I - string of words
    //O - word with the highest score
    var stArr = string.split(' ')
  
    //abcdefghijklmnopqrstuvwxyz
    //12345678901234567892123456
  
    var highestWord = '';
    var largestScore = 0;
    while (stArr.length > 0) {
      console.log(wordScore(stArr[0]))
      if(wordScore(stArr[0]) > largestScore){
        largestScore = wordScore(stArr[0])
        highestWord = stArr[0]      
      }
      stArr.splice(0,1)
    }
  return highestWord;
  }
  
  function wordScore (string) { 
    var accSum = 0;
    var ab = '0abcdefghijklmnopqrstuvwxyz';
    arr = string.split('');
    while(arr.length > 0){
      accSum += ab.indexOf(arr[0]);
      arr.splice(0,1);
    }
  return accSum;
  }
  
  console.log(highestScoringWord('this is a test string'))
  
  