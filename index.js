let pottyCounter= document.getElementById("potty-count");
let lunchCounter= document.getElementById("lunch-count")
let bedCounter= document.getElementById("bed-count");

let count;

// function incrementLunch() {
//     lunchCount += 1
//     lunchCounter.textContent = lunchCount;
// }

function selectComponent (elementId) {
    let component = document.getElementById(elementId);
    return component;
}

function increment (elementId) {
    count =  parseInt(selectComponent(elementId).textContent);
    count += 1
    selectComponent(elementId).textContent = count;
   console.log(count)
}

function reset (elementId) {
    
}