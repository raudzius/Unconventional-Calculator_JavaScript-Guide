let currentResult = 0;

function add() {
  currentResult += +userInput.value;
  outputResult(currentResult);
}

addBtn.addEventListener('click', add);
