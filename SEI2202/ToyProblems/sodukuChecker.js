/*
Given a full sudoku board, return 'solved' if the board is solved, or 'invalid' if the board is invalid.

A sudoku board is solved if each column, row, and 3 x 3 subgrid contains all of the digits from 1 to 9.

Input: A String representing the board.
Output: 'solved' if the board is valid, 'invalid' if it isn't

Example input:
"735814296\n
896275314\n
214963857\n
589427163\n
362189745\n
471356982\n
923541678\n
648792531\n
157638429"
*/



function sudokuChecker(board) {
  if(typeof board !== 'string') {
    return 'invalid'
  }
  board = board.split('\n')
  console.log(board)
  // board.forEach(num => {
  //   num.forEach(dig => console.log(dig))
  // })

  var array = []
  var finalsum=0;

  var sum = 0;
  var newArr = []
  for (let i = 0; i < board.length; i++ ) {
    for(let k = 0; k < board[i].length; k++ ) {

      newArr.push(board[k][i])

    }

    var test = new Set (board[i])
    if( test.size !== 9) {
      return 'invalid'
    }

    let accSum = 0;
    for (let item of test) {
      accSum += +item
    }
    console.log('accSum', accSum)
    if(accSum !== 45) {
      return 'invalid'
    }
  }
  console.log('new', newArr)
  for (let j = 0; j < newArr.length; j+= 9) {
    const chunk = newArr.slice(j, j + 9)
    var chunkset = new Set (chunk)
    console.log(chunkset)
    for (let item of chunkset) {
      finalsum += +npm item
    }
    // for (let h = 0; h < chunk.length; h++) {
    //   finalsum += +chunk[h];
    //   console.log(finalsum, chunk[h])
    // }
    if(finalsum !== 45) {
      return 'invalid'
    }
    finalsum = 0;
  }
  console.log(array)

return 'solved'
}


//var soduku = sudokuChecker(345)
//var soduku = sudokuChecker("735814296\n896275314\n214963857\n589427163\n362189745\n471356982\n923541678\n648792531\n157638429")
//var invalidboard = sudokuChecker("215873649\n734965812\n698412537\n387241965\n146597283\n471659328\n952386471\n563128794\n829734156")
console.log(invalidboard)