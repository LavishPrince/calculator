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
  return Math.round((a / b) * 100) / 100;
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
      return add(a, b);
    }
    case "-": {
      return subtract(a, b);
    }
    case "×": {
      return multiply(a, b);
    }
    case "÷": {
      return divide(a, b);
    }
    case "%": {
      return reminder(a, b);
    }
    case "±": {
      return changeSign(parseInt(currentNumber));
    }
  }
}

function handleNumbers(n) {
  if (parseInt(currentNumber) === 0) {
    currentNumber = n;
    return;
  }
  currentNumber += n;
}

function handleCalculation(s) {
  previousNumber =
    Math.round(
      operate(
        currentOperator,
        parseFloat(previousNumber),
        parseFloat(currentNumber),
      ) * 100,
    ) / 100;
  previousNumber = previousNumber.toString();
  if (s === "=") {
    currentNumber = previousNumber;
    previousNumber = "";
    currentOperator = undefined;
    return;
  }
  currentOperator = s;
  currentNumber = "";
}

function handleDivideByZero() {
  document.querySelector(".display").textContent = "";
  document.querySelector(".result").textContent = "you cannot divide by 0";
  calculatorPause = true;
  currentNumber = "";
  previousNumber = "";
  currentOperator = undefined;
}

function handleSymbols(s) {
  if (s === "C") {
    currentOperator = undefined;
    currentNumber = "";
    previousNumber = "";
  } else if (s === "⌫" && currentNumber !== "") {
    currentNumber = currentNumber.slice(0, currentNumber.length - 1);
  } else if (s === "±" && currentNumber !== "") {
    currentNumber = operate(s).toString();
  } else if (s === ".") {
    if (!currentNumber.includes(s)) currentNumber += s;
    else if (currentNumber === "") currentNumber = "0" + s;
  } else if (parseInt(currentNumber) === 0 && currentOperator === "÷") {
    handleDivideByZero();
  } else if (
    currentNumber !== "" &&
    previousNumber !== "" &&
    (currentNumber.endsWith(".") || s == "=")
  ) {
    handleCalculation(s);
  } else if (currentNumber !== "" && s !== "=") {
    previousNumber = currentNumber;
    currentOperator = s;
    currentNumber = "";
  }
}

function displayUpdate() {
  const display = document.querySelector(".display");
  const result = document.querySelector(".result");
  if (calculatorPause) {
    calculatorPause = false;
    return;
  }
  if (previousNumber !== "" && currentOperator !== undefined)
    display.textContent = `${previousNumber} ${currentOperator}`;
  else display.textContent = "";
  result.textContent = `${currentNumber}`;
}

function handleButtonClick(element) {
  displayUpdate();
  if (isNaN(parseInt(element.textContent))) handleSymbols(element.textContent);
  else handleNumbers(element.textContent);
  displayUpdate();
}

const userInput = document.querySelector(".input");
let currentNumber = "";
let currentOperator;

let previousNumber = "";
let calculatorPause = false;

userInput.addEventListener("click", (event) => {
  handleButtonClick(event.target);
});
