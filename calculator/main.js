const display = document.querySelector(".display");

function add (char) {
    display.value = display.value + char;
}

function calculate () {
    const resulted = eval(display.value);
    display.value = "";
    display.value = resulted;
}

function reset () {
    display.value = "";
}

