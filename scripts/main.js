const solutionBox = document.querySelector(".solution > p")
const numberButtons = document.querySelectorAll(".numpad-buttons")
const display = []
const parser = []
const complexMapper = []
const numberPattern = /[0-9\.]/
let numberHolder = ""
let index = 0;

numberButtons.forEach(btn => {
  btn.addEventListener("click", (e) => {
    if(e.target.dataset.content == "+/-"){
      if(numberHolder[0] == "-"){
        numberHolder = numberHolder.slice(1)
      }else{
        numberHolder = "-" + numberHolder
      }
      display[index] = numberHolder
      parser[index] = numberHolder
    }else{
      getNumber(e)
    }
    showDisplay()
  })
})

const getNumber = (e) => {
  let btnData = e.target.dataset.content
  numberHolder += btnData
  display[index] = numberHolder
  parser[index] = numberHolder
}


/* const displayNumber = (e) => {
  let btnData = e.target.dataset.content
  display.push(btnData)
  parser.push(btnData)
}  */

const showDisplay = () => {
  const finalDisplay = display.join("")
  solutionBox.textContent = finalDisplay
}


