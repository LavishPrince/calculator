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

function changeSign(n) {
  return -1 * n;
}

const userInput = document.querySelector(".input");

userInput.addEventListener("click", (event) => {
  alert(event.target.textContent);
});
