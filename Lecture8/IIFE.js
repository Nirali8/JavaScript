/*IIFE  (Immediately Invoked Function Expression*/
{
  (function () {
    console.log("IIFE");
  })();
}
{
  const func = (() => console.log("Hello IIFE"))();
}
{
  (function (name) {
    console.log(name);
  })("hello world");
}
