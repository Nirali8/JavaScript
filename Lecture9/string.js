/*JS string Methods*/
/*slice(index) =>return new string from given index
slice(startindex,endindex)=>return new string from start index to endindex-1
support -ve means start index from last
*/
{
  let str = "This is JS string MEthod!";
  console.log(str);
  let str1 = str.slice(8);
  console.log(str1);
  str1 = str.slice(-8);
  console.log(str1);
  str1 = str.slice(-8, -4); //end index should b smaller in no despite sign
  console.log(str1);
  str1 = str.slice(8, 14);
  console.log(str1);
  str1 = str.slice(8, -2);
  console.log(str1);
  str1 = str.slice(-18, 12);
  console.log(str1);
}
/*substring(index) =>return new string from given index
substring(startindex,endindex)=>return new string from start index to endindex-1
not support -ve consider as zero
*/
{
  let str = "This is JS string MEthod!";
  console.log(str);
  let str1 = str.substring(8);
  console.log(str1);
  str1 = str.substring(-8); //consider from zero
  console.log(str1);
  str1 = str.substring(8, 14);
  console.log(str1);
  str1 = str.substring(8, -2); //0 to 8
  console.log(str1);
  str1 = str.substring(-18, 12); //0 to 12
  console.log(str1);
}
/*concat()==>concat multiple string */
{
  let str1 = "I";
  let str2 = "am";
  let str3 = "Nirali";
  let str4 = "Sanghani";
  let result = str1.concat(str2);
  console.log(result);
  result = str1.concat(str2, str3, str4);
  console.log(result);
}
/*startwith(string) ==>return true or false if string start with given string
startwith(string,position)==>return true or false if string start with given string at that position

endwith(string)==>return true or false if string end with given string
endwith(string,endposition)==>return true or false if string end with given string at that position

*/
{
  let str = " This is JS string Method!";
  console.log(str.startsWith(" "));
  console.log(str.startsWith("this"));
  console.log(str.startsWith("is", 6));
  console.log(str.endsWith("!"));
  console.log(str.endsWith("d"));
  console.log(str.endsWith("string", 14));
}
/*indexof(string) =>return first accurunce of given string
indexof(string,position) =>return first accurunce of given string from that position


lastindexof(string)=>return last accurunce of given string
lastindexof(string,position) =>return last accurunce of given string from that position
*/

{
  let str = "I am Javascript! am I?";
  let result = str.indexOf("am");
  console.log(result);
  result = str.indexOf("am", 6);
  console.log(result);
  result = str.lastIndexOf("am");
  console.log(result);
  result = str.lastIndexOf("am", 6);
  console.log(result);
}
/*
padstart(maxlength)=>add padding from start
padstart(maxlength,string)=>add string at start

padEnd(maxlength)=>add padding at end
padEnd(maxlength,string)=>add string at end
*/
{
  let str = "This is padstart and padEnd Example";
  console.log(str);
  console.log(str.length);

  let str1 = str.padStart(40);
  console.log(str1);

  str1 = str.padStart(40, "$");
  console.log(str1);

  str1 = str.padStart(40, "$?");
  console.log(str1);

  str1 = str.padEnd(40);
  console.log(str1);

  str1 = str.padEnd(40, "$");
  console.log(str1);

  str1 = str.padEnd(40, "$?");
  console.log(str1);
}
/*repeat(count) */
{
  let str = "Shreya";
  console.log(str.repeat(10));
}
/*
toUpperCase() == toLocaleUpperCase()==>convert to upper case 
toLowerCase() == toLocaleLowerCase()==>convert to lower case */
{
  let str = "Hello!";
  console.log(str.toLocaleUpperCase());
  console.log(str.toUpperCase());

  console.log(str.toLowerCase());
  console.log(str.toLocaleLowerCase());
}
/*
split(seprator)=>return seprate string into array
split(seprator,limit)=>array with limit
 */
{
  let str = "Hello";
  let result = str.split();
  console.log(result);

  result = str.split("", 3);
  console.log(result);
}
/*valueof()=>return string value */
{
  let str = "hello";
  let str1 = new String("Hello");

  console.log(str.valueOf());
  console.log(str1.valueOf());
}
