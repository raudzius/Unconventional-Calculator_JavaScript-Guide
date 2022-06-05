let currentResult = 0;

const logEntries = [];

function createAndWriteOutput(currentResult, operator, userInputValue) {
  return `${currentResult} ${operator} ${userInputValue}`;
}

function writeToLog(operator, prevResult, userInput, result) {
  const logEntry = {
    opration: operator,
    prevResult: prevResult,
    userInput: +userInput,
    result: result,
  };
  logEntries.push(logEntry);
  console.log(logEntries);
}

function add() {
  let prevResult = currentResult;
  currentResult += +userInput.value;
  let calculationDescription = createAndWriteOutput(prevResult, '+', userInput.value);
  outputResult(currentResult, calculationDescription);
  writeToLog('+', prevResult, userInput.value, currentResult);
}

function subtract() {
  let prevResult = currentResult;
  currentResult -= +userInput.value;
  let calculationDescription = createAndWriteOutput(currentResult, '-', userInput.value);
  outputResult(currentResult, calculationDescription);
  writeToLog('-', prevResult, userInput.value, currentResult);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
