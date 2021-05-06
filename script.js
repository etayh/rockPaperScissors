let selection = ["rock", "paper", "scissors"]
let playerScore = 0;
let computerScore = 0;

        function gamePlay(){

            function computerPlay(){
            return selection[Math.floor(Math.random() * selection.length)];
            }
            let computerSelection = computerPlay();
            let playerSelection = prompt("Rock, Paper or Scissors? Choose Wisely!").toLowerCase();  
            
            if (playerSelection === computerSelection) {
            (playerScore += 0) && (computerScore +=0);
            alert(`Its a draw! We both chose ${playerSelection}. Your score: ${playerScore}/5  My Score: ${computerScore}/5`);
            }

            if ((playerSelection === "rock" && computerSelection === "scissors") ||
            (playerSelection === "paper" && computerSelection === "rock") ||
            (playerSelection === "scissors" && computerSelection === "paper")) {
            playerScore += 1;
            alert(`You win! Your ${playerSelection} beats my ${computerSelection}. Your score: ${playerScore}/5  My Score: ${computerScore}/5`);
            } 
            
            if ((playerSelection === "rock" && computerSelection === "paper") ||
            (playerSelection === "paper" && computerSelection === "scissors") ||
            (playerSelection === "scissors" && computerSelection === "rock")) {
            computerScore += 1;
            alert(`You lose! My ${computerSelection} beats your ${playerSelection}. Your score: ${playerScore}/5  My Score: ${computerScore}/5`);
            }
        }

        gamePlay();
        gamePlay();
        gamePlay();
        gamePlay();
        gamePlay();
        
        if (playerScore > computerScore){
            alert("GAME OVER! YOU'RE A WINNER!")
        } else if (playerScore < computerScore){
            alert("GAME OVER! YOU LOSE, BETTER LUCK NEXT TIME!")
        } else if (playerScore == computerScore) {
            alert("GAME OVER! IT'S A DRAW!")
        }