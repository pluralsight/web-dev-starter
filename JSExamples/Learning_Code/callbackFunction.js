




function plusTwo(num) {
    return num + 2;
  }
  console.log(plusTwo(3)); // 3 + 2 = 5
  
  function timesTwo(num) {
    return plusTwo(num) * 2;
  }
  console.log(timesTwo(3)); // (3 + 2) * 2 = 10
  
  function DividedByFive(num) {
    return timesTwo(num) / 5;
  }
  
  console.log(DividedByFive(3)) // ((3 + 2) * 2) / 5 = 2
  
  