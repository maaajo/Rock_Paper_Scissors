const possibleSelections = ["rock", "paper", "scissors"];
const gameIcons = {
    "rock": "<i class=\"fas fa-hand-rock game-outcome-icon\"></i>",
    "paper": "<i class=\"fas fa-hand-paper game-outcome-icon\"></i>",
    "scissors": "<i class=\"fas fa-hand-scissors game-outcome-icon\"></i>"
}
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
    gameOutcomeMessage.innerHTML = message;
}

function singleRoundGame (playerSelection, computerSelection) {
    changeRound();
    if (playerSelection.toLowerCase() === "rock".toLowerCase() && computerSelection.toLowerCase() === "scissors".toLowerCase()) {
        let gameOutcome = "<span class=\"win\">Round: " + round + "<br>You win!<br>Your selection: " + gameIcons[playerSelection.toLowerCase()] + ", beats Computer selection: " + gameIcons[computerSelection.toLowerCase()] + "</span>";
        givePlayerPoint();
        updateScore("player");
        updateGameOutcomeMessage(gameOutcome);
    }
    else if (playerSelection.toLowerCase() === "rock".toLowerCase() && computerSelection.toLowerCase() === "paper".toLowerCase()) {
        let gameOutcome = "<span class=\"lose\">Round: " + round + "<br>" + "You lose!<br>Computer selection: " + gameIcons[computerSelection.toLowerCase()] + ", beats Your selection: " + gameIcons[playerSelection.toLowerCase()] + "</span>";
        giveComputerPoint();
        updateScore("computer");
        updateGameOutcomeMessage(gameOutcome);
    }
    else if (playerSelection.toLowerCase() === "paper".toLowerCase() && computerSelection.toLowerCase() === "rock".toLowerCase()) {
        let gameOutcome = "<span class=\"win\">Round: " + round + "<br>" + "You win!<br>Your selection: " + gameIcons[playerSelection.toLowerCase()] + ", beats Computer selection: " + gameIcons[computerSelection.toLowerCase()] + "</span>";
        givePlayerPoint();
        updateScore("player");
        updateGameOutcomeMessage(gameOutcome);
    }
    else if (playerSelection.toLowerCase() === "paper".toLowerCase() && computerSelection.toLowerCase() === "scissors".toLowerCase()) {
        let gameOutcome = "<span class=\"lose\">Round: " + round + "<br>" + "You lose!<br>Computer selection: " + gameIcons[computerSelection.toLowerCase()] + ", beats Your selection: " + gameIcons[playerSelection.toLowerCase()] + "</span>";
        giveComputerPoint();
        updateScore("computer");
        updateGameOutcomeMessage(gameOutcome);
    }
    else if (playerSelection.toLowerCase() === "scissors".toLowerCase() && computerSelection.toLowerCase() === "rock".toLowerCase()) {
        let gameOutcome = "<span class=\"lose\">Round: " + round + "<br>" + "You lose!<br>Computer selection: " + gameIcons[computerSelection.toLowerCase()] + ", beats Your selection: " + gameIcons[playerSelection.toLowerCase()] + "</span>";
        giveComputerPoint();
        updateScore("computer");
        updateGameOutcomeMessage(gameOutcome);
    }
    else if (playerSelection.toLowerCase() === "scissors".toLowerCase() && computerSelection.toLowerCase() === "paper".toLowerCase()) {
        let gameOutcome =  "<span class=\"win\">Round: " + round + "<br>" + "You win!<br>Your selection: " + gameIcons[playerSelection.toLowerCase()] + ", beats Computer selection: " + gameIcons[computerSelection.toLowerCase()] + "</span>";
        givePlayerPoint();
        updateScore("player");
        updateGameOutcomeMessage(gameOutcome);
    }
    else {
        let gameOutcome =  "Round: " + round + "<br>" + "Draw!<br>" + gameIcons[playerSelection.toLowerCase()] + " = " + gameIcons[computerSelection.toLowerCase()];
        updateGameOutcomeMessage(gameOutcome);
    }
}

function runGame(buttonId) {
    let playerSelection = getPlayerSelection(buttonId);
    let computerSelection = computerPlay();
    singleRoundGame(playerSelection, computerSelection);
}

