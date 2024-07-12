/*1 . Adition of two nos */
{
  var input = parseInt(prompt("Enter any no"));
  var input2 = prompt("Enter 2nd no");
  input2 = parseInt(input2);
  let z = input + input2;
  console.log(input + " + " + input2 + " = " + z);
}
/* 2 . Area of rectangle */
{
  var length = parseInt(prompt("Enter length of rectangle"));
  var width = prompt("Enter width of rectangle");
  width = parseInt(width);
  let area = length * width;
  console.log("Area of Rectangle = " + area);
}
/* 3 . Celcius to ferenhit */
{
  var celc = parseInt(prompt("Enter temperature in celcius"));
  let feren = (celc * 9) / 5 + 32;
  console.log("temperature in ferenhit = " + feren);
}
/* 4 . remainder */
{
  var input = parseInt(prompt("Enter any no"));
  var input2 = prompt("Enter 2nd no");
  input2 = parseInt(input2);
  let z = input % input2;
  console.log(input + " % " + input2 + " = " + z);
}
/*5 . Power of no */
{
  var input = parseInt(prompt("Enter any no"));
  var input2 = prompt("Enter 2nd no");
  input2 = parseInt(input2);
  let z = input ** input2;
  console.log(input + " ** " + input2 + " = " + z);
}
/* 6 . Combination of arithmatic operations */
{
  let x = 10;
  let y = 2;
  let z = x * y + y / x - y;
  console.log(z);
}
/*7. comparing nos */
{
  console.log(5 > 10 ? 5 : 10);
  console.log(15 > 10 ? 15 : 10);
  console.log(25 >= 25 ? "equal" : "Not equal");
  console.log(5 < 10 ? 5 : 10);
  console.log(15 <= 10 ? 15 : 10);
}
/*8. Comparing string and 9.comparing different type */
{
  let x = "Hello";
  let y = "Hello";
  let z = "hello";
  let a = "20";
  let b = 20;
  console.log(x == y);
  console.log(x == z);
  console.log(a == b);
  console.log(a === b);
}
/*10. multiple operator */
{
  let x = 10;
  let y = 2;
  let z = (x += (y ** x / y) % x);
  console.log(z);
}
