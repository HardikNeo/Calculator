
var op = "";
var a = 0;  
function ope() {
  num1 = a;
  a = 0;
}
function eq() {
  num2 = a;
  console.log(num1, num2);
  a = 0;
  if op ="+"{
    res = num1 + num2;
  }else if op ="-"{
    res = num1 - num2;
  }else if op ="/"{
    res = num1 / num2;
  }else if op ="*"{
    res = num1 * num2;
  }else {
    console.log("IDK WHAT HAPPENED")
  } 
  console.log(res);
}
function ac(){
  a =0;
  num1=0;
  num2=0;
  res=0; 
}