var firstNumber;
var operation;

const setFirstNumber = () => firstNumber = document.getElementById('input').value;

const setOperation = (op) => operation = op;

const clearNumber = () => firstNumber = "";

const clearOp = () => operation = "";

const compute = () => {
  if(operation === "plus") {
    add(firstNumber, document.getElementById('input').value);
  }
  else if(operation === "times") {
    times(firstNumber, document.getElementById('input').value);
  }
  else if(operation === "minus") {
    minus(firstNumber, document.getElementById('input').value);
  }
  else if(operation === "divide") {
    divide(firstNumber, document.getElementById('input').value);
  }
  else if(operation === "squared") {
    let result = Math.pow(firstNumber, 2);
    document.getElementById("output").innerHTML = result;
  }
  else if(operation === "cubed") {
    let result = Math.pow(firstNumber, 3);
    document.getElementById("output").innerHTML = result;
  }
}

const add = (a, b) => {
  var result = parseInt(a) + parseInt(b);
  document.getElementById("output").innerHTML = result;
}

const minus = (a, b) => {
  var result = parseInt(a) - parseInt(b);
  document.getElementById("output").innerHTML = result;
}

const times = (a, b) => {
  var result = parseInt(a) * parseInt(b);
  document.getElementById("output").innerHTML = result;
}
const divide = (a, b) => {
  var result = parseInt(a) / parseInt(b);
  document.getElementById("output").innerHTML = result;
}