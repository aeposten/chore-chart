let pottyCounter = document.getElementById("potty-count");
let lunchCounter = document.getElementById("lunch-count");
let bedCounter = document.getElementById("bed-count");
let feedCounter = document.getElementById("feed-count");
let readCounter = document.getElementById("read-count");
let totalCounter = document.getElementById("total-count");
let total = 0;
let count;

let timer;
let timerSpan = document.getElementById("time");
let initialMinutes = 20;
let totalSeconds = initialMinutes * 60;
let paused = true;

function selectComponent(elementId) {
  let component = document.getElementById(elementId);
  return component;
}

function increment(elementId) {
  count = parseInt(selectComponent(elementId).textContent);
  count += 1;
  selectComponent(elementId).textContent = count;
}

function reset(elementId) {
  count = 0;
  selectComponent(elementId).textContent = count;
}

function updateTotal() {
  total =
    parseInt(pottyCounter.textContent) +
    parseInt(lunchCounter.textContent) +
    parseInt(bedCounter.textContent) +
    parseInt(feedCounter.textContent) +
    parseInt(readCounter.textContent);
  totalCounter.textContent = total;
}

//Starts Timer

function startTimer() {
  if (paused) {
    paused = false;
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;
  
    seconds = seconds < 10 ? "0" + seconds : seconds;
  
    timerSpan.textContent = `${minutes}:${seconds}`;
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
    initialMinutes = 20;
    totalSeconds = initialMinutes * 60;
    timerSpan.textContent = `${initialMinutes}:00`;
}

function countdown() {
  let minutes = Math.floor(totalSeconds / 60);
  let seconds = totalSeconds % 60;

  seconds = seconds < 10 ? "0" + seconds : seconds;

  timerSpan.textContent = `${minutes}:${seconds}`;
  totalSeconds--;

  if (totalSeconds === 0) {
    paused = true;
    clearInterval(timer);
  }
  console.log(totalSeconds);
}
