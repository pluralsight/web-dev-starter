/*
You will be given an array that contains two strings. Your job is to create a function that will take 
those two strings and transpose them, so that the strings go from top to bottom instead of left to right.

e.g. transposeTwoStrings(['Hello','World']);

should return:
H W  
e o  
l r  
l l  
o d
*/

function transposeTwoStrings(arr) {
    var characters = '';
    for (var i = 0; i < arr[0].length; i++) {
        characters += arr[0][i] + ' ' + arr[1][i] + '\n'
        
    }

return characters
}



var arrayOfWords = ['Hello', 'World'];
console.log(transposeTwoStrings(arrayOfWords))

/*
H W
e o
l r
l l
o d
*/