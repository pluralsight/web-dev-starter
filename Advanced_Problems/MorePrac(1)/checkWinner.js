function checkWinner (arr){
    var sum = 1;
    var currentItem = arr[0];
  
    for (var i = 1; i < arr.length; i++) {
      if(currentItem === arr[i]){
        sum++
        if(sum === 4){
          return `${currentItem[0].toUpperCase()}${currentItem.slice(1)} Wins!`
        }
      }else {
        currentItem = arr[i]
        sum = 1
      }
    }
    
    return `Draw!`
  }
  
  
  
  let blackWinner = checkWinner(['black', 'red', 'black', 'black', 'black', 'black', 'red']);
  console.log(blackWinner); //-> 'Black Wins!'
  
  let redWinner = checkWinner([0,0,0, 'red', 'red', 'red', 'red']);
  console.log(redWinner); //-> 'Red Wins!'
  
  let draw = checkWinner(['red', 'red', 'red', 'black', 'red', 'black', 0]);
  console.log(draw); // -> 'Draw!'
  