/**
 * Write a function that, given a string, Finds the longest run of identical
 * characters and returns an array containing the start and end indices of
 * that run. If there are two runs of equal length, return the first one.
 * For example:
 *
 *   longestRun("abbbcc") // [1, 3]
 *   longestRun("aabbc")  // [0, 1]
 *   longestRun("abcd")   // [0, 0]
 *   longestRun("")       // null
 *
 * Try your function with long, random strings to make sure it handles large
 * inputs well.


[  a     b     c      d      e]
  start next  end
*/



var longestRun = function (string) {
  //console.log('string', string)
  if (string.length === 0 ) {
    return null
  }

 // set a start, next, end, accArr,  largest variable

 // while start < string.length
 // if start === next and next === end
   // while next === end
     // crawl down the array checking next and end
     // increase counter
     // roll the variables

   // if counter > largest
     // accArr.push(start, end)
     // reset counter
     // set start to end
     // set next to start + 1
     // set end to start + 2

 //otherwise
   //set start to next
   //set next to end
   //set end to end + 1


 //return accArr

//debugger
 let start = 0
 let next = 1
 let end = 2
 let accArr = []
 let counter = 0
 let largest = 0

 while (start < string.length) {
   if ( string[start] === string[next]  && string[next] === string[end]) {
     while (string[next] === string[end]) {
       counter++
       next = end;
       end = end + 1;
     }
     if (counter > largest) {
       //console.log('accArr', accArr)
       largest = counter
       counter = 0
       accArr = []
       accArr.push(start, next)
       start = end;
       next = start + 1;
       end = start + 2;
     }

   } else {
     start = next;
     next = end;
     end = end + 1;
   }

 }

 return accArr;


};

//console.log(longestRun("abbbccddeeeeeee"))



// If you need a random string generator, use this!
// (you wont need this function for your solution but it may help with testing)
var randomString = function (len) {
 var text = '';
 var possible = 'abcdefghijklmnopqrstuvwxyz';

 for (var i = 0; i < len; i++) {
   text += possible.charAt(Math.floor(Math.random() * possible.length));
 }

 return text;
};



//console.log(longestRun(randomString(1000)))

