import { getComputerChoice, playGame } from "./index.js";

const icons = document.querySelector(".icons");
const cpuDiv = document.querySelector(".cpu-choice");
const messageBox = document.getElementById("message-box");
const playerScore = document.getElementById("player-score");
const cpuScore = document.getElementById("computer-score");

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

icons.addEventListener("click", (e) => {
    const choice = e.target.id;

    const cpuChoice = getComputerChoice();

    const classes = generateIconClasses(cpuChoice);
    const icon = createIcon(classes);
    while (cpuDiv.firstChild) {
        cpuDiv.removeChild(cpuDiv.firstChild);
    }
    cpuDiv.appendChild(icon);

    const values = playGame(choice, cpuChoice);
    console.log(values);
    console.log(choice, cpuChoice);

    displayMessage(values[0]);
    scoreBoard(values[1]);
});
