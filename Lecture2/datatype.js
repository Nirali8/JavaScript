/*  
Primitive data type

string 
null
undefine
bigint
symbol
number
boolean

non primitive data type

array 
object

*/
{
  var a;
  console.log(a);

  console.log(undefined);

  let x = undefined;
  let y = undefined == undefined;

  console.log(x);
  console.log(typeof x);

  console.log(y);
  console.log(typeof y);

  let x1 = null;
  let y1 = null == undefined;
  let y2 = null === undefined;

  console.log(x1);
  console.log(typeof x1);

  console.log(y1);
  console.log(typeof y1);

  console.log(y2);
  console.log(typeof y2);
}
{
  let x = "number";
  let y = 6;
  let z = 3;

  console.log(z + z + x + z + y + z);

  console.log(x * y);

  console.log(y * z);

  console.log(typeof NaN);

  console.log(x * x);

  console.log(z * z * x + z + z * z - z);

  console.log(y * z + x + (x + x * x));

  console.log(y - z + y * (z + z));
}
