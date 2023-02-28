// javascript code goes here
let time = 0;
let intervalId;
let isPaused = false;

const stopwatch = document.getElementById("stopwatch");
const timeDisplay = document.getElementById("time");
const startBtn = document.getElementById("start");
const pauseBtn = document.getElementById("pause");
const stopBtn = document.getElementById("stop");

function updateTime() {
  let hours = Math.floor(time / 3600);
  let minutes = Math.floor((time % 3600) / 60);
  let seconds = time % 60;
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  timeDisplay.innerText = `${hours}:${minutes}:${seconds}`;
}

function startStopwatch() {
  startBtn.disabled = true;
  pauseBtn.disabled = false;
  stopBtn.disabled = false;
  isPaused = false;
  intervalId = setInterval(() => {
    time++;
    updateTime();
  }, 1000);
}

function pauseStopwatch() {
  clearInterval(intervalId);
  pauseBtn.innerText = "Continue";
  isPaused = true;
}

function continueStopwatch() {
  intervalId = setInterval(() => {
    time++;
    updateTime();
  }, 1000);
  pauseBtn.innerText = "Pause";
  isPaused = false;
}

function stopStopwatch() {
  clearInterval(intervalId);
  time = 0;
  updateTime();
  startBtn.disabled = false;
  pauseBtn.disabled = true;
  stopBtn.disabled = true;
  pauseBtn.innerText = "Pause";
}

startBtn.addEventListener("click", startStopwatch);
pauseBtn.addEventListener("click", () => {
  if (isPaused) {
    continueStopwatch();
  } else {
    pauseStopwatch();
  }
});
stopBtn.addEventListener("click", stopStopwatch);