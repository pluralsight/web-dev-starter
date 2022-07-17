Array.prototype.myFilter = function(callback) {
  //debugger
  let result = []

  for ( let i = 0; i < this.length; i++ ) {
    if ( callback(this[i], i, this) ) {
      result.push(this[i])
    }
  }
  return result
}
