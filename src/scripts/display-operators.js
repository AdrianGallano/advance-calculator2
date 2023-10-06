const operatorsContainer = document.getElementsByClassName("operators")[0];

const OperatorsButtonList = [
  "C",
  "AC",
  "×",
  "÷",
  "+",
  "-",
  "Ans",
  "=",
];

for (let i = 0; i < OperatorsButtonList.length; i++) {
  let operatorButton = document.createElement("button");
  operatorButton.className = "operator-buttons";
  operatorButton.innerHTML = `${OperatorsButtonList[i]}`;
  operatorButton.setAttribute("data-content", `${OperatorsButtonList[i]}`);

  operatorsContainer.append(operatorButton);
}
