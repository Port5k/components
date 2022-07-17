let screen = document.querySelector('.screen')

let screenValue = 0;

screen.textContent = screenValue;

Array.from(document.querySelectorAll('button')).forEach((e) => {
    e.addEventListener('click', () => {
        if (e.classList.contains('button_add')) {
            add();
        } else if (e.classList.contains('button_subtract')) {
            subtract();
        }
        statusColor();
    })
})

function add() {
    screenValue++;
    screen.textContent = screenValue;
}

function subtract() {
    screenValue--;
    screen.textContent = screenValue;
}

function statusColor() {
    if (screenValue > 0)
        screen.setAttribute('class', 'positive screen');
    else if (screenValue < 0)
        screen.setAttribute('class', 'negative screen');
    else if (screenValue == 0)
        screen.setAttribute('class', 'neutral screen');
}