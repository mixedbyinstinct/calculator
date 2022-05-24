var number;
var result;

const c_to_f = () => {
  number = document.getElementById("num1").value;
  result = (number * 1.8) + 32;
  document.getElementById("print")
  .innerHTML = result + "°F";
  document.getElementById("num1")
  .value = "";
}

const ft_to_m = () => {
  number = document.getElementById("num1").value;
  result = number * 0.3048;
  document.getElementById("print")
  .innerHTML = result + "m";
  document.getElementById("num1")
  .value = "";
}

const in_to_cm = () => {
  number = document.getElementById("num1").value;
  result = number * 2.54;
  document.getElementById("print")
  .innerHTML = result + "cm";
  document.getElementById("num1")
  .value = "";
}