import '../styles/index.scss'
import generateJoke from "./generateJoke.js"

let button = document.getElementsByClassName("card__button")[0];
let buttonClicked = false;
button.addEventListener("click", handleClick);

function handleClick() {

    if(buttonClicked == true) {
        return
    }

    if(buttonClicked != true) {
        buttonClicked = true;
        setTimeout(()=>{button.classList.remove('button-disabled'); buttonClicked = false;}, 2000);
        button.classList.add('button-disabled');
        generateJoke();
        return;
    }
}