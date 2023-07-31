let sum = (number1, number2) => number1 + number2,
    subtract = (number1, number2) => number1 - number2,
    multiply = (number1, number2) => number1 * number2,
    divide = (number1, number2) => number1 / number2,
    percent = (percentage, total) => percentage * 0.01 * total;

let doOperation = document.querySelector('.equals'),
    digits = document.querySelectorAll('.digit'),
    operators = document.querySelectorAll('.operator'),
    clear = document.querySelector('.clear'),
    allClear = document.querySelector('.allclear');

let display = document.querySelector('.display');

allClear.addEventListener('click', () => {
    display.innerHTML = '';
});

clear.addEventListener('click', () => {
    display.innerHTML = display.innerHTML.slice(0, -1);
});

digits.forEach(element => {
    element.addEventListener('click', () => {
        display.innerHTML += element.innerHTML;
    });
});

operators.forEach(element => {
    element.addEventListener('click', () => {
        display.innerHTML += element.innerHTML;
    });
})