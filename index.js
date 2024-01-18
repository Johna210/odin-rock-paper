
function getComputerChoice() {
    choices = ["ROCK","PAPER","SCISSORS"]
    computer = choices[Math.floor(Math.random()*3)]

    return computer
}

function playGame(playerSelection, computerSelection) {

    playerSelection = playerSelection.toUpperCase();

    let message = "";
    let win = 0;

    if (playerSelection == "ROCK" && computerSelection == "ROCK" || 
    playerSelection == "PAPER" && computerSelection == "PAPER" || 
    playerSelection == "SCISSORS" && computerSelection == "SCISSORS") {

        message = "It's a Draw!!";
        win = 2;
    }

    if (playerSelection == "ROCK") {
        if (computerSelection == "PAPER") {
            message = "You Lose! Papaer beats Rock";
        } else if (computerSelection == "SCISSORS"){
            message = "You Win! Scissors beats Rock"
            win = 1;
        }
    } else if (playerSelection == "SCISSORS"){
        if (computerSelection == "ROCK"){
            message = "You Lose! Scissors beats Rock"
        } else if (computerSelection == "PAPER") {
            message = "You win! Scissors beat Paper"
            win = 1;
        }
    } else if (playerSelection == "PAPER") {
        if (computerSelection == "ROCK"){
            message = "You Win! Paper beats Rock"
            win = 1;
        } else if (computerSelection == "SCISSORS") {
            message = "You Lose! Scissors beat Paper"
        }
    }

    return [message,win];

}

function game() {
    playerScore = 0
    computerScore = 0
    draw = 0

    for (let i = 0; i < 5; i++){
        let playerSelection = prompt("Rock , Paper, Scissors? ")
        computerSelection = getComputerChoice();

        let round = playGame(playerSelection, computerSelection)

        console.log(round[0]);

        if (round[1] == 1) {
            playerScore++;
        } else if (round[1] == 0) {
            computerScore++
        }else {
            draw++
        }
        
    }

    if (playerScore > computerScore) {
        console.log(`Player wins with a score of ${playerScore} to ${computerScore}`)
    }else if (playerScore < computerScore) {
        console.log(`Player Loses with a score of ${playerScore} to ${computerScore}`);

    } else {
        console.log(`It's a draw with a score of ${playerScore} to ${computerScore}`);

    }
}


game();






