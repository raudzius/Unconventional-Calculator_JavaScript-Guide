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

function calculateResult(calculationType) {
  const prevResult = currentResult;
  if (calculationType === '+') {
    currentResult += +userInput.value;
  } else if (calculationType === '-') {
    currentResult -= +userInput.value;
  } else if (calculationType === '*') {
    currentResult *= +userInput.value;
  } else if (calculationType === '/') {
    currentResult /= +userInput.value;
  }

  let calculationDescription = createAndWriteOutput(prevResult, calculationType, userInput.value);
  outputResult(currentResult, calculationDescription);
  writeToLog(calculationType, prevResult, userInput.value, currentResult);
}

function add() {
  calculateResult('+');
}

function subtract() {
  calculateResult('-');
}

function multiply() {
  calculateResult('*');
}

function divide() {
  calculateResult('/');
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
