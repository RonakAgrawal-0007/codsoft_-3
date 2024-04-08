let screen = document.getElementById("screen");
let equation = "";

function appendToScreen(value) {
  equation += value;
  screen.innerText = equation;
}

function clearScreen() {
  equation = "";
  screen.innerText = "0";
}

function calculate() {
  try {
    let result = eval(equation);
    screen.innerText = result;
    equation = result.toString();
  } catch (error) {
    screen.innerText = "Error";
    equation = "";
  }
}