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

const performCalculation = (calcType) => {
    const inputNum = parseInt(userInput.value);
    const initialResult = currentResult;
    let mathOperator;
    if (calcType === 'add') { 
        currentResult += inputNum;
        mathOperator = '+';
    } else if (calcType === 'subtract') {
        currentResult -= inputNum;
        mathOperator = '-';
    } else if (calcType ==='multiply') {
        currentResult *= inputNum;
        mathOperator = '*';
    } else {
        currentResult /= inputNum;
        mathOperator = '/';
    }
    output(mathOperator, initialResult, inputNum);
    writeLog(calcType, initialResult, inputNum, currentResult);
};

const add = () => {
    performCalculation('add');
}

const subtract = () => {
    performCalculation('subtract');
}

const multiply = () => {
    performCalculation('multiply');
}

const divide = () => {
    performCalculation('divide');
}

// currentResult = add(2,2);

// let calculationDescription = 'hello world';

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);

