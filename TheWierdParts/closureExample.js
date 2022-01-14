function makeGreeting(language) {
  return function(firstname, lastname) {
    console.log(arguments)

    if(language === 'en'){
      console.log(`Hello ${firstname} ${lastname}`);
    }
    if(language === 'es'){
      console.log(`Hola ${firstname} ${lastname}`)
    }
  }
}
//var greetEnglish = makeGreeting('en')('John', 'Doe')
var greetSpanish = makeGreeting('es')
console.log(makeGreeting('en')('John', 'Doe'))
//console.log(greetEnglish('John', 'Doe'));
console.log(greetSpanish('George', 'Chavez'));

