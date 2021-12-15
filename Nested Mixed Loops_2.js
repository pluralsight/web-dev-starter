var objectOfArrays = {
  'inner1': [1, 2, 3],
  'inner2': [4, 5, 6],
  'inner3': [7, 8, 9]
};

for (var key in objectOfArrays) {
  for (var i = 0; i < objectOfArrays[key].length; i++) {
    console.log(objectOfArrays[key][i]);
  }
}

////////////////////////////////////////

var winningLottoHistory = {
  '9/5/2018': [1, 27, 63],
  '9/8/2018': [3, 21, 58],
  '9/12/2018': [4, 17, 37]
};

for (var dateOfDrawing in winningLottoHistory) {
  var currentWinningNumbers = winningLottoHistory[dateOfDrawing]
  for (var i = 0; i < currentWinningNumbers.length; i++) {
    console.log(currentWinningNumbers[i]);
  }
}

//////////////////////////////////////////////////////////////
function loopAnObjectOfArrays(objectOfArrays) {
  for (var outerObj in objectOfArrays) {
    for (var i = 0; i < objectOfArrays[outerObj].length; i++){
      console.log(objectOfArrays[outerObj][i]);
    }
  }
  }
  loopAnObjectOfArrays({ first: [1, 2, 5], second: [6, 14, 21] });
