let targetNum = Math.floor((Math.random() * 10) + 1)

let maximum = parseInt(prompt('Please enter a maximum number'))
while (!maximum) {
  let maximum = parseInt(prompt('Enter a valid number!'))
}

let guess = prompt('Enter your guess:')
let guesses = 1


while (parseInt(guess) !== targetNum) {
  guesses++
  if (guess === 'q') break;
  if (guess > targetNum) {
    guess = prompt('You guessed to high, try again:')
  } else if (guess < targetNum) {
    guess = prompt('You guessed to low, try again:')
  } else {
    guess = prompt(`You guessed ${guess}, please enter a valid number:`)
  }
}
console.log(`You got it!  The number is ${targetNum} and it took ${guesses} guesses!`)
