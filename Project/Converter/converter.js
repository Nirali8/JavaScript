{
  let celsius = document.getElementById("celsius");
  let fahrenheit = document.getElementById("fahrenheit");

  celsius.oninput = function () {
    fahrenheit.value = (parseFloat(celsius.value) * 9) / 5 + 32;
  };

  fahrenheit.oninput = function () {
    celsius.value = ((parseFloat(fahrenheit.value) - 32) * 5) / 9;
  };
}
