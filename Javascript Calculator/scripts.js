const calculator = {
    displayValue: '0',
    firstOperand: null,
    waitingForSecondOperand: false,
    operator: null,
};

function inputNumber(digit) {
    const { displayValue, waitingForSecondOperand } = calculator;

    if (waitingForSecondOperand === true) {
        calculator.displayValue = digit;
        calculator.waitingForSecondOperand = false;
    } else {
        if (displayValue === '0' && digit !== '.') {
            calculator.displayValue = digit;
        } else {
            calculator.displayValue = displayValue + digit;
        }
    }

    if (calculator.displayValue.match(/^-?\d+(\.\d+)?[*-]\d+(\.\d+)?$/)) {
        handleOperator(calculator.operator);
    }
}

function inputDecimal(dot) {
    if (!calculator.displayValue.includes(dot)) {
        calculator.displayValue += dot;
    }
}

function handleOperator(nextOperator) {
    const { firstOperand, displayValue, operator } = calculator;
    const inputValue = parseFloat(displayValue);

    if (operator && calculator.waitingForSecondOperand) {
        calculator.operator = nextOperator;
        return;
    }

    if (firstOperand === null && !isNaN(inputValue)) {
        calculator.firstOperand = inputValue;
    } else if (operator) {
        const currentValue = firstOperand || 0;
        const result = performCalculation[operator](currentValue, inputValue);
        calculator.displayValue = String(result);
        calculator.firstOperand = result;
    }

    calculator.waitingForSecondOperand = true;

    if (nextOperator === '-' && displayValue === '') {
        calculator.displayValue = '-';
        return;
    } else if (nextOperator === '-' && operator && !displayValue.includes('-')) {
        calculator.displayValue = '-';
        calculator.operator = nextOperator;
        return;
    }

    if (nextOperator === '=') {
        if (operator === null) {
            return;
        }
        const currentValue = firstOperand || 0;
        const result = performCalculation[operator](currentValue, inputValue);
        calculator.displayValue = String(result);
        calculator.firstOperand = result;
        calculator.operator = null;
        calculator.waitingForSecondOperand = false;
        return;
    }

    if (operator && displayValue === '') {
        calculator.operator = nextOperator;
        return;
    }

    calculator.operator = nextOperator;
}

let performCalculation = {
    '/': (firstOperand, secondOperand) => firstOperand / secondOperand,
    '*': (firstOperand, secondOperand) => firstOperand * secondOperand,
    '+': (firstOperand, secondOperand) => firstOperand + secondOperand,
    '-': (firstOperand, secondOperand) => firstOperand - secondOperand,
    '=': (firstOperand, secondOperand) => secondOperand
};

function resetCalculator() {
    calculator.displayValue = '0';
    calculator.firstOperand = null;
    calculator.waitingForSecondOperand = false;
    calculator.operator = null;
}

function updateDisplay() {
    const display = document.querySelector('.calculator-screen');
    display.value = calculator.displayValue;
}

updateDisplay();
const keys = document.querySelector('.calculator-keys');
keys.addEventListener('click', (event) => {
    const target = event.target;
    if (!target.matches('button')) {
        return;
    }

    if (target.classList.contains('operator')) {
        handleOperator(target.value);
        updateDisplay();

        return;
    }

    if (target.classList.contains('decimal')) {
        inputDecimal(target.value);
        updateDisplay();

        return;
    }

    if (target.classList.contains('all-clear')) {
        resetCalculator();
        updateDisplay();

        return;
    }

    inputNumber(target.value);
    updateDisplay();
});

document.addEventListener('keydown', (event) => {
    let key = event.key;
    if (key >= '0' && key <= '9') {
        inputNumber(key);
        updateDisplay();
    } else if (key === '.') {
        inputDecimal(key);
        updateDisplay();
    } else if (key === '+' || key === '-' || key === '*' || key === '/') {
        handleOperator(key);
        updateDisplay();
    } else if (key === 'Enter') {
        handleOperator('=');
        updateDisplay();
    } else if (key === 'Escape') {
        resetCalculator();
        updateDisplay();
    }
});