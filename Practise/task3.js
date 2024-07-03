function getSum() {
  let num1 = Number(document.getElementById("val1").value);
  let sum = 0;
  for (let i = 0; i <= num1; i++) {
    sum += i;
  }
  document.getElementById("result").innerHTML = sum;
  document.getElementById("result").style.color = "red";
}

function getTable() {
  let num1 = Number(document.getElementById("val2").value);

  for (let i = 1; i <= 10; i++) {
    console.log(`${num1} * ${i} = ${num1 * i}`);
  }
  document.getElementById("result2").innerHTML = "See console for table";
  document.getElementById("result").style.color = "red";
}

function getFact() {
  let num1 = Number(document.getElementById("val3").value);
  let f = 1;
  for (let i = 1; i <= num1; i++) {
    f *= i;
  }
  document.getElementById("result3").innerHTML = f;
  document.getElementById("result").style.color = "red";
}

function getFibbo() {
  let num1 = Number(document.getElementById("val4").value);
  let a = 0;
  let b = 1;
  console.log(a);
  console.log(b);
  for (let i = 2; i < 10; i++) {
    sum = a + b;
    console.log(sum);
    a = b;
    b = sum;
  }
  document.getElementById("result4").innerHTML = "See console for series";
  document.getElementById("result").style.color = "red";
}

function sumOfArray() {
  let arr = [2, 4, 6, 7, 8];
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  console.log(`sum of element of array = ${sum}`);
}

function largestOfarray() {
  let arr = [22, 4, 6, 7, 8];
  let large = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > large) large = arr[i];
  }
  console.log(`Largest of array = ${large}`);
}

function revString() {
  let str = "Hello World";
  let rev = "";
  for (let i = str.length - 1; i >= 0; i--) {
    rev += str[i];
    // console.log(`i = ${str[i]} = ${rev}`);
  }
  console.log(`reverse string : ${rev}`);
}

function vowelinString() {
  let str = "Hello World aeiou";
  for (let i = 0; i < str.length; i++) {
    if (
      str[i] == "a" ||
      str[i] == "e" ||
      str[i] == "i" ||
      str[i] == "o" ||
      str[i] == "u"
    )
      console.log(`i = ${str[i]}`);
  }
}
