let currentResult = 0;

function createAndWriteOutput(currentResult, operator, userInputValue) {
  return `${currentResult} ${operator} ${userInputValue}`;
}

function add() {
  let prevResult = currentResult;
  currentResult += +userInput.value;
  let calculationDescription = createAndWriteOutput(prevResult, '+', userInput.value);
  outputResult(currentResult, calculationDescription);
}

addBtn.addEventListener('click', add);
