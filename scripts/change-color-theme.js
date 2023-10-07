const toggle = document.getElementById("darkmode-toggle");
const calculator = document.getElementsByClassName("calculator")[0];
const allButtons = document.querySelectorAll("button");
const history = document.getElementsByClassName("history")[0];
const display = document.getElementsByClassName("display")[0];

toggle.addEventListener("change", () => {

  if(toggle.checked){
    calculator.classList.remove("light-calc")
    document.body.classList.remove("light-body")
    history.classList.remove("light-history")
    display.classList.remove("light-display")
    
    allButtons.forEach(btn=>{
      btn.classList.remove("light-btn")
    })
    
  }else{
    calculator.classList.add("light-calc")
    document.body.classList.add("light-body")
    history.classList.add("light-history")
    display.classList.add("light-display")
    allButtons.forEach(btn=>{
      btn.classList.add("light-btn")
    })
    
  }
})