function findMiddleLetter(word){
    console.log('word.length', word.length)
    if(word.length % 2 === 0){
        return "even number";
    }
    for (var i = 0; i < word.length; i++){
        adjustedLength = word.length - 1
        if(i === adjustedLength-i){
            return word[i]
        }
    }
}
var word = 'thereww'
word = findMiddleLetter(word);