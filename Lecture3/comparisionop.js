/* Comparision  operator*/

/*Equal*/
{
  let x = "Nirali";
  let y = "Sanghani";
  x += y;
  console.log(x);
}
/* equal to and not equal to */
{
  let x = 20;
  let y = "20";
  let z1 = x == y;
  let z2 = x != y;
  console.log("Equal to ", z1);
  console.log("Not Equal to ", z2);
}
/* strict equal to and strict not equal to */
{
  let x = 20;
  let y = "20";
  let z1 = x === y;
  let z2 = x !== y;
  console.log("Equal to ", z1);
  console.log("Not Equal to ", z2);
  x = 10;
  y = 10;
  z1 = x === y;
  z2 = x !== y;
  console.log("Equal to ", z1);
  console.log("Not Equal to ", z2);
}
/* Less than and less than or equal to */
{
  let x = 5;
  let y = 5;
  let z1 = x < y;
  let z2 = x <= y;
  let z3 = !(x <= y);

  console.log("less than", z1);
  console.log("less than eqaul to", z2);
  console.log("not less than ", z3);
}
/* greater than and greater than or equal to */
{
  {
    let x = 5;
    let y = 5;
    let z1 = x > y;
    let z2 = x >= y;
    let z3 = !(x >= y);

    console.log("greater than", z1);
    console.log("greater than eqaul to", z2);
    console.log("not greater than ", z3);
  }
}
