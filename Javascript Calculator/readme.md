# Calculator

This is a simple calculator implemented in JavaScript. It allows the user to perform basic arithmetic operations such as addition, subtraction, multiplication, and division. The calculator also supports decimal numbers and has a clear button to reset the display.

## Usage

To use the calculator, simply click on the buttons on the screen or use the keyboard to input numbers and operators. The display will show the current value of the calculator. To perform an operation, click on the corresponding operator button or use the keyboard to input the operator. The calculator will wait for the second operand before performing the operation. To clear the display, click on the "AC" button or use the keyboard to press the "Escape" key.

## Code

The calculator is implemented in JavaScript and consists of several functions that handle input, display, and calculation. The `inputNumber` function handles input of digits, while the `inputDecimal` function handles input of decimal points. The `handleOperator` function handles input of operators and performs the corresponding calculation. The `resetCalculator` function resets the calculator to its initial state. The `updateDisplay` function updates the display with the current value of the calculator.

The calculator also listens for keyboard input using the `document.addEventListener` function. The `keydown` event is used to detect key presses and call the appropriate functions.

## Demo

A demo of the calculator can be found [here](https://codepen.io/krasipeace/pen/bGQovLb).