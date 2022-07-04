

function generateJoke() {
  const config = {
     headers: {
        'Accept':'application/json'
     }
  }
  fetch('https://icanhazdadjoke.com', config)
  .then((res) => res.json())
  .then((data) => {
    // jokeText.innerHTML = data.joke
    console.log('data =', data.joke)
  })
  .catch(err => console.log(err))
}

//generateJoke()
