/*Calculator Program */
function getAdd() {
  const num1 = Number(document.getElementById("no1").value);
  const num2 = Number(document.getElementById("no2").value);
  const add = num1 + num2;
  document.getElementById("result").innerHTML = add;
  document.getElementById("result").style.color = "red";
}
function getMinus() {
  const num1 = Number(document.getElementById("no1").value);
  const num2 = Number(document.getElementById("no2").value);
  const add = num1 - num2;
  document.getElementById("result").innerHTML = add;
  document.getElementById("result").style.color = "red";
}
function getMulti() {
  const num1 = Number(document.getElementById("no1").value);
  const num2 = Number(document.getElementById("no2").value);
  const add = num1 * num2;
  document.getElementById("result").innerHTML = add;
  document.getElementById("result").style.color = "red";
}
function getDivison() {
  const num1 = Number(document.getElementById("no1").value);
  const num2 = Number(document.getElementById("no2").value);
  const add = num1 / num2;
  document.getElementById("result").innerHTML = add;
  document.getElementById("result").style.color = "red";
}
