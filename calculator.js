let result = document.getElementById('result');
let currentInput = '';
let operator = '';
let operand1 = '';
let operand2 = '';

function display(value) {
    if (value === 'C') {
        clearResult();
    } else if (value === '=') {
        calculateResult();
    } else if (isOperator(value)) {
        handleOperator(value);
    } else {
        handleNumber(value);
    }
}

function clearResult() {
    result.value = '';
    currentInput = '';
    operator = '';
    operand1 = '';
    operand2 = '';
}

function calculateResult() {
    if (operator && operand1 !== '' && currentInput !== '') {
        operand2 = currentInput;
        let calcResult;
        switch (operator) {
            case '+':
                calcResult = parseFloat(operand1) + parseFloat(operand2);
                break;
            case '-':
                calcResult = parseFloat(operand1) - parseFloat(operand2);
                break;
            case '*':
                calcResult = parseFloat(operand1) * parseFloat(operand2);
                break;
            case '/':
                calcResult = parseFloat(operand1) / parseFloat(operand2);
                break;
        }
        result.value = calcResult;
        currentInput = calcResult.toString();
        operator = '';
        operand1 = '';
        operand2 = '';
    }
}

function isOperator(value) {
    return value === '+' || value === '-' || value === '*' || value === '/';
}

function handleOperator(value) {
    if (currentInput !== '') {
        if (operator === '') {
            operand1 = currentInput;
            currentInput = '';
        } else {
            calculateResult();
            operand1 = result.value;
            currentInput = '';
        }
        operator = value;
    }
}

function handleNumber(value) {
    currentInput += value;
    result.value = currentInput;
}
