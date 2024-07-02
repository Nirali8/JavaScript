//  <!-- Addition of two nos -->
function getAdd() {
  // Fetch the value of input with id val1
  const num1 = Number(document.getElementById("val1").value);

  // Fetch the value of input with id val2
  const num2 = Number(document.getElementById("val2").value);
  const add = num1 + num2;
  //   console.log(add);

  // Displays the result in paragraph using dom
  document.getElementById("result").innerHTML = add;

  // Changes the color of paragraph tag with red
  document.getElementById("result").style.color = "red";
}

// <!-- Even or Odd no -->
function evenOrodd() {
  let num1 = Number(document.getElementById("even-odd").value);

  if (num1 % 2 == 0) {
    document.getElementById("evenorodd").innerHTML = "Even";
  } else {
    document.getElementById("evenorodd").innerHTML = "Odd";
  }
  document.getElementById("evenorodd").style.color = "red";
}

//  <!-- find larger no -->
function getLarge() {
  // Fetch the value of input with id val1
  const num1 = Number(document.getElementById("no1").value);

  // Fetch the value of input with id val2
  const num2 = Number(document.getElementById("no2").value);
  const add = num1 > num2 ? num1 : num2;
  //   console.log(add);

  // Displays the result in paragraph using dom
  document.getElementById("large").innerHTML = add;

  // Changes the color of paragraph tag with red
  document.getElementById("large").style.color = "red";
}

// <!-- find Grade -->
function getGrade() {
  let s1 = Number(document.getElementById("sub1").value);
  let s2 = Number(document.getElementById("sub2").value);
  let s3 = Number(document.getElementById("sub3").value);

  let percent = ((s1 + s2 + s3) * 100) / 300;
  let grade;
  if (percent >= 85) grade = "A";
  else if (percent >= 75) grade = "B";
  else if (percent >= 55) grade = "C";
  else if (percent >= 35) grade = "D";
  else grade = "Fail";

  document.getElementById(
    "grade"
  ).innerHTML = `${grade} percentage :${percent}`;
  document.getElementById("grade").style.color = "blue";
}

//  <!-- Sort nos -->
function getSort() {
  // Fetch the value of input with id val1
  let num1 = Number(document.getElementById("v1").value);

  // Fetch the value of input with id val2
  let num2 = Number(document.getElementById("v2").value);
  let num3 = Number(document.getElementById("v3").value);

  let swap = 0;
  if (num1 > num2) {
    swap = num1;
    num1 = num2;
    num2 = swap;
    if (num1 > num3) {
      swap = num1;
      num1 = num3;
      num3 = swap;
    }
    if (num2 > num3) {
      swap = num2;
      num2 = num3;
      num3 = swap;
    }
  } else if (num1 > num3) {
    swap = num1;
    num1 = num3;
    num3 = swap;
    if (num2 > num3) {
      swap = num2;
      num2 = num3;
      num3 = swap;
    }
  } else if (num2 > num3) {
    swap = num2;
    num2 = num3;
    num3 = swap;
  }

  console.log(`${num1} ${num2} ${num3}`);
  // Displays the result in paragraph using dom
  document.getElementById("result1").innerHTML = `${num1} ${num2} ${num3}`;

  // Changes the color of paragraph tag with red
  document.getElementById("result1").style.color = "red";
}
/* JS XPathExpression*/
{
  let a = -9;
  let b = 3;
  console.log(a * b);
  a = "Value is ";
  b = 50;
  a += b;
  console.log(a);
  a = 17;
  b = 5;
  console.log(a % b);
  console.log(b % a);
  a = 5;
  b = 10;
  console.log(a / b);
  a = b = 4;
  console.log(a == b);
  b = 5;
  console.log(a != b);
  a = 7;
  b = 8;
  console.log(a <= b);
}
