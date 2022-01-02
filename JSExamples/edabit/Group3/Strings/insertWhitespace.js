function insertWhitespace(str){
    str = str.split('')
    accArr = []
    
    for(let i = 0; i < str.length; i++){
      if(str[i] === str[i].toUpperCase() && i !== 0){
        accArr.push(" ", str[i]  )    
      } else {
        accArr.push(str[i])
      }
    }
  return accArr.join('')
    
  }
  
  
  console.log(insertWhitespace("SheWalksToTheBeach"))// ➞ "She Walks To The Beach"
  
  console.log(insertWhitespace("MarvinTalksTooMuch"))// ➞ "Marvin Talks Too Much"
  
  console.log(insertWhitespace("TheGreatestUpsetInHistory"))// ➞ "The Greatest Upset In History"