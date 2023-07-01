// SITE JAVASCRIPT
console.log('Welcome to RPS...');

let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    // Generate random choice between 1 and 3 and assign choice value

    let computerChoice;
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    
    switch (randomNumber) {
        case 1:
            computerChoice = "Rock";
            break;
        case 2:
            computerChoice = "Paper";
            break;
        case 3:
            computerChoice = "Scissors";
            break;
    }

    console.log(`Computer chose ${computerChoice}`);
    return computerChoice;
}

// function getPlayerChoiceTesting() {
//     // This version for testing
//     // Generate random choice between 1 and 3 and assign choice value

//     let playerChoice;
//     let randomNumber = Math.floor(Math.random() * 3) + 1;
    
//     switch (randomNumber) {
//         case 1:
//             playerChoice = "Rock";
//             break;
//         case 2:
//             playerChoice = "Paper";
//             break;
//         case 3:
//             playerChoice = "Scissors";
//             break;
//     }

//     console.log(`Player chose ${playerChoice}`);
//     return playerChoice;
// }

function getPlayerChoice() {
    // Ask player for their move

    let playerChoice = prompt("Rock, Paper, or Scissors?");

    switch (playerChoice.toUpperCase()) {
        case "ROCK":
            playerChoice = "Rock";
            break;
        case "PAPER":
            playerChoice = "Paper";
            break;
        case "SCISSORS":
            playerChoice = "Scissors";
            break;
        default:
            playerChoice = "Error";
            break;        
    }
    console.log(`You chose ${playerChoice}`);
    return playerChoice;
}

function playRound(player, computer) {
    // Compare choices and determine winner

    let result;

    if (player == "Rock") {
        switch (computer) {
            case "Rock":
                result = "It's a tie!";
                break;
            case "Paper":
                result = "Paper wraps Rock, you lose!";
                computerScore ++;
                break;
            case "Scissors":
                result = "Rock breaks Scissors, you win!"
                playerScore ++;
                break;     
        }
    } else if (player == "Paper") {
        switch (computer) {
            case "Rock":
                result = "Paper wraps Rock, you win!";
                playerScore ++;
                break;
            case "Paper":
                result = "It's a tie!";
                break;
            case "Scissors":
                result = "Scissors cut paper, you lose!"
                computerScore ++;
                break;
        }
    } else if (player == "Scissors") {
        switch (computer) {
            case "Rock":
                result = "Rock breaks Scissors, you lose!";
                computerScore ++;
                break;
            case "Paper":
                result = "Scissors cut paper, you win!";
                playerScore ++;
                break;
            case "Scissors":
                result = "It's a tie!"
                break;
        }
    } else {
        result = "You entered an invalid tool, so you lose!"
    }

    console.log(result);

}

function playGame() {
    // Play the game until someone has 5 points.

    let winMessage;

    while (playerScore < 5 && computerScore < 5) {
        playRound(getPlayerChoice(), getComputerChoice())
    }

    if (playerScore == 5) {
        winMessage = "*** Player Wins ***";
    }

    if (computerScore == 5) {
        winMessage = "*** Computer Wins ***";
    }

    return winMessage;
}

console.log(playGame());