/*Call back function */
{
  function sum(a, b, callback) {
    callback();
    return a + b;
  }
  function callback() {
    console.log("This is call back function");
  }
  console.log(sum(200, 30, callback));
}
{
  function sum(a, b, callback) {
    function callback() {
      console.log("This is call back function1");
    }
    callback();
    return a + b;
  }
  console.log(sum(20, 30));
}
