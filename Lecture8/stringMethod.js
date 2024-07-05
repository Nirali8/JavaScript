/* Trim() Prototype 
remove white space from both ends*/
/* Trimstart() Prototype 
remove white space from start*/
/* Trimend() Prototype 
remove white space from  ends*/
{
  let str = " This is JS string method! ";
  console.log(str);
  console.log(str.length);

  let str1 = str.trim();
  console.log(str1);
  console.log(str1.length);

  str1 = str.trimStart();
  console.log(str1);
  console.log(str1.length);

  str1 = str.trimEnd();
  console.log(str1);
  console.log(str1.length);
}
/* charat()==>return character at given index not support -ve*/
/* charcodeat()==>return ascii valve of character at given index */
{
  let str = " This is JS string method! ";
  console.log(str);
  console.log(str.length);

  let str1 = str.charAt(10);
  console.log(str1);

  str1 = str.charCodeAt(10);
  console.log(str1);
}
/*at()==>return character at given index support -ve(from end) */
{
  let str = " This is JS string method! ";
  console.log(str);
  console.log(str.length);

  let str1 = str.at(10);
  console.log(str1);

  str1 = str.at(-10);
  console.log(str1);
}

/*includes(searchString)
includes(searchString, position)
return case sensitive string present in givern string yes or no
check after position index
 */
{
  let str = " This is JS string method! ";
  console.log(str);
  console.log(str.length);

  let str1 = str.includes("str");
  console.log(str1);

  str1 = str.includes("str", 16);
  console.log(str1);
}
