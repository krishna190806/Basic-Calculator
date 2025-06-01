let display = document.getElementById('display');

function appendValue(value) {
    if (display.innerText === '0' && value !== '.') {
        display.innerText = value;
    } else if (value === '+/-') {
        display.innerText = (parseFloat(display.innerText) * -1).toString();
    } else {
        display.innerText += value;
    }
}

function clearDisplay() {
    display.innerText = '0';
}

function calculate() {
    try {
        display.innerText = eval(display.innerText.replace(/×/g, '*').replace(/−/g, '-')).toString();
    } catch {
        display.innerText = 'Error';
    }
}

function backspace() {
    let current = display.innerText;
    if (current.length === 1 || current === 'Error') {
        display.innerText = '0';
    } else {
        display.innerText = current.slice(0, -1);
    }
}