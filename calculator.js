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

function operate(operator, a, b) {
  switch (operator) {
    case "+": {
      add(a, b);
      break;
    }
    case "-": {
      subtract(a, b);
      break;
    }
    case "×": {
      multiply(a, b);
      break;
    }
    case "÷": {
      divide(a, b);
      break;
    }
    case "%": {
      reminder(a, b);
      break;
    }
    case "±": {
      changeSign(parseInt(currentNumber));
    }
  }
}

function handleNumbers(n) {
  currentNumber += n;
  console.log(currentNumber);
}
function handleSymbols(s) {
  currentOperator = s;
  console.log(currentOperator);
}

function handleButtonClick(element) {
  if (isNaN(parseInt(element.textContent))) handleSymbols(element.textContent);
  else handleNumbers(element.textContent);
}

const userInput = document.querySelector(".input");
let currentNumber = "";
let currentOperator = undefined;
let previousNumber = "";

userInput.addEventListener("click", (event) => {
  handleButtonClick(event.target);
});
