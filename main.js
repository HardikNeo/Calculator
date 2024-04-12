var op = "";
var a = 0;
var num1 = 0;
var num2 = 0;
var res = 0;
var check = 0;
const predis = document.getElementById("pre-dis");
const resdis = document.getElementById("res-dis");
function num(b) {
  if (check === 0) {
    predis.textContent = "";
    resdis.textContent = "";
    check = 1;
  }
  a = a * 10 + b;
  predis.textContent += b;
}
function ope(operator) {
  num1 = a;
  a = 0;
  op = operator;
  predis.textContent += " " + op + " ";
}

function eq() {
  num2 = a;
  if (op === "+") {
    res = num1 + num2;
  } else if (op === "-") {
    res = num1 - num2;
  } else if (op === "/") {
    res = num1 / num2;
  } else if (op === "*") {
    res = num1 * num2;
  } else {
    console.log("No operator provied");
    alert("No Operator Provided");
    res = a;
  }
  resdis.textContent = "= " + res;
  check = 0;
  a = 0;
  res = 0;
  num1 = 0;
  num2 = 0;
}
function ac() {
  a = 0;
  num1 = 0;
  num2 = 0;
  res = 0;
  predis.textContent = "";
  resdis.textContent = "";
}
