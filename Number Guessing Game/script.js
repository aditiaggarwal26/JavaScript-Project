let randomNumber = parseInt(Math.floor(Math.random()*100)+1);

const submit = document.querySelector(".btn"); 
const userInput = document.querySelector(".guess");

const result = document.querySelector(".result");
const previousGuess = document.querySelector(".guesses");
const remain = document.querySelector(".lastResult");
const hint = document.querySelector(".lowHigh");

const p = document.createElement('p');
let prevGuess = [];
let numGuess = 0;

let playGame = true;

if(playGame) {
    submit.addEventListener('click', function(e){
        e.preventDefault();
        const userValue = parseInt(userInput.value);
        validateGuess(userValue);
    });

}
function validateGuess(userValue){
    if(userValue<1 || userValue>100 || isNaN(userValue)){
        alert("Please enter a valid number.");
    }else{
        prevGuess.push(userInput);
        if(numGuess > 5){
            displayGuess(userValue);
            displayMessage(`Game over ! Random number was ${randomNumber}`);
            endGame();
        }else{
            displayGuess(userValue);
            checkGuess(userValue);
        }
    }
}
function checkGuess(userValue){
    if(userValue == randomNumber){
        displayMessage("Congrats! You guessed it right!");
        endGame();
    }else if(userValue>randomNumber){
        displayMessage("Guess a lower value");
    }else{
        displayMessage("Guess a higher value");
    }
}
function displayGuess(userValue){
    userInput.value = '';
    previousGuess.innerHTML += `${userValue} `;
    remain.innerHTML = `${5-numGuess}`;
    numGuess++;
}
function displayMessage(message){
    hint.innerHTML= `<h2>${message}</h2>`;
}

function endGame(){
    userInput.value ='';
    userInput.setAttribute('disabled','');
    p.classList.add('button');
    p.innerHTML=  `<h3 class ="newGame">New Game</h3>`;
    result.appendChild(p);
    playGame=false;
    newGame();
}
function newGame(){
    const newGame = document.querySelector(".newGame");
    newGame.addEventListener('click',function(e){
        randomNumber = parseInt(Math.floor(Math.random()*100)+1);
        prevGuess = [];
        numGuess=0;
        hint.innerHTML = '';
        remain.innerHTML = `${6-numGuess}`
        userInput.removeAttribute('disabled','');
        result.removeChild(p);

        playGame=true;
    });
}