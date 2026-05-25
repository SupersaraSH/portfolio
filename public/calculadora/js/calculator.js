document.addEventListener("DOMContentLoaded", () => {
  initAudioToggle();
});

function addSymbol(text) {
  document.getElementById("screen").value += text;
}

function clearScreen() {
  document.getElementById("screen").value = "";

  let hideBoxes = document.querySelectorAll(".limb-hide");
  let rboxes = document.querySelectorAll(".red-box");
  let unhideBoxes = document.querySelectorAll(".limb-unhide");
  let unhideRedBoxes = document.querySelectorAll(".limb-unhide-red");

  if (rboxes.length > 0) {
    for (let box of rboxes) {
      box.classList.add("green-box");
      box.classList.remove("red-box");
    }
    for (let rbox of unhideRedBoxes) {
      rbox.classList.add("limb-unhide");
      rbox.classList.remove("limb-unhide-red");
    }
  } else {
    for (let ubox of unhideBoxes) {
      ubox.classList.add("limb-hide");
      ubox.classList.remove("limb-unhide");
    }
    for (let hbox of hideBoxes) {
      hbox.classList.add("limb-unhide");
      hbox.classList.remove("limb-hide");
    }
  }
}

function calculate() {
  let result = "GAME OVER";
  let operation = document.getElementById("screen").value;
  let position = -1;

  for (let i = 0; i < operation.length && position == -1; i++) {
    if (isNaN(operation[i]) == false && isNaN(operation[i + 1]) == true) {
      position = i + 1;
    }
  }

  let num1 = operation.slice(0, position);
  let num2 = operation.slice(position + 1);
  let operator = operation[position];

  if (checkNumber(num1) == true && checkNumber(num2) == true) {
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    result = doOperation(operator, num1, num2);
  }

  document.getElementById("screen").value = result;

  let boxes = document.querySelectorAll(".green-box");
  let rboxes = document.querySelectorAll(".limb-unhide");

  if (result == "GAME OVER") {
    for (let box of boxes) {
      box.classList.add("red-box");
      box.classList.remove("green-box");
    }
    for (let rbox of rboxes) {
      rbox.classList.add("limb-unhide-red");
      rbox.classList.remove("limb-unhide");
    }
  } else if (isNaN(result) == false) {
    let unhideBoxes = document.querySelectorAll(".limb-unhide");
    let hideBoxes = document.querySelectorAll(".limb-hide");

    for (let ubox of unhideBoxes) {
      ubox.classList.add("limb-hide");
      ubox.classList.remove("limb-unhide");
    }
    for (let hbox of hideBoxes) {
      hbox.classList.add("limb-unhide");
      hbox.classList.remove("limb-hide");
    }
  }

  playSound(result);
}

function playSound(res) {
  let winAudio = document.getElementById("win");
  let overAudio = document.getElementById("over");

  if (isNaN(res) == false) {
    winAudio.play();
  } else if (res == "GAME OVER") {
    overAudio.play();
  }
}

function doOperation(op, n1, n2) {
  let res = "GAME OVER";
  switch (op) {
    case "-":
      res = n1 - n2;
      break;
    case "+":
      res = n1 + n2;
      break;
    case "*":
      res = n1 * n2;
      break;
    case "/":
      res = n2 === 0 ? "GAME OVER" : n1 / n2;
      break;
  }
  return res;
}

function checkNumber(n) {
  if (n.length === 0) return false;

  let start = (n[0] === "-" || n[0] === "+") ? 1 : 0;

  for (let i = start; i < n.length; i++) {
    if (isNaN(n[i])) return false;
  }

  return true;
}

function initAudioToggle() {
  const btn = document.getElementById("audioBtn");
  btn.addEventListener("click", toggleAudio);
  toggleAudio();
}

function toggleAudio() {
  const audio = document.getElementById("audio");
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
}
