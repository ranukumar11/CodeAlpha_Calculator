const display = document.getElementById('display');

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        // Replace % with /100 for percentage calculations
        let expression = display.value.replace(/%/g, '/100');
        // eslint-disable-next-line no-eval
        display.value = eval(expression);
    } catch {
        display.value = 'Error';
    }
}