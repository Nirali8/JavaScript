/* <!-- find larger no --> */
function getLarge() {
  const num1 = Number(document.getElementById("no1").value);
  const num2 = Number(document.getElementById("no2").value);
  const num3 = Number(document.getElementById("no3").value);
  let large = 0;
  if (num1 > num2 && num1 > num3) large = num1;
  else if (num2 > num1 && num2 > num3) large = num2;
  else large = num3;
  document.getElementById("large").innerHTML = large;
  document.getElementById("large").style.color = "red";
}

/*<!-- find perfect no --> */
function getCheck() {
  let no = Number(document.getElementById("no").value);
  let sum = 0;
  for (let i = 1; i < no; i++) {
    if (no % i == 0) sum += i;
  }
  if (sum == no) document.getElementById("result").innerHTML = "Yes";
  else document.getElementById("result").innerHTML = "No";
  document.getElementById("result").style.color = "red";
}

/*<!-- find Leap year --> */
function getCheckLeap() {
  let year = Number(document.getElementById("leap").value);
  let str = "No";
  if (year % 4 == 0 && year % 100 != 0) str = "yes";
  else if (year % 400 == 0) str = "yes";
  document.getElementById("result1").innerHTML = str;
  document.getElementById("result1").style.color = "red";
}
