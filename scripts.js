// console.log("I am connected!");


//screen
const calculator = {
  startScreen: "0",
  firstOperand: null,
  operatorWaiting: false,
  secondOperand: null,
};

//update display
const updateScreen = () => {
  const answer = document.querySelector(".calculator__screen");
  answer.value = calculator.displayValue;
};

updateScreen();
//handle key press
const keys = document.querySelector("#key");
keys.addEventListener("click", (e) => {
  const { target } = e;

  if (!target.matches("button")) {
    return;
  }

  if (target.classList.contains("operator")) {
    console.log("operator", target.value);
    return;
  }

  if (target.classList.contains("decimal")) {
    console.log("decimal", target.value);
    return;
  }

  if (target.classList.contains("clear")) {
    console.log("clear", target.value);
    return;
  }
  console.log("digit", target.value);
});

//input digits
const inputDigits = (digit) => {
  const { displayValue } = calculator;
  calculator.displayValue = displayValue === "0" ? digit : displayValue + digit;

  console.log("digit", target.value);

  inputDigit(target.value);
  updateDisplay();
};

//input decimal point
const inputDecimal = (dot) => {
  if (!calculator.displayValue.includes(dot)) {
    calculator.displayValue += dot;
  }

  console.log("decimal", targe.value);

  inputDecimal(target.value);
  updateDisplay();
};
