function hoursPassed (t1, t2) {
    return (milHelper(t2) - milHelper(t1))
  }
  
  function milHelper(string) {
    if(string.indexOf('PM') !== -1){
      return parseInt(string) + 12
    } else {
      return parseInt(string)
    }
      
  }
  
  
  console.log(hoursPassed("3:00 AM", "9:00 AM"))// ➞ "6 hours"
  
  console.log(hoursPassed("2:00 PM", "4:00 PM"))// ➞ "2 hours"
  
  console.log(hoursPassed("1:00 AM", "3:00 PM"))// ➞ "14 hours"
  