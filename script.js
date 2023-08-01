let sum = (number1, number2) => number1 + number2,
    subtract = (number1, number2) => number1 - number2,
    multiply = (number1, number2) => number1 * number2,
    divide = (number1, number2) => {
        if(number2 == 0) {
            zeroError = true;
            return null;
        }
        return number1 / number2;
    },
    percent = (percentage, total) => percentage * 0.01 * total,
    operate = (operator, number1, number2) => {
        switch (operator) {
            case '+':
                return sum(number1, number2);
            case '-':
                return subtract(number1, number2);
            case 'x':
                return multiply(number1, number2);
            case '/':
                return divide(number1, number2);
            case '%':
                return percent(number1, number2);
            default:
                return null;
        }
    };

function verify(operation, operator) {
    let position = operation.indexOf(operator),
        result, number1, number2;
    while(position != -1) {
        number1 = Number(operation[position - 1]);
        number2 = Number(operation[position + 1]);
        result = operate(operator, number1, number2);
        if(result == null) {
            return 1;
        }

        operation[position - 1] = result;
        operation.splice(position + 1, 1);
        operation.splice(position, 1);

        position = operation.indexOf(operator);
    }
    return 0;
}

let doOperation = document.querySelector('.equals'),
    digits = document.querySelectorAll('.digit'),
    operators = document.querySelectorAll('.operator'),
    clear = document.querySelector('.clear'),
    allClear = document.querySelector('.allclear');

let display = document.querySelector('.display'),
    expression = document.querySelector('.expression'),
    result = document.querySelector('.result')
    zeroError = false;

allClear.addEventListener('click', () => {
    expression.innerHTML = '';
    result.innerHTML = '';
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
        if(expression.innerHTML.at(-1) == ' ')
            expression.innerHTML = expression.innerHTML.slice(0, -3);
        expression.innerHTML += (' ' + element.innerHTML + ' ');
    });
});

doOperation.addEventListener('click', () => { 
    let operation = expression.innerHTML.split(' ');

    verify(operation, '%');
    verify(operation, '/');
    verify(operation, 'x');
    verify(operation, '+');
    verify(operation, '-');
    
    if(zeroError) {
        result.innerHTML = 'Division by zero.';
        expression.innerHTML = '';
        zeroError = false;
    }else
        result.innerHTML = operation[0];
});