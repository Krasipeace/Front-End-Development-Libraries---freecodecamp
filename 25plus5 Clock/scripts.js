const breakLength = document.querySelector("#break-length");
const sessionLength = document.querySelector("#session-length");
const timeLeft = document.querySelector("#time-left");
const timerLabel = document.querySelector("#timer-label");
const startStopButton = document.querySelector("#start_stop");
const resetButton = document.querySelector("#reset");
const beepSound = document.querySelector("#beep");

let breakLengthValue = parseInt(breakLength.textContent);
let sessionLengthValue = parseInt(sessionLength.textContent);
let timeLeftValue = sessionLengthValue * 60;
let isSession = true;
let isRunning = false;
let timer;

function updateDisplay() {
    let minutes = Math.floor(timeLeftValue / 60);
    let seconds = timeLeftValue % 60;
    timeLeft.textContent = `${minutes < 10 ? "0" : ""}${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
    timerLabel.textContent = isSession ? "Session" : "Break";
}

function startStopTimer() {
    if (isRunning) {
        clearInterval(timer);
        isRunning = false;
    } else {
        timer = setInterval(() => {
            timeLeftValue--;
            
            if (timeLeftValue < 0) {
                beepSound.play();
                isSession = !isSession;
                timeLeftValue = isSession ? sessionLengthValue * 60 : breakLengthValue * 60;
            }

            updateDisplay();
        }, 1000);
        isRunning = true;
    }
}

function resetTimer() {
    clearInterval(timer);
    isRunning = false;
    isSession = true;
    breakLengthValue = 5;
    breakLength.textContent = breakLengthValue;
    sessionLengthValue = 25;
    sessionLength.textContent = sessionLengthValue;
    timeLeftValue = sessionLengthValue * 60;
    updateDisplay();
    beepSound.pause();
    beepSound.currentTime = 0;
}

document.querySelector("#break-increment").addEventListener("click", () => {
    if (breakLengthValue < 60) {
        breakLengthValue++;
        breakLength.textContent = breakLengthValue;

        if (!isSession) {
            timeLeftValue = breakLengthValue * 60;
            updateDisplay();
        }
    }
});

document.querySelector("#break-decrement").addEventListener("click", () => {
    if (breakLengthValue > 1) {
        breakLengthValue--;
        breakLength.textContent = breakLengthValue;

        if (!isSession) {
            timeLeftValue = breakLengthValue * 60;
            updateDisplay();
        }
    }
});

document.querySelector("#session-increment").addEventListener("click", () => {
    if (sessionLengthValue < 60) {
        sessionLengthValue++;
        sessionLength.textContent = sessionLengthValue;

        if (isSession) {
            timeLeftValue = sessionLengthValue * 60;
            updateDisplay();
        }
    }
});

document.querySelector("#session-decrement").addEventListener("click", () => {
    if (sessionLengthValue > 1) {
        sessionLengthValue--;
        sessionLength.textContent = sessionLengthValue;

        if (isSession) {
            timeLeftValue = sessionLengthValue * 60;
            updateDisplay();
        }
    }
});

startStopButton.addEventListener("click", startStopTimer);
resetButton.addEventListener("click", resetTimer);
