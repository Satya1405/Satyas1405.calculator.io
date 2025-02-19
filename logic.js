
function appendValue(value) {
    document.getElementById("screen").value += value;
}
function clearScreen() {
    document.getElementById("screen").value = "";
}
function calculateResult() {
    try {
        document.getElementById("screen").value = eval(document.getElementById("screen").value);
    } catch {
        document.getElementById("screen").value = "Error";
    }
}
function calculateTrig(func) {
    let val = parseFloat(document.getElementById("screen").value);
    if (!isNaN(val)) {
        if (func === 'sin') document.getElementById("screen").value = Math.sin(val * Math.PI / 180);
        if (func === 'cos') document.getElementById("screen").value = Math.cos(val * Math.PI / 180);
    } else {
        document.getElementById("screen").value = "Error";
    }
}