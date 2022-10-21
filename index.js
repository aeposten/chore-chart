//Global variables for chore chart
let pottyCounter = selectComponent("potty-count");
let lunchCounter = selectComponent("lunch-count");
let bedCounter = selectComponent("bed-count");
let feedCounter = selectComponent("feed-count");
let readCounter = selectComponent("read-count");
let totalCounter = selectComponent("total-count");
let total = 0;
let count;

//Global variables for timer
let timer;
let timerSpan = selectComponent("time");
let initialMinutes = 20;
let totalSeconds = initialMinutes * 60;
let paused = true;


//Gets component by id
function selectComponent(elementId) {
  let component = document.getElementById(elementId);
  return component;
}

//Increments individual chore counter
function increment(elementId) {
  count = parseInt(selectComponent(elementId).textContent);
  count += 1;
  selectComponent(elementId).textContent = count;
}

//Resets individual chore counter
function reset(elementId) {
  count = 0;
  selectComponent(elementId).textContent = count;
}

//Updates total number of chores completed
function updateTotal() {
  total =
    parseInt(pottyCounter.textContent) +
    parseInt(lunchCounter.textContent) +
    parseInt(bedCounter.textContent) +
    parseInt(feedCounter.textContent) +
    parseInt(readCounter.textContent);
  totalCounter.textContent = total;
}

// Sets initial time calculations
function setTimeCalculations() {
  let minutes = Math.floor(totalSeconds / 60);
  let seconds = totalSeconds % 60;

  seconds = seconds < 10 ? "0" + seconds : seconds;

  timerSpan.textContent = `${minutes}:${seconds}`;
}


//Starts Timer
function startTimer() {
  if (paused) {
    paused = false;
    setTimeCalculations();
    timer = setInterval(countdown, 1000);
  }
}

//Pauses Timer
function pauseTimer() {
  paused = true;
  if (timer) {
    clearInterval(timer);
  }
}

//Resets Timer
function resetTimer() {
  paused = true;
  clearInterval(timer);
  totalSeconds = initialMinutes * 60;
  timerSpan.textContent = `${initialMinutes}:00`;
}


//Starts Countdown
function countdown() {
  setTimeCalculations();
  totalSeconds--;

  if (totalSeconds === 0) {
    paused = true;
    clearInterval(timer);
  }
  console.log(totalSeconds);
}
