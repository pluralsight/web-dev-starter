function toggleCase(string){
  //string is immutable therefore create new string
  var newString = "";
  for (let i = 0; i < string.length; i++){
    //if (string.charAt(i) === string.charAt(i).toUpperCase()){
    if (string[i] === string[i].toUpperCase()){

      newString += string[i].toLowerCase();
      //console.log('typeOf', string[i])

    }else {
      newString += string[i].toUpperCase();
    }

  }
  console.log(newString);
}

toggleCase('MaRioOoOoOo'); //'mArIO'
toggleCase('PRP'); //'prp'
toggleCase('Good news, everyone!'); //'gOOD NEWS, EVERYONE!'
