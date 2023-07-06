// SITE JAVASCRIPT
console.log('Welcome to RPS...');

// for arrow hover effect
const toTop = document.getElementById("arrow");
toTop.addEventListener("mouseenter", (event) => {toTop.classList.toggle('fa-bounce')});
toTop.addEventListener("mouseleave", (event) => {toTop.classList.toggle('fa-bounce')});

// set game vars
let numThrows = 0;
let humanScore = 0;
let computerScore = 0;
let humanMessage = "";
let computerMessage = "";
let roundMessage = "";

// set score areas
const humanScoreArea = document.getElementById("human-score");
const computerScoreArea = document.getElementById("computer-score");

// set message areas
const humanMessageArea = document.getElementById("human-message");
const computerMessageArea = document.getElementById("computer-message");
const roundMessageArea = document.getElementById("round-message");

// set up player buttons
const playerRock = document.getElementById("player-rock");
const playerPaper = document.getElementById("player-paper");
const playerScissors = document.getElementById("player-scissors");

// set up player button hovers (enter/leave)
// rock
playerRock.addEventListener("mouseenter", (event) => {playerRock.classList.toggle('fa-shake')});
playerRock.addEventListener("mouseleave", (event) => {playerRock.classList.toggle('fa-shake')});
// paper
playerPaper.addEventListener("mouseenter", (event) => {playerPaper.classList.toggle('fa-shake')});
playerPaper.addEventListener("mouseleave", (event) => {playerPaper.classList.toggle('fa-shake')});
//scissors
playerScissors.addEventListener("mouseenter", (event) => {playerScissors.classList.toggle('fa-shake')});
playerScissors.addEventListener("mouseleave", (event) => {playerScissors.classList.toggle('fa-shake')});

// set up player button click
playerRock.addEventListener("click", function(){
    playRound("Rock");
});
playerPaper.addEventListener("click", function(){
    playRound("Paper");
});
playerScissors.addEventListener("click", function(){
    playRound("Scissors");
});

// we start a game by hiding the game buttons and revealing the game area.
const buttonArea = document.getElementById("button-area");
const gameArea = document.getElementById("game-area");
// start a game
const startGame = document.getElementById("start");
startGame.addEventListener("click", function(){
    startRound();
});

// clear the score
const clearScore = document.getElementById("clear-score");
clearScore.addEventListener("click", function(){
    clearTheScore();
});

// FUNCTIONS

function clearTheScore() {
    updateScore(0,0);
    humanMessage = "You are... waiting to throw!";
    computerMessage = "Computer is... ready to throw!";
    roundMessage = "Scoreboard is all clear!"
    updateMessage(humanMessage, computerMessage, roundMessage);
}

function updateScore(humanScore, computerScore) {
    humanScoreArea.textContent = humanScore;
    computerScoreArea.textContent = computerScore;
}

function updateMessage(humanMessage, computerMessage, roundMessage) {
    humanMessageArea.textContent = humanMessage;
    computerMessageArea.textContent = computerMessage;
    roundMessageArea.textContent = roundMessage;
}

function startRound() {

    humanMessage = "You are... waiting to throw!";
    computerMessage = "Computer is... ready to throw!";

    roundMessage = "Shake and throw and.... good luck!";

    updateScore(humanScore, computerScore);
    updateMessage(humanMessage, computerMessage, roundMessage);
   
    buttonArea.style.display = "none";
    gameArea.style.display = "flex";

}

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

    computerMessage = `Computer chose ${computerChoice}`;
    return computerChoice;
}

function playRound(player) {
    // Compare choices and determine winner

    humanMessage = `You chose ${player}`;
    let computer = getComputerChoice();

    if (player == "Rock") {
        switch (computer) {
            case "Rock":
                roundMessage = "This round is a tie!";
                break;
            case "Paper":
                roundMessage = "Paper wraps Rock, you lose!";
                computerScore ++;
                break;
            case "Scissors":
                roundMessage = "Rock breaks Scissors, you win!"
                humanScore ++;
                break;     
        }
    } else if (player == "Paper") {
        switch (computer) {
            case "Rock":
                roundMessage = "Paper wraps Rock, you win!";
                humanScore ++;
                break;
            case "Paper":
                roundMessage = "This round is a tie!";
                break;
            case "Scissors":
                roundMessage = "Scissors cut paper, you lose!"
                computerScore ++;
                break;
        }
    } else if (player == "Scissors") {
        switch (computer) {
            case "Rock":
                roundMessage = "Rock breaks Scissors, you lose!";
                computerScore ++;
                break;
            case "Paper":
                roundMessage = "Scissors cut paper, you win!";
                humanScore ++;
                break;
            case "Scissors":
                roundMessage = "This round is a tie!"
                break;
        }
    }
    updateScore(humanScore, computerScore);
    updateMessage(humanMessage, computerMessage, roundMessage);
}
