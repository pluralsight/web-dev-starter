function getStudentTopNotes(arr){
    accArr = [];
  
    for (let i = 0; i < arr.length; i++){
      accArr.push(bigNum(arr[i].notes))
  
    }
  return accArr;
  }
  
  
  function bigNum (arr){
    //given an array, find the largest number
    var largest = arr[0];
  
    while(arr.length > 0){
      if(arr[0] > largest){
        largest = arr[0];
        arr.splice(0,1)
      } else {
        arr.splice(0,1)
      }
    }
  return largest;
  }
  
  
  var result = getStudentTopNotes([
    {
      id: 1,
      name: "Jacek",
      notes: [5, 3, 4, 2, 5, 5]
    },
    {
      id: 2,
      name: "Ewa",
      notes: [2, 3, 3, 3, 2, 5]
    },
    {
      id: 3,
      name: "Zygmunt",
      notes: [2, 2, 4, 4, 3, 3]
    }
  ])
  
  console.log(result)
  //➞ [5, 5, 4]
  
  
  

