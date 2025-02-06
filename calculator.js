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
  currentNumber += n;
  console.log(currentNumber);
}
function handleSymbols(s) {
  if (s === "C") {
    currentOperator = undefined;
    currentNumber = "";
    previousNumber = "";
    return;
  }
  if (s === "⌫") {
    console.log(typeof currentNumber);
    if (currentNumber !== "")
      currentNumber = currentNumber.slice(0, currentNumber.length - 1);
    console.log(currentNumber);
    return;
  }
  if (s === "±") {
    if (currentNumber !== "") currentNumber = operate(s).toString();
    console.log(currentNumber);
    return;
  }
  if (s === ".") {
    if (!currentNumber.includes(s)) currentNumber += s;
    else if (currentNumber === "") currentNumber = "0" + s;
    console.log(currentNumber);
    return;
  }
  if (parseInt(currentNumber) === 0 && currentOperator === "÷") {
    document.querySelector(".display").textContent = "";
    document.querySelector(".result").textContent = "you cannot divide by 0";
    calculatorPause = true;
    currentNumber = "";
    previousNumber = "";
    currentOperator = undefined;
    return;
  }
  if (
    currentNumber !== "" &&
    previousNumber !== "" &&
    currentNumber[currentNumber.length - 1] !== "."
  ) {
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
      console.info(previousNumber);
      currentNumber = previousNumber;
      previousNumber = "";
      currentOperator = undefined;
      console.info(typeof currentNumber);
      return;
    }
    currentOperator = s;
    currentNumber = "";
    console.info(previousNumber);
  } else if (currentNumber !== "" && s !== "=") {
    previousNumber = currentNumber;
    currentOperator = s;
    currentNumber = "";
    console.info(previousNumber);
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
let currentOperator = undefined;
let previousNumber = "";
let calculatorPause = false;
userInput.addEventListener("click", (event) => {
  handleButtonClick(event.target);
});
