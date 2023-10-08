const numkeyContainer = document.getElementsByClassName("numpad")[0];


const numButtonList = ["7","8","9","4","5","6","1","2","3","+/-","0","."];

for (let i = 0; i < numButtonList.length; i++) {
  let numButton = document.createElement("button");
  numButton.className = "numpad-buttons";
  numButton.innerHTML = `${numButtonList[i]}`;
  numButton.setAttribute("data-content", `${numButtonList[i]}`)
  numkeyContainer.append(numButton);
}
