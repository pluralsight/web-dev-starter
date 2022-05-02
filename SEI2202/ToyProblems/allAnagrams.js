



/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 * Extra credit: Deduplicate your return array without using uniq().
 */

/**
  * example usage:
  * var anagrams = allAnagrams('abc');
  * console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
  */

 var allAnagrams = function(string) {

  if (!string || typeof string !== 'string') {
    return null
  } else if (string.length < 2) {
    return string
  }



 let accArr = [];



 for (var i = 0; i < string.length; i++ ) {
   //create a subproblems of string, each having size n/b
   //call procedure p recursively on each subproblem
   //combine the results from the subproblems
   let char = string[i]


   if(string.indexOf(char) != i) {
     continue
   }
   let remChar = string.slice(0, i) + string.slice(i + 1, string.length)

   for (let permutation of allAnagrams(remChar)) {
     accArr.push(char+permutation);
   }
 }






 return accArr;

};

//console.log(allAnagrams('abc'));