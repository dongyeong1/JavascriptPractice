// const GAME_TIME=3

let score = 0;
let time = 9;
let isplaying = false;
let timeInterval;
let words = [];
let checkInterval;

const wordInput = document.querySelector(".word-input");
const wordDisplay = document.querySelector(".word-display");
const scoreDisplay = document.querySelector(".score");
const timeDisplay = document.querySelector(".time");
const button = document.querySelector(".button");

// setInterval(countDown, 1000);

init();
function init() {
    getWords();
    wordInput.addEventListener("input", () => {
        console.log(wordInput.value);

        if (
            wordInput.value.toLowerCase() ===
            wordDisplay.innerText.toLowerCase()
        ) {
            wordInput.value = "";

            if (!isplaying) {
                return;
            }
            score++;
            scoreDisplay.innerText = score;
            timeDisplay.innerText = 9;
            const randomIndex = Math.floor(Math.random() * words.length);
            wordDisplay.innerText = words[randomIndex];
        }
    });
}

function run() {
    alert("클릭");
    if (isplaying) {
        return;
    }
    isplaying = true;
    wordInput.focus();
    scoreDisplay.innerText = 0;
    time = 9;
    timeInterval = setInterval(countDown, 1000);
    checkInterval = setInterval(checkStatus, 50);
    buttonChange("게임중");
}

function checkStatus() {
    if (!isplaying && time === 0) {
        buttonChange("게임시작");
        clearInterval(checkInterval);
    }
}

function getWords() {
    words = ["hello", "bannaa", "apple"];
    buttonChange("게임시작");
}

function countDown() {
    time > 0 ? time-- : (isplaying = false);
    if (!isplaying) {
        clearInterval(timeInterval);
    }
    timeDisplay.innerText = time;
}

function buttonChange(text) {
    button.innerText = text;
    text === "게임시작"
        ? button.classList.remove("loading")
        : button.classList.add("loading");
}
