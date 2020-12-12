const chronometer = new Chronometer();

// get the buttons:
const btnLeft = document.getElementById("btnLeft");
const btnRight = document.getElementById("btnRight");

// get the DOM elements that will serve us to display the time:
let minDec = document.getElementById("minDec");
let minUni = document.getElementById("minUni");
let secDec = document.getElementById("secDec");
let secUni = document.getElementById("secUni");
let milDec = document.getElementById("milDec");
let milUni = document.getElementById("milUni");
let splits = document.getElementById("splits");

function printTime() {
  printMinutes();
  printSeconds();
  printMilliseconds();
}

function printMinutes() {
  const minutes = chronometer.twoDigitsNumber(chronometer.getMinutes());
  minDec.innerText = minutes[0];
  minUni.innerText = minutes[1];
}

function printSeconds() {
  const seconds = chronometer.twoDigitsNumber(chronometer.getSeconds());
  secDec.innerText = seconds[0];
  secUni.innerText = seconds[1];
}

// ==> BONUS
function printMilliseconds() {
  const milliseconds = chronometer.twoDigitsNumber(
    Math.floor(chronometer.getMilliseconds() / 10)
  );
  milDec.innerText = milliseconds[0];
  milUni.innerText = milliseconds[1];
}

function printSplit() {
  const split = document.createElement("li");
  split.innerText = chronometer.splitClick();
  splits.appendChild(split);
}

function clearSplits() {
  splits.innerHTML = "";
}

function setStopBtn() {
  btnLeft.innerText = "STOP";
  btnLeft.classList.toggle("start");
  btnLeft.classList.toggle("stop");
}

function setSplitBtn() {
  btnRight.innerText = "SPLIT";
  btnRight.classList.toggle("reset");
  btnRight.classList.toggle("split");
}

function setStartBtn() {
  btnLeft.innerText = "START";
  btnLeft.classList.toggle("stop");
  btnLeft.classList.toggle("start");
}

function setResetBtn() {
  btnRight.innerText = "RESET";
  btnRight.classList.toggle("split");
  btnRight.classList.toggle("reset");
}

// Start/Stop Button
btnLeft.addEventListener("click", () => {
  if (btnLeft.innerText === "START") {
    setStopBtn();
    setSplitBtn();
    chronometer.startClick(printTime);
  } else {
    setStartBtn();
    setResetBtn();
    chronometer.stopClick();
  }
});

// Reset/Split Button
btnRight.addEventListener("click", () => {
  if (btnRight.innerText === "SPLIT") {
    printSplit();
  } else {
    clearSplits();
    chronometer.resetClick();
    printTime();
  }
});
