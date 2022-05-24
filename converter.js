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

const cm_to_in= () => {
  number = document.getElementById("num1").value;
  result = number / 2.54;
  document.getElementById("print")
  .innerHTML = result + "in";
  document.getElementById("num1")
  .value = "";
}

const floz_to_ml= () => {
  number = document.getElementById("num1").value;
  result = number * 29.57353;
  document.getElementById("print")
  .innerHTML = result + "mL";
  document.getElementById("num1")
  .value = "";
}

const gal_to_L = () => {
  number = document.getElementById("num1").value;
  result = number * 3.785412;
  document.getElementById("print")
  .innerHTML = result + "L";
  document.getElementById("num1")
  .value = "";
}

const mi_to_km = () => {
  number = document.getElementById("num1").value;
  result = number * 1.609344;
  document.getElementById("print")
  .innerHTML = result + "km";
  document.getElementById("num1")
  .value = "";
}

const m_to_f = () => {
  number = document.getElementById("num1").value;
  result = number * 3.28084;
  document.getElementById("print")
  .innerHTML = result + "ft";
  document.getElementById("num1")
  .value = "";
}

const ft_to_mi = () => {
  number = document.getElementById("num1").value;
  result = number * 5280;
  document.getElementById("print")
  .innerHTML = result + "mi";
  document.getElementById("num1")
  .value = "";
}

const mph_to_kph = () => {
  number = document.getElementById("num1").value;
  result = number * 1.609344;
  document.getElementById("print")
  .innerHTML = result + "kph";
  document.getElementById("num1")
  .value = "";
}

const oz_to_g = () => {
  number = document.getElementById("num1").value;
  result = number * 28;
  document.getElementById("print")
  .innerHTML = result + "g";
  document.getElementById("num1")
  .value = "";
}

const kg_to_elbow = () => {
  number = document.getElementById("num1").value;
  result = number / 0.45359327;
  document.getElementById("print")
  .innerHTML = result + "lbs";
  document.getElementById("num1")
  .value = "";
}