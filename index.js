//Global variables for chore chart
const pottyCounter = selectComponent("potty-count");
const lunchCounter = selectComponent("lunch-count");
const bedCounter = selectComponent("bed-count");
const feedCounter = selectComponent("feed-count");
const readCounter = selectComponent("read-count");
const totalCounter = selectComponent("total-count");
const getPrize = selectComponent("get-prize");
let total = 0;
let count;

//Global variables for timer
const timerSpan = selectComponent("time");
let initialMinutes = 20;
let totalSeconds = initialMinutes * 60;
let paused = true;
let timer;

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
  localStorage.setItem("count", JSON.stringify(count));
}

//Resets individual chore counter
function reset(elementId) {
  localStorage.clear();
  count = 0;
  selectComponent(elementId).textContent = count;
  getPrize.textContent = "";
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

  localStorage.setItem("total", JSON.stringify(total));

  if (total >= 15) {
    getPrize.textContent = "See Mama for a Prize";
  }
}

// Sets initial time calculations
function setTimeCalculations() {
  let minutes = Math.floor(totalSeconds / 60);
  let seconds = totalSeconds % 60;

  timerSpan.textContent = `${minutes}:${(seconds =
    seconds < 10 ? "0" + seconds : seconds)}`;
}

//Starts Timer
function startTimer() {
  if (paused) {
    paused = false;
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
  totalSeconds--;
  setTimeCalculations();

  if (totalSeconds === 0) {
    paused = true;
    clearInterval(timer);
  }
}
