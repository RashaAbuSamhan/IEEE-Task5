function q1() {
  var num1 = prompt("Please enter the first number");
  var num2 = prompt("Please enter the second number");

  if (num1 > 0 && num2 > 0 && num1 > num2) {
    document.write("The larger number is " + num1);
  } else if (num1 > 0 && num2 > 0 && num1 < num2) {
    document.write("The larger number is " + num2);
  } else if (num1 === num2 && num1 > 0 && num2 > 0) {
    document.write("Both numbers are equal!");
  } else {
    document.write("Please add an integer!");
  }
}

function q2() {
  var a, b, c, d, e;

  a = -5;
  b = -2;
  c = -6;
  d = 0;
  e = -1;

  if (a > b && a > c && a > d && a > e) {
    alert("the largest of five these numbers = " + a);
  } else if (b > a && b > c && b > d && b > e) {
    alert("the largest of five these numbers = " + b);
  } else if (c > a && c > b && c > d && c > e) {
    alert("the largest of five these numbers = " + c);
  } else if (d > a && d > b && d > c && d > e) {
    alert("the largest of five these numbers = " + d);
  } else if (e > a && e > b && e > c && e > d) {
    alert("the largest of five these numbers = " + e);
  }
}

function q3() {
  let array = [43, "what", 9, true, "cannot", false, "be", 3, true];
  for (var j = 0; j < array.length ; i++) {

    document.write(array);

  }
}

function q4() {
  let str2 = "don’t know why";
  var check ="Yes";
  for (var i = 0; i < str2.length; i++) {
    if (str2[i] == "y"){
        check ="Yes";
    }
    else{
        check ="No";}
  }
  document.write(check);
}
