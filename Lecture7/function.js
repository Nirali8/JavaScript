/*Basic function */
{
  let func1 = function geek() {
    console.log("JS function");
  };
  console.log(func1);
  console.log(func1());
  func1();
}
/*Arrow Function */
{
  const func1 = () => console.log("Hello Arraw function");
  func1();
  console.log(func1());
}
/*Function with return value */
{
  function profile() {
    return "This is return type function";
  }
  console.log(profile());
}
/*Function with events */
/*
    Mouse
    keyboard
    window
 */
{
  function html() {
    document.getElementById("demo").innerHTML = "Hello Dear";
  }
  function css() {
    document.getElementById("demo").style.backgroundColor = "yellow";
    document.getElementById("demo").style.color = "red";
    document.getElementById("demo").style.textDecoration = "underline";
  }
}
