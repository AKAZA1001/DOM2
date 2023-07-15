const resultInput = document.getElementById("resultInput");
let memoryValue = 0;

function handleClick(value) {
  resultInput.value += value;
}

function calculate() {
  try {
    const expression = resultInput.value;
    const result = eval(expression);
    resultInput.value = result;
  } catch (error) {
    alert("Invalid expression!");
  }
}

function addToMemory() {
  const currentValue = parseFloat(resultInput.value) || 0;
  memoryValue += currentValue;
  localStorage.setItem("calculatorMemory", memoryValue.toString());
  alert("Value added to memory!");
}

function subtractFromMemory() {
  const currentValue = parseFloat(resultInput.value) || 0;
  memoryValue -= currentValue;
  localStorage.setItem("calculatorMemory", memoryValue.toString());
  alert("Value subtracted from memory!");
}

function clearMemory() {
  memoryValue = 0;
  localStorage.removeItem("calculatorMemory");
  alert("Memory cleared!");
}

window.addEventListener("keydown", function (event) {
  const key = event.key;
  const isNumber = /[0-9]/.test(key);
  if (
    !isNumber &&
    key !== "." &&
    key !== "+" &&
    key !== "-" &&
    key !== "*" &&
    key !== "/" &&
    key !== "Enter"
  ) {
    event.preventDefault();
    alert("Only numbers are allowed!");
  }
});

window.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    calculate();
  }
});

window.addEventListener("DOMContentLoaded", function () {
  const storedMemory = localStorage.getItem("calculatorMemory");
  if (storedMemory) {
    memoryValue = parseFloat(storedMemory);
  }
});
