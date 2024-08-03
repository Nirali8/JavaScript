"use strict";
var input = document.querySelectorAll("textarea")[0],
  characterCount = document.querySelector("#characterCount"),
  wordCount = document.querySelector("#wordCount");

// updating the displayed stats after every keypress
input.addEventListener("keyup", function () {
  console.clear();

  // character count
  characterCount.innerHTML = input.value.length;

  var words = input.value.split(" ");
  console.log(words);
  if (words) {
    wordCount.innerHTML = words.length;
  } else {
    wordCount.innerHTML = 0;
  }
});
