/*
Is one string a rotated version of another?

For example:
String 1: 'hello world'
String 2: 'orldhello w'

Extra hint: (click the drop down to ROT7 to see hint)
If you double the string, you'll be to trivially find another string inside it using regular String methods.

Doubled string: 'hello worldhello world'
Search w/in it: '       orldhello w    '

WNINFPEVCG
*/

function rotateThis (string1, string2){
    var isRotated;
    var doubleString1 = string1 + string1
    if(doubleString1.indexOf(string2) === -1){
        return isRotated = false;
    } else {
        return isRotated = true;
    }

}


var stringOne = 'hello world'
var stringTwo = 'orldhello w'
console.log(rotateThis(stringOne, stringTwo))