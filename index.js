const display = document.getElementById('display');

function addValue(value) {
    display.value += value;
}

function calculate () {
    try{
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}

function clean () {
    display.value = '';
}




