
function sumAltitudeDeltas(arr, start, end) {
    let sum = 0; 
    for (let i = start; i < end; i++) {
      //console.log('arr[end]', arr[end], 'arr[i]', arr[i], 'arr[i+1}', arr[i+1])
      if(arr[i] < arr[i+1]){
        sum += ((arr[i+1] - arr[i]) * 2);
      } else {
        sum += (arr[i] - arr[i + 1])
      }
    }
    return sum;
  }
  
  
  
  
  // function sumAltitudeDeltas(arr, start, end) {
  //   var sum = 0; 
  //   var newArr = arr.slice(start, end+1)
  //   for (var i = 0; i < newArr.length-1; i++){
  //       if(newArr[i+1] > newArr[i]) {
  //           sum += ((newArr[i+1]-newArr[i]) * 2);
  //       } else {
  //           sum += newArr[i] - newArr[i+1]
  //       }
  //   }
  // return sum;   
  // }
  
  // let output_0 = sumAltitudeDeltas([1, 2, 3, 1], 0, 3);
  //console.log(output_0); //--> 6
  
  let output_1 = sumAltitudeDeltas([5, 3, 6, 7, 2], 2, 4);
  console.log(output_1); //--> 7
  
  let output_2 = sumAltitudeDeltas([5, 3, 6, 7, 2], 0, 1);
  console.log(output_2); //--> 2
  
  let output_3 = sumAltitudeDeltas([5, 3, 6, 7, 2], 0, 4);
  console.log(output_3); //--> 15
  
  let output_4 = sumAltitudeDeltas([4, 1, 4, 0, 20, 13], 1, 4);
  console.log(output_4); //--> 50