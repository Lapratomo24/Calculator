const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

const output = (operator, initialNum, userNum) => {
    const calcDescription = `${initialNum} ${operator} ${userNum}`;
    outputResult(currentResult, calcDescription);
}

const writeLog = (identifier, initial, calcNumber, result) => {
    const logEntry = {
        operation: identifier,
        initial: initial,
        calculation: calcNumber,
        result: result
    }
    logEntries.push(logEntry);
    console.log(logEntries);
}

const add = () => {
    const inputNum = parseInt(userInput.value);
    const initialResult = currentResult;
    currentResult += inputNum;
    output('+', initialResult, inputNum);
    writeLog('add', initialResult, inputNum, currentResult);
}

const subtract = () => {
    const inputNum = parseInt(userInput.value);
    const initialNum = currentResult;
    currentResult -= inputNum;
    output('-', initialNum, inputNum);
    writeLog('subtract', initialNum, inputNum, currentResult);
}

const multiply = () => {
    const inputNum = parseInt(userInput.value);
    const initialNum = currentResult;
    currentResult *= inputNum;
    output('*', initialNum, inputNum);
    writeLog('multiply', initialNum, inputNum, currentResult);
}

const divide = () => {
    const inputNum = parseInt(userInput.value);
    const initialNum = currentResult;
    currentResult /= inputNum;
    output('/', initialNum, inputNum);
    writeLog('divide', initialNum, inputNum, currentResult);
}

// currentResult = add(2,2);

// let calculationDescription = 'hello world';

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);

