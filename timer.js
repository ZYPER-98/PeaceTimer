let twentySecondsBtnEl = document.getElementById("twentySecondsBtn");
let thirtySecondsBtnEl = document.getElementById("thirtySecondsBtn");
let fortySecondsBtnEl = document.getElementById("fortySecondsBtn");
let oneMinuteBtnEl = document.getElementById("oneMinuteBtn");
let timerTextEl = document.getElementById("timerText");

let timerId, count = 0;

function clearPreviousTimer() {
    clearInterval(timerId);
}

function startTimer() {
    if (count > 1) {
        count -= 1;
        timerTextEl.textContent = count + " seconds left";
    } else {
        clearPreviousTimer();
        timerTextEl.textContent = "Your moment is complete";
    }
}

function setTimerAndShow() {
    timerTextEl.textContent = count + " seconds left";
    timerId = setInterval(startTimer, 1000);
}

twentySecondsBtnEl.onclick = function() {
    count = 20;
    clearPreviousTimer();
    setTimerAndShow();
};

thirtySecondsBtnEl.onclick = function() {
    count = 30;
    clearPreviousTimer();
    setTimerAndShow();
};

fortySecondsBtnEl.onclick = function() {
    count = 40;
    clearPreviousTimer();
    setTimerAndShow();
};

oneMinuteBtnEl.onclick = function() {
    count = 60;
    clearPreviousTimer();
    setTimerAndShow();
};