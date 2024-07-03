/*Array */
/*{
  let ary = [];
  console.log(ary);
  ary[0] = "10";
  console.log(ary);
  ary.shift(); //
  console.log(ary);
  ary.length = 10;
  console.log(ary);
  ary[5] = "10";
  console.log(ary);

  let array = [];
  console.log(typeof array);
  let array1 = new Array();
  console.log(typeof array1);

  console.log(array);
  console.log(array1);
}*/

/* Object */
/*{
  let obj = {};
  console.log(obj);
  obj.key1 = "skillQode";
  console.log(obj);
  console.log(obj.key1); //dot
  console.log(obj["key1"]); //bracket
}*/

/*For --- in loop */
{
  let obj = {
    a: 10,
    b: 20,
    c: 30,
    d: 40,
  };

  for (let key in obj) {
    console.log(`${key} : ${obj[key]}`);
  }
}
