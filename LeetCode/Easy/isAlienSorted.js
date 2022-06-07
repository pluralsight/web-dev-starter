/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
 var isAlienSorted = function(words, order) {


  //iterate down the word
    //compare letters
    // first letter must be less or equal


  // for (let i = 0; i < words[0].length; i++ ) {
  //   baseIndex = words[0][i]
  //   for let j = 0; j < words.length; j++ ) {
  //     let curIndex = order.indexOf(word[j][i])
  //     if ( baseIndex > curIndex ) {
  //       return false
  //     } else if ( baseIndex < curIndex) {
  //       continue
  //     } else {
  //       baseIndex === curIndex
  //       while (words[j].length) {
  //         //
  //       }
  //     }

  //   }

    // this works great for two words... expand this out to multiple words
    for ( let i = 0; i < words.length - 1; i++ ) {
      for ( let j = 0; j < words[i].length; j++ ) {
        idx1 = order.indexOf(words[i][j])
        idx2 = order.indexOf(words[i + 1][j])

        if ( idx1 < idx2 ) {
          break;
        }
        if ( idx1 > idx2 ) {
          return false
        }

        // if (idx1 < idx2 ) {
        //   return true
        // } else if ( idx1 > idx2 ) {
        //   return false
        // }

      }
    }

    return true
};

isAlienSorted(["hello","leetcode", "helloq"],"hlabcdefgijkmnopqrstuvwxyz")

module.exports = isAlienSorted;
/*
1 <= words.length <= 100
1 <= words[i].length <= 20
order.length == 26
All characters in words[i] and order are English lowercase letters.

*/