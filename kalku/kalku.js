function appendNumber(number) {
    const result = document.getElementById("result");
    result.value += number;
}

function appendOperator(operator) {
    const result = document.getElementById("result");
    result.value += ` ${operator} `;
}

function clearDisplay() {
    document.getElementById("result").value = '';
}

function calculateResult() {
    const result = document.getElementById("result").value;
    const sanitizedInput = result.replace(/\^/g, "**");
    
    try {
        const evaluation = eval(sanitizedInput);
        document.getElementById("result").value = evaluation;
    } catch (error) {
        document.getElementById("result").value = "Error";
    }
}

function deleteLast() {
    const display = document.getElementById("result");
    display.value = display.value.slice(0, -1);
}