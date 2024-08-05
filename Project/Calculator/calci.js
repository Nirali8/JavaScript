input = document.querySelector(".input");

function display(inputdata) {
  if (input.value == "Error") input.value = "";
  input.value += inputdata;
  // console.log(inputdata);
}

function clearAll() {
  input.value = "";
}

function answer() {
  try {
    input.value = eval(input.value);
  } catch (error) {
    input.value = "Error";
  }
}
