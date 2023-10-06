const complexContainer = document.getElementsByClassName("complex-operators")[0];


const complexButtonList = [];

for (let i = 0; i < complexButtonList.length; i++) {
  let numButton = document.createElement("button");
  numButton.className = "complex-buttons";
  numButton.innerHTML = `${complexButtonList[i]}`;
  numButton.setAttribute("data-content", `${complexButtonList[i]}`)
  complexContainer.append(numButton);
}
