const math = require("../node_modules/mathjs");

// my display
const solutionBox = document.querySelector("#solution-box");
const resultBox = document.querySelector(".result > p");
const variableBox = document.querySelectorAll("span[data-content]");

//inputs
const inputVariables = document.querySelectorAll("input[name='variable']");

// the buttons that is going to be pressed
const numberButtons = document.querySelectorAll(".numpad-buttons");
const operatorButtons = document.querySelectorAll(".operator-buttons");
const complexButtons = document.querySelectorAll(".complex-buttons");
const saveButton = document.querySelector("input[value='Save']");
const display = [];
const parser = [];
const numberPattern = /[0-9\.]/;
const operatorPattern = /[+\-*\/]/;
const complexPattern = /^(a|b|c|d|!|sin\(|cos\(|tan\(|log\(|log2\(|ceil\(|floor\(|\(|\)|%|\^|\^\s2)$/;

//navigation
const navContainer = document.querySelector(".nav-container");
const closeButton = document.getElementById("close-btn");

const scope = {
  a: "0",
  b: "0",
  c: "0",
  d: "0",
};

let numberHolder = "";
let index = display.length;

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
      mapBasicOperator(e);
    }
    showDisplay();
  });
});

complexButtons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (e.target.dataset.content.match(complexPattern)) {
      getComplexOperator(e);
      numberHolder = "";
      index = display.length;
    } else {
      mapComplexOperator(e);
    }
    showDisplay();
  });
});

saveButton.addEventListener("click", () => {
  setNumber();
  closeNav();
});

closeButton.addEventListener("click", () => {
  closeNav();
});

const mapBasicOperator = (e) => {
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

const mapComplexOperator = (e) => {
  let btnData = e.target.dataset.content;

  switch (btnData) {
    case "set":
      openNav();
      break;
    case "sqrt(": // Square Root
      squareRoot();
      break;
    case "cube(": // Nth Root
      cubeRoot();
      break;
    default:
      break;
  }
};

const cubeRoot = () => {
  display.push("∛(")
  parser.push("cbrt(")
  numberHolder = "";
  index = display.length;
  
};

const squareRoot = () => {
  display.push("√(")
  parser.push("sqrt(")
  numberHolder = "";
  index = display.length;
};


const openNav = () => {
  navContainer.style.display = "flex";
  setTimeout(() => {
    navContainer.style.width = "100%";
  }, 0);
};

const closeNav = () => {
  navContainer.style.width = "0";
  setTimeout(() => {
    navContainer.style.display = "none";
  }, 100);
};

const setNumber = () => {
  for(let inputVar of inputVariables){
    if(!inputVar.value.match(numberPattern)){
      alert("Variables must be valid numbers")
      for (let i = 0; i < inputVariables.length; i++) {
        inputVariables[i].value = variableBox[i].textContent;
      }
      return;
    }
  }
  
  let nodeNumber = 0;
  /* assign vaiableBox to scope */
  for (let variable in scope) {
    scope[variable] = inputVariables[nodeNumber].value;
    variableBox[nodeNumber].textContent = inputVariables[nodeNumber].value;
    nodeNumber++;
  }
};

const clearNumber = () => {
  if (display.length == 0) return;
  let currentState = display.length - 1;
  if (
    display[currentState].match(numberPattern) &&
    display[currentState].length > 1
  ) {
    display[currentState] = display[currentState].slice(
      0,
      display[currentState].length - 1
    );
    parser[currentState] = parser[currentState].slice(
      0,
      parser[currentState].length - 1
    );
    index = currentState;
    numberHolder = display[currentState];
  } else {
    display.pop();
    parser.pop();
    currentState = display.length - 1;
    if (display.length != 0 && display[currentState].match(numberPattern)) {
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
    let finalAnswer = math.evaluate(parser.join(""), scope);
    resultBox.textContent = finalAnswer;
  } catch (err) {
    resultBox.textContent = "Syntax error";
  }
};

const getBasicOperator = (e) => {
  let btnData = e.target.dataset.content;
  display.push(e.target.textContent);
  parser.push(btnData);
};

const getComplexOperator = (e) => {
  let btnData = e.target.dataset.content;
  display.push(btnData);
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

/* 
sqrt
nth sqrt
*/

/* 
log 2 x
x squared 
x to the power of n

*/

// dont accept unless number in set
