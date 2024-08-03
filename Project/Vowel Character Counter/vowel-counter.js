"use strict";
var input = document.querySelectorAll("textarea")[0],
  wordCount = document.querySelector("#VowelCount");
let vowel = 0;
// updating the displayed stats after every keypress
input.addEventListener("keyup", function () {
  console.clear();

  var str = input.value.split("");
  vowel = 0;
  for (let i = 0; i < str.length; i++) {
    if (
      str[i] == "a" ||
      str[i] == "e" ||
      str[i] == "i" ||
      str[i] == "o" ||
      str[i] == "u" ||
      str[i] == "A" ||
      str[i] == "E" ||
      str[i] == "I" ||
      str[i] == "O" ||
      str[i] == "U"
    )
      vowel++;
  }
  wordCount.innerHTML = vowel;
});
