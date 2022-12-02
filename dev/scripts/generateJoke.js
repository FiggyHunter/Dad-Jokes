import axios from 'axios'

let jokeText = document.getElementsByClassName("card__joke")[0];
document.addEventListener("load", generateJoke());

function generateJoke() {
  console.log("usao");
    const config = {
        headers: {
            Accept: 'application/json'
        }
    }
  axios.get('https://icanhazdadjoke.com', config).then(res => {
    jokeText.innerHTML = res.data.joke;
  })
}

export default generateJoke;