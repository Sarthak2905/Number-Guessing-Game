let input = document.getElementById("guessInput");
let button = document.getElementById("submitBtn");
let message = document.getElementById("message");
let attemptText = document.getElementById("attempts");

let attempts = 10;

attemptText.textContent = "Attempts left: " + attempts;


let randomNumber = Math.floor(Math.random() * 100) + 1;
console.log(randomNumber);


button.addEventListener("click", function() {
    let guess = Number(input.value);
    
    attempts--;

    attemptText.textContent = "Attempts left: " + attempts;

    if(guess === randomNumber){
        message.textContent = "Correct";
    }
    else if(guess < randomNumber){
        message.textContent = "Too Low"
    }
    else{
        message.textContent = "Too High";
    }
})