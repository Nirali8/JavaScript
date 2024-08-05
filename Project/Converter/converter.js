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
{
  let km = document.getElementById("km");
  let meter = document.getElementById("meter");

  km.oninput = function () {
    meter.value = km.value * 1000;
  };

  meter.oninput = function () {
    km.value = meter.value / 1000;
  };
}
