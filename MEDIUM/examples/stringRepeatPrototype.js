//repeate a string n times

String.prototype.repeat = function(n) {
  debugger
  let str = this
  for ( let i = 0; i < n; i++ ) {
    str += this
  }
  return str
}

'Bubba'.repeat(3)

