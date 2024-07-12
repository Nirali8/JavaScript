function getReverse() {
  let num = Number(document.getElementById("no").value);
  let rev = 0,
    rem;
  console.log(num);
  while (num > 0) {
    rem = num % 10;
    rev = rev * 10 + rem;
    num = Math.floor(num / 10);
  }
  console.log(rev);
  document.getElementById("result").innerHTML = rev;
  document.getElementById("result").style.color = "red";
}
