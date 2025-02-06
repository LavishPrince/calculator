const userInput = document.querySelector(".input");

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return Math.round(a / b);
}

function reminder(a, b) {
  return a % b;
}

userInput.addEventListener("click", (event) => {
  alert(event.target.textContent);
});
