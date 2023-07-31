let sum = (number1, number2) => number1 + number2,
    subtract = (number1, number2) => number1 - number2,
    multiply = (number1, number2) => number1 * number2,
    divide = (number1, number2) => number1 / number2,
    percent = (percentage, total) => percentage * 0.01 * total,
    operate = (operator, number1, number2) => {
        switch (operator) {
            case '+':
                return sum(number1, number2);
            case '-':
                return subtract(number1, number2);
            case 'x':
                return multiply(number1, number2);
            case '\\':
                return divide(number1, number2);
            case '%':
                return percent(number1, number2);
            default:
                return null;
        }
    };

let doOperation = document.querySelector('.equals'),
    digits = document.querySelectorAll('.digit'),
    operators = document.querySelectorAll('.operator'),
    clear = document.querySelector('.clear'),
    allClear = document.querySelector('.allclear');

let display = document.querySelector('.display'),
    expression = document.querySelector('.expression'),
    result = document.querySelector('.result'),
    number1, number2;

allClear.addEventListener('click', () => {
    expression.innerHTML = '';
});

clear.addEventListener('click', () => {
    if(expression.innerHTML.at(-1) == ' ')   
        expression.innerHTML = expression.innerHTML.slice(0, -3);
    else
        expression.innerHTML = expression.innerHTML.slice(0, -1);
});

digits.forEach(element => {
    element.addEventListener('click', () => {
        expression.innerHTML += element.innerHTML;
    });
});

operators.forEach(element => {
    element.addEventListener('click', () => {
        expression.innerHTML += (' ' + element.innerHTML + ' ');
    });
});