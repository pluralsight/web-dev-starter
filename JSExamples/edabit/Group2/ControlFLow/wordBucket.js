// function bucketize(phrase, n) {
// 	let newPhraseArr = [];
// 	let bucket = "";
	
// 	for(let word of phrase.split(' ')){
// 		if(word.length > n){
// 			return [];
// 		}
		
// 		if(bucket.length + word.length < n){
// 			if(bucket.length !== 0){
// 				bucket += ' ';
// 			}
// 			bucket += word;
// 		}
// 		else{
// 			if(bucket.length !== 0){
// 				newPhraseArr.push(bucket);
// 			}
// 			bucket = word;
				
// 		}
// 	}
// 	newPhraseArr.push(bucket);
// 	return newPhraseArr;
// }

// function bucketize(str, n) {
//   //
//   //while still have words
//   str = str.split(' ');
//   var num = n;
//   var accArr = [];
//   var tempStr = '';


  //while we still have a string
    //if (word[0] length +1) - num >= 0
      //concat on temp string
      //splice word (0,1)
      //n -= word[i].length + 1
    //otherwise
      //push temp string onto array
      //num = n reset counter
    //return array
  
    //console.log(str.length, str[0], str[0].length, num - (str[0].length + 1))
    while (str.length > 0){
        if(num - (str[0].length) >= 0){
          tempStr += str[0] + ' ';
          num -= str[0].length + 1
          str.splice(0,1)
        } else {
          accArr.push(tempStr.trim());
          tempStr = '';
          num = n
        }
      }
    accArr.push(tempStr.trim())
    return accArr
    }
    
    
    
    
    
    console.log(bucketize("she sells sea shells by the se", 10))
    //➞ ["she sells", "sea shells", "by the sea"]
    
    // console.log(bucketize("the mouse jumped over the cheese", 7))
    // //➞ ["the", "mouse", "jumped", "over", "the", "cheese"]
    
    // console.log(bucketize("fairy dust coated the air", 20))
    // //➞ ["fairy dust coated", "the air"]
    
    // console.log(bucketize("a b c d e", 2))
    // //➞ ["a", "b", "c", "d", "e"]
    
    