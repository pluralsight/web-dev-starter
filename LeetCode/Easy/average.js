
var average = function(salary) {
  const length = salary.length
    return salary.sort((a,b) => a - b).slice(1,length - 1).reduce((acc, ea) => acc + ea,0)/(length - 2)
};



console.log(average([4000,3000,1000,2000]))

// Input: salary = [4000,3000,1000,2000]
// Output: 2500.00000
// Explanation: Minimum salary and maximum salary are 1000 and 4000 respectively.
// Average salary excluding minimum and maximum salary is (2000+3000) / 2 = 2500

