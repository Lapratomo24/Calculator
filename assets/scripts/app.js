const defaultResult = 0;
let currentResult = defaultResult;

const output = (operator, initialNum, userNum) => {
    const calcDescription = `${initialNum} ${operator} ${userNum}`;
    outputResult(currentResult, calcDescription);
}

const add = () => {
    const inputNum = parseInt(userInput.value);
    const initialResult = currentResult;
    currentResult = currentResult + inputNum;
    output('+', initialResult, inputNum);
}

const subtract = () => {
    const inputNum = parseInt(userInput.value);
    const initialNum = currentResult;
    currentResult = currentResult - inputNum;
    output('-', initialNum, inputNum);
}

const multiply = () => {
    const inputNum = parseInt(userInput.value);
    const initialNum = currentResult;
    currentResult = currentResult * inputNum;
    output('*', initialNum, inputNum);
}

const divide = () => {
    const inputNum = parseInt(userInput.value);
    const initialNum = currentResult;
    currentResult = currentResult / inputNum;
    output('/', initialNum, inputNum);
}

// currentResult = add(2,2);

// let calculationDescription = 'hello world';

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);

