function coinFlip(){
    heads = '#####################################'
    tails = '@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@'
    leak = 0
  
    var count = 0
    while (count < 500){
    var randomNum = Math.floor(Math.random() * 2) 
      count++
      if (randomNum === 1){
        tails = tails.substring(1)
        heads = heads + "#";
      } else if (randomNum === 0){
        heads = heads.substring(1);
        tails = tails + "@";
      } else {
        console.log ('Something went wrong', leak++);
      }
      console.log('heads',heads);
      console.log('tails',tails);
      
    }
    //return randomNum;
    console.log('Heads:', heads.length);
    console.log('Tails:', tails.length);
    console.log('Leak', leak);
  }
  
  random = coinFlip();
  


























// function coinFlip(){
//     heads = '####################'
//     tails = '@@@@@@@@@@@@@@@@@@@@'
//     lucky5 = 0
  
//     var count = 0
//     while (count < 50000){
//     var randomNum = Math.floor(Math.random() * 11) 
//       count++
//       if (randomNum >= 0 && randomNum < 5){ //0, 1, 2, 3 or 4
//         tails = tails.substring(1);
//         heads = heads + "#";
//       } else if (randomNum > 5 && randomNum <= 10){ //6, 7, 8, 9 or 10
//         heads = heads.substring(1);
//         tails = tails + "@";
//       } else {
//         lucky5++;
//         console.log ('lucky5', lucky5);
//       }
//       console.log('heads',heads);
//       console.log('tails',tails);
      
//     }
//     //return randomNum;
//     console.log('Heads:', heads.length);
//     console.log('Tails:', tails.length);
//     console.log('Lucky5', lucky5);
//   };
  
  
//   random = coinFlip();
  





  // let age, age2;

// do {
//   age = prompt("How old are you?");
// } while (age === "");

// do {
//   age2 = prompt("Please Cofirm Your age");
// } while (age2 === "" || age2 !== age);
// console.log ('age', age, 'age2', age2)
