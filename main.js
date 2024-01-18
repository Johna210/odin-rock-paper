import { getComputerChoice, playGame } from "./index.js";

const icons = document.querySelector(".icons");
const cpuDiv = document.querySelector(".cpu-choice");
const messageBox = document.getElementById("message-box");
const playerScore = document.getElementById("player-score");
const cpuScore = document.getElementById("computer-score");
const modal = document.getElementById("myModal");
const span = document.getElementsByClassName("close")[0];
const result = document.getElementById("result");

function createIcon(classes) {
    const icon = document.createElement("i");
    icon.classList = classes;

    return icon;
}

function generateIconClasses(choice) {
    const ROCK = "fa-solid fa-hand-back-fist icon";
    const PAPER = "fa-solid fa-hand icon";
    const SCISSORS = "fa-solid fa-hand-scissors icon";

    switch (choice) {
        case "ROCK":
            return ROCK;
        case "PAPER":
            return PAPER;
        case "SCISSORS":
            return SCISSORS;
        default:
            return null;
    }
}

function displayMessage(message) {
    messageBox.textContent = message;
}

function scoreBoard(value) {
    if (value === 1) {
        let score = parseInt(playerScore.textContent);
        score += 1;
        playerScore.textContent = score;
    } else if (value === 0) {
        let score = parseInt(cpuScore.textContent);
        score += 1;
        cpuScore.textContent = score;
    }
}

function displayResult(res) {
    console.log(res);
    if (res) {
        modal.style.display = "block";
        result.textContent = "You Won This Game!";
    } else {
        modal.style.display = "block";
        result.textContent = "You Lost ";
    }
}

function checkWinner() {
    const player = parseInt(playerScore.textContent);
    const cpu = parseInt(cpuScore.textContent);

    if (player >= 5 || cpu >= 5) {
        if (player > cpu) {
            displayResult(true);
        } else {
            displayResult(false);
        }
    }
}

icons.addEventListener("click", (e) => {
    const choice = e.target.id;
    const cpuChoice = getComputerChoice();

    // Generate the icon for cpu choice
    const classes = generateIconClasses(cpuChoice);
    const icon = createIcon(classes);

    // Clear the div
    while (cpuDiv.firstChild) {
        cpuDiv.removeChild(cpuDiv.firstChild);
    }
    cpuDiv.appendChild(icon);

    // Simulate Game
    const values = playGame(choice, cpuChoice);

    displayMessage(values[0]);
    scoreBoard(values[1]);

    checkWinner();
});

span.onclick = function () {
    modal.style.display = "none";
    window.location.reload();
};
