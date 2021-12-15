function and(expression1, expression2) {
    return !(!expression1 || !expression2);

    // if (expression1 === true && expression2 === true){
    //   return true;
    // } else if (expression1 === true && expression2 === false ) {
    //   return true;
    // } else if (expression1 === false && expression2 === true){
    //   return true;
    // } else {
    //   return false;
    // }
   
 }
 
 var output = and(false, true);
 console.log(output); 
 

