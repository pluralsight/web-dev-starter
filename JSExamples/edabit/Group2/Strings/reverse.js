function reverse(str){
    str = str.split('').reverse()
    //console.log(str)
  
  for(let i = 0; i < str.length; i++){
    if (str[i] === str[i].toLowerCase()){
      str[i] = str[i].toUpperCase()
    } else {
      str[i] = str[i].toLowerCase()
    }
  }
  
  return str.join('')
  }
  
  console.log(reverse("Hello World"))// ➞ "DLROw OLLEh"
  
  console.log(reverse("ReVeRsE"))// ➞ "eSrEvEr"
  
  console.log(reverse("Radar"))//) ➞ "RADAr"
  