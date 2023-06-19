import calculate from "./calculate.js"
import clearInputCalc from "./clearInputCalc.js"
import copyToCBoard from "./copyToCBoard.js"
import { handleButtonsPress, handleTyping } from "./keyHandlers.js"
import themeSwitcher from "./themeSwitcher.js"

const input = document.getElementById('input')


document.querySelectorAll('.charKey').forEach(function(charKeyBtn) {
    charKeyBtn.addEventListener('click', handleButtonsPress)
})

const clear = document.getElementById('clear')
clear.addEventListener('click', clearInputCalc)
input.addEventListener('keydown', handleTyping)
document.getElementById('equal').addEventListener('click', calculate)
document.getElementById('copyToClipBoard').addEventListener('click', copyToCBoard)
document.getElementById('themeSwitcher').addEventListener('click', themeSwitcher)