const calculatorPattern = /[0-9\+\-\*\/\.\%\=]/

document.addEventListener("keydown", (e) => {
	if (!e.key.match(calculatorPattern) && e.key != "Backspace") return;
})