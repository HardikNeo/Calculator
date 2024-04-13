var op = "";
var a = 0;
var num1 = 0;
var num2 = 0;
var res = 0;
var check = 0;

const predis = document.getElementById("pre-dis");
const resdis = document.getElementById("res-dis");
function num(b) {
  console.log(a, num1, num2, res, check);

  a = a * 10 + b;
  predis.textContent += b;
  console.log(a, num1, num2, res, check);
}
function ope(operator) {
  console.log(a, num1, num2, res, check);
  if (num1 === 0) {
    num1 = a;
  }
  predis.textContent = num1;
  a = 0;
  op = operator;
  predis.textContent += " " + op + " ";
  console.log(a, num1, num2, res, check);
}

function eq() {
  console.log(a, num1, num2, res, check);
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
  num1 = res;
  num2 = 0;
  console.log(a, num1, num2, res, check);
}
function ac() {
  console.log(a, num1, num2, res, check);
  a = 0;
  num1 = 0;
  num2 = 0;
  res = 0;
  predis.textContent = "";
  resdis.textContent = "";
  console.log(a, num1, num2, res, check);
}
