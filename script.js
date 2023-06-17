'use strict'
let secret_number = Math.trunc(Math.random()*20)+1;
let score = 20;
let highscore = 0;

//displaying the result
function display_message(arg){
    document.querySelector(".message").textContent = arg;
}

// displaying the score
function display_score(value){
    document.querySelector(".score").textContent = value;
}

//main game logic
document.querySelector(".check").addEventListener("click",function(){
    let guess = Number(document.querySelector(".guess").value);
    
    if (guess === secret_number){
        display_message("You guessed it right!!"); //display win messgae
        display_score(score);  // display current score
        document.querySelector(".secret_number").textContent= `The number is ${secret_number}`;
        if (score > highscore){
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    }
    else if (guess === 0){
        display_message("Enter a value....");
    }
    else{
        score --;
        guess > secret_number ? display_message("Too high") : display_message("Too low")
        display_score(score);
        if (score === 0){
            document.querySelector(".check").disabled = true;
        }
    }
})

// play again 
document.querySelector('.again').addEventListener('click',function(){
    score = 20;
    secret_number = Math.trunc(Math.random()*20)+1;
    display_score(score);
    document.querySelector(".guess").value = '';
    display_message("Start Guessing");
    document.querySelector(".secret_number").textContent = "?";
    document.querySelector(".check").disabled = false;
})



//https://guessmynumber.github.io
