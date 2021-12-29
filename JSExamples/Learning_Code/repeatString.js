function repeatString(string, num) {
    if(num === 0){
        return '';
    } else {
        return string = string.concat(repeatString(string, num-1))
  
    }
}

var output = repeatString('code', 5);



console.log(output); // --> 'codecodecode'