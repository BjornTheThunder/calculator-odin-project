let numberButtons = document.querySelectorAll(".number-button");
let operators = document.querySelectorAll(".operator");
let displayText = document.getElementById("display");

let savedNumbers = [];
let savedOperations = [];

displayText.value = "";

numberButtons.forEach(button => {
    button.addEventListener("click", () => {
        appendToDisplay(button.innerHTML);
    });
});

operators.forEach(operator => {
    if (operator.innerHTML == "C" || operator.innerHTML == "⌫") return;

    operator.addEventListener("click", () => {
        saveOperation(operator.innerHTML);
    });
});

document.getElementById(".").addEventListener("click", () => {
    appendToDisplay(".");
});

document.getElementById("=").addEventListener("click", () => {
    performOperations();
});

document.getElementById("cancel").addEventListener("click", () => {
    savedNumbers = [];
    savedOperations = [];
    displayText.value = "";
});

document.getElementById("delete").addEventListener("click", () => {
    displayText.value = String(displayText.value).slice(0, -1);
});

function appendToDisplay(value) {
    displayText.value = displayText.value.concat(value);
}

function saveOperation(operator) {
    if (displayText.value === "") return;

    savedNumbers.push(Number(displayText.value));
    savedOperations.push(operator);

    displayText.value = "";

    console.log(savedNumbers);
    console.log(savedOperations);
}

function performOperations() {
    if (savedNumbers.length == 0 || saveOperation.length == 0) return;

    let total = savedNumbers[0];
    savedNumbers.push(Number(displayText.value));

    for (let i = 1; i < savedNumbers.length; i++) {
        switch(savedOperations[i - 1]) {
            case "+":
                total += savedNumbers[i];
                break;
            case "-":
                total -= savedNumbers[i];
                break;
            case "*":
                total *= savedNumbers[i];
                break;
            case "/":
                total /= savedNumbers[i];
                break;
        }
    }

    savedNumbers = [];
    savedOperations = [];
    displayText.value = total;
}