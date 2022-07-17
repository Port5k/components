let myScreen = document.querySelector('.screen')

myScreen.textContent = 0;

let myScreenValue = Number(myScreen.textContent);

function add() {
    myScreen.textContent = myScreenValue++;
}

function subtract() {
    myScreen.textContent = myScreenValue--;
}

function statusColor() {
    if (myScreenValue > 0)
        myScreen.setAttribute('class', 'positive');
    else if (myScreenValue < 0)
        myScreen.setAttribute('class', 'negative');
    else if (myScreenValue == 0)
        myScreen.setAttribute('class', 'neutral');
}

Array.from(document.querySelectorAll('button')).forEach((e) => {
    e.addEventListener('click', () => {
        if (e.classList.contains('button_add')) {
            add();
            console.log('first')
        } else if (e.classList.contains('button_subtract')) {
            subtract();
            console.log('www')
        }

        statusColor();
    })
})