let pottyCounter = document.getElementById("potty-count");
let lunchCounter = document.getElementById("lunch-count");
let bedCounter = document.getElementById("bed-count");
let feedCounter = document.getElementById("feed-count");
let readCounter = document.getElementById("read-count");
let totalCounter = document.getElementById("total-count");
let total = 0;
let count;

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
