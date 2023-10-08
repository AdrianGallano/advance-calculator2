import Mexp from "math-expression-evaluator";

// my display
const solutionBox = document.querySelector(".solution > p");
const resultBox = document.querySelector(".result > p");
// the buttons that is going to be pressed
const numberButtons = document.querySelectorAll(".numpad-buttons");
const operatorButtons = document.querySelectorAll(".operator-buttons");
const display = [];
const parser = [];
const complexMapper = [];
const numberPattern = /[0-9\.]/;
const operatorPattern = /[+\-*\/]/;
let numberHolder = "";
let index = display.length;
const mexp = new Mexp();

numberButtons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (e.target.dataset.content == "+/-") {
      changeSign();
    } else {
      getNumber(e);
    }
    showDisplay();
  });
});

operatorButtons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (e.target.dataset.content.match(operatorPattern)) {
      getBasicOperator(e);
      numberHolder = "";
      index = display.length;
    } else {
      mapComplexOperator(e);
    }
    showDisplay();
  });
});

const mapComplexOperator = (e) => {
  let btnData = e.target.dataset.content;

  switch (btnData) {
    case "clear":
      clearNumber();
      break;
    case "allclear":
      clearAllNumber();
      break;
    case "answer":
      useAnswer();
      break;
    default:
      equals();
      break;
  }
};

const clearNumber = () => {
  if(display.length == 0) return
  let currentState = display.length - 1;
  if (
    display[currentState].match(numberPattern) &&
    display[currentState].length > 1
  ) {
    display[currentState] = display[currentState].slice(0, display[currentState].length - 1);
    parser[currentState] = parser[currentState].slice(0,parser[currentState].length - 1);
    index = currentState;
    numberHolder = display[currentState];
  } else {
    display.pop();
    parser.pop();
    currentState = display.length - 1;
    if(display.length != 0 && display[currentState].match(numberPattern)) {
      index = currentState;
      numberHolder = display[currentState];
    } else {
      index = display.length;
      numberHolder = "";
    }
  }
};

const clearAllNumber = () => {
  display.splice(0);
  parser.splice(0);
  numberHolder = "";
  index = display.length;
  resultBox.textContent = "";
};

const useAnswer = () => {
  equals();
  display.splice(0);
  parser.splice(0);
  let result = resultBox.textContent;
  display.push(result);
  parser.push(result);
  numberHolder = display[0];
  index = 0;
};

const equals = () => {
  if (display.length == 0) return;
  try {
    let finalAnswer = mexp.eval(parser.join(""));
    resultBox.textContent = finalAnswer;
  } catch {
    resultBox.textContent = "Syntax error";
  }
};

const getBasicOperator = (e) => {
  let btnData = e.target.dataset.content;
  display.push(e.target.textContent);
  parser.push(btnData);
};

const getNumber = (e) => {
  let btnData = e.target.dataset.content;
  numberHolder += btnData;
  display[index] = numberHolder;
  parser[index] = numberHolder;
};

const showDisplay = () => {
  const finalDisplay = display.join(" ");
  solutionBox.textContent = finalDisplay;
};

const changeSign = () => {
  if (numberHolder.length !== 0) {
    if (numberHolder[0] == "-") {
      numberHolder = numberHolder.slice(1);
    } else {
      numberHolder = "-" + numberHolder;
    }
  } else {
    numberHolder = "-";
  }

  display[index] = numberHolder;
  parser[index] = numberHolder;
};
