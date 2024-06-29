/* Logical Operator */

/* Logical And
true if both true
*/

console.log("AND");
{
  let x = true;
  let y = false;
  let z = x && y;
  console.log(z);
}

/* Logical Or 
true if either of them iws true */
console.log("OR");
{
  let x = true;
  let y = false;
  let z = x || y;
  console.log(z);
}

/* Logical Not */
console.log("Not");
{
  let x = true;
  let y = false;
  let z = !y;
  console.log(z);

  z = !((true && false) + (false && true));
  console.log(z);
}
