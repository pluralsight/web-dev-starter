/**
 * @param {string} command
 * @return {string}
 */
 var interpret = function(command) {
   //debugger

  let accStr = ''

  //recursion : pure
  //base case
  if (!command) {
    return ''
  }

  //slice off section and call helper function
  for ( let i = 0; i < command.length; i++ ) {
    if ( command[i] === 'G' ) {
      return accStr += command[i] + interpret(command.slice(1))
    }
    if ( command[i] === '(' && command[i+1] === ')' ) {
      return accStr += 'o' + interpret(command.slice(2))
    }
    if ( command[i] === '(' && command [i+1] === 'a' ) {
      return accStr += 'al' + interpret(command.slice(4))
    }

  }



};
console.log(interpret('G()()()(al)'))

module.exports = interpret;
/*
You own a Goal Parser that can interpret a string command. The command consists of an alphabet of "G", "()" and/or "(al)" in some order. The Goal Parser will interpret "G" as the string "G", "()" as the string "o", and "(al)" as the string "al". The interpreted strings are then concatenated in the original order.

Given the string command, return the Goal Parser's interpretation of command.

Input: command = "G()(al)"
Output: "Goal"
Explanation: The Goal Parser interprets the command as follows:
G -> G
() -> o
(al) -> al
The final concatenated result is "Goal".

Input: command = "G()()()()(al)"
Output: "Gooooal"

Input: command = "(al)G(al)()()G"
Output: "alGalooG"


*/