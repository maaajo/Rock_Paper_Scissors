const possibleSelections = ["rock", "paper", "scissors"];
let playerScore = 0
let computerScore = 0;
let round = 0;

function getPlayerSelection(buttonId) {
    return buttonId[0].toUpperCase() + buttonId.slice(1).toLowerCase();
}

function computerPlay () {
    let randomNumber = Math.floor(Math.random() * possibleSelections.length);
    return possibleSelections[randomNumber][0].toUpperCase() + possibleSelections[randomNumber].slice(1).toLowerCase();
}

function givePlayerPoint() {
    playerScore++;
}

function giveComputerPoint() {
    computerScore++;
}

function changeRound() {
    round++;
}

function updateScore(winner) {
    const playerScoreDisplay = document.querySelector("#player_score");
    const computerScoreDisplay = document.querySelector("#computer_score");
    if (winner === "player") {
        playerScoreDisplay.textContent = playerScore;
    } else {
        computerScoreDisplay.textContent = computerScore;
    }
}

function updateGameOutcomeMessage(message) {
    const gameOutcomeMessage = document.querySelector("#game-outcome")
    gameOutcomeMessage.textContent = message;
}

function singleRoundGame (playerSelection, computerSelection) {
    changeRound();
    if (playerSelection.toLowerCase() === "rock".toLowerCase() && computerSelection.toLowerCase() === "scissors".toLowerCase()) {
        let gameOutcome = "Round: " + round + ". You win! Your selection: " + playerSelection + ", beats Computer selection: " + computerSelection;
        givePlayerPoint();
        updateScore("player");
        updateGameOutcomeMessage(gameOutcome);
    }
    else if (playerSelection.toLowerCase() === "rock".toLowerCase() && computerSelection.toLowerCase() === "paper".toLowerCase()) {
        let gameOutcome = "Round: " + round + ". You lose! Computer selection: " + computerSelection + ", beats Your selection: " + playerSelection;
        giveComputerPoint();
        updateScore("computer");
        updateGameOutcomeMessage(gameOutcome);
    }
    else if (playerSelection.toLowerCase() === "paper".toLowerCase() && computerSelection.toLowerCase() === "rock".toLowerCase()) {
        let gameOutcome = "Round: " + round + ". You win! Your selection: " + playerSelection + ", beats Computer selection: " + computerSelection;
        givePlayerPoint();
        updateScore("player");
        updateGameOutcomeMessage(gameOutcome);
    }
    else if (playerSelection.toLowerCase() === "paper".toLowerCase() && computerSelection.toLowerCase() === "scissors".toLowerCase()) {
        let gameOutcome = "Round: " + round + ". You lose! Computer selection: " + computerSelection + ", beats Your selection: " + playerSelection;
        giveComputerPoint();
        updateScore("computer");
        updateGameOutcomeMessage(gameOutcome);
    }
    else if (playerSelection.toLowerCase() === "scissors".toLowerCase() && computerSelection.toLowerCase() === "rock".toLowerCase()) {
        let gameOutcome = "Round: " + round + ". You lose! Computer selection: " + computerSelection + ", beats Your selection: " + playerSelection;
        giveComputerPoint();
        updateScore("computer");
        updateGameOutcomeMessage(gameOutcome);
    }
    else if (playerSelection.toLowerCase() === "scissors".toLowerCase() && computerSelection.toLowerCase() === "paper".toLowerCase()) {
        let gameOutcome =  "Round: " + round + ". You win! Your selection: " + playerSelection + ", beats Computer selection: " + computerSelection;
        givePlayerPoint();
        updateScore("player");
        updateGameOutcomeMessage(gameOutcome);
    }
    else {
        let gameOutcome =  "Round: " + round + ". Draw!";
        updateGameOutcomeMessage(gameOutcome);
    }
}

function runGame(buttonId) {
    let playerSelection = getPlayerSelection(buttonId);
    let computerSelection = computerPlay();
    singleRoundGame(playerSelection, computerSelection);
}

