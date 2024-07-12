/*<!-- String rearrange in alphabetical order-->*/
function getRearrange() {
  let str = document.getElementById("str").value;
  console.log(str);
  let array = str.split("");
  console.log(array);
  array.sort();
  str = array.join("");
  document.getElementById("result1").innerHTML = str;
  document.getElementById("result1").style.color = "red";
}

/*   <!-- string uppercase --> */
function getRearrange1() {
  let str = document.getElementById("str1").value;
  console.log(str);
  let array = str.split(" ");
  for (let i = 0; i < array.length; i++) {
    // console.log(array[i]);
    let str1 = array[i].split("");
    str1[0] = str1[0].toUpperCase();
    array[i] = str1.join("");
  }
  str = array.join(" ");
  document.getElementById("result2").innerHTML = str;
  document.getElementById("result2").style.color = "red";
}
/*  <!--Largest word in string--> */
function getLargest() {
  let str = document.getElementById("str2").value;
  console.log(str);
  let array = str.split(" ");
  let str1 = array[0];
  for (let i = 0; i < array.length; i++) {
    if (str1.length < array[i].length) {
      str1 = array[i];
    }
  }
  document.getElementById("result3").innerHTML = str1;
  document.getElementById("result3").style.color = "red";
}
/*<!--Reverse string--> */
function getReverse() {
  let str = document.getElementById("str3").value;
  let rev = "";
  for (let i = str.length - 1; i >= 0; i--) {
    rev += str[i];
    // console.log(`i = ${str[i]} = ${rev}`);
  }
  document.getElementById("result4").innerHTML = rev;
  document.getElementById("result4").style.color = "red";
}

/*<!--Palindrom string--> */
function getPalindrom() {
  let str = document.getElementById("str4").value;
  let rev = "";
  for (let i = str.length - 1; i >= 0; i--) {
    rev += str[i];
    // console.log(`i = ${str[i]} = ${rev}`);
  }
  if (rev == str) document.getElementById("result5").innerHTML = "Yes";
  else document.getElementById("result5").innerHTML = "NO";
  document.getElementById("result5").style.color = "red";
}
/*<!--Count Vowel and Consonant in string--> */
function getCheck() {
  let str = document.getElementById("str5").value;
  let c = 0;
  let v = 0;
  for (let i = 0; i < str.length; i++) {
    if (
      str[i] == "a" ||
      str[i] == "e" ||
      str[i] == "i" ||
      str[i] == "o" ||
      str[i] == "u"
    )
      v++;
    else c++;
  }
  document.getElementById("result6").innerHTML = v;
  document.getElementById("result6").style.color = "red";
  document.getElementById("result7").innerHTML = c;
  document.getElementById("result7").style.color = "red";
}
