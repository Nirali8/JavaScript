let dateEl = document.querySelector(".date");
let dayEl = document.querySelector(".day");
function clock() {
  // We create a new Date object and assign it to a variable called "time".
  let weekday = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    time = new Date(),
    // Access the "getHours" method on the Date object with the dot accessor.
    hours = time.getHours(),
    // Access the "getMinutes" method with the dot accessor.
    minutes = time.getMinutes(),
    seconds = time.getSeconds(),
    date = time.getDate(),
    month = time.getMonth() + 1,
    year = time.getFullYear(),
    day = weekday[time.getDay()];
  document.querySelector(".clock").innerHTML =
    setTime(hours) + ":" + setTime(minutes) + ":" + setTime(seconds);
  dateEl.innerHTML = date + "/" + month + "/" + year;
  dayEl.innerHTML = day;
  function setTime(set) {
    if (set < 10) {
      set = "0" + set;
    }
    return set;
  }
}
setInterval(clock, 1000);
