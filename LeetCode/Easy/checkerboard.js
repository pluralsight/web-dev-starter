//build out a checkerboard of n size

function board(num) {
  //debugger
  let str = ''
  for ( let i = 0; i < num; i++ ) {
    for ( let j = 0; j <= num; j++ ) {
      if ((i + j) % 2 === 1 ) {
        str += "#"
      } else {
        str += ' '
      }
    }
    str += '\n'

  }
  console.log(str)
}
board(10)