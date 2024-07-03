/* For each and for --off loop*/
{
  let array = [
    "html",
    "css",
    "sass",
    "tailwind",
    "javascript",
    "react",
    "nextjs",
  ];
  console.log(array[0]);
  console.log(array);

  for (let items of array) {
    console.log(items);
  }

  array.forEach((item) => console.log("for each", item));

  let arr = [10, 20, 30, 40];
  for (let multi of arr) {
    console.log(multi * 10);
  }
  arr.forEach((item) => console.log(item * 20));

  arr.map((item) => console.log(item * 30));
}
