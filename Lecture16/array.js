/* Javascript array.flat() Method */

// flat()
// flat(depth)

let data = [10, 20, 30, 40, 50, [60, 70]];
console.log(data.flat());

data = [10, 20, [30, 40, [50, [60, 70]]]];
console.log(data.flat());

data = [10, 20, [30, 40, [50, [60, 70]]]];
console.log(data.flat(2));

data = [10, 20, [30, 40, [50, [60, 70]]]];
console.log(data.flat(Infinity));

/* Javascript array.foreach() Method */

data = [10, 20, 30, 40, 50, 60, 70];
let total = 0;
data.forEach((ele) => {
  total += ele;
});
console.log(total);

/* Javascript array.map() Method */

data = [10, 20, 30, 40, 50, 60, 70];
let newData = data.map((ele) => {
  return ele * 2;
});
console.log(newData);

/* Javascript array.filter() Method */

data = [10, 20, 30, 40, 50, 60, 70];
data = data.filter((ele) => ele >= 30);
console.log(data);

/* Javascript array.find() Method */

data = [10, 20, 30, 40, 50, 60, 70];
data = data.find((ele) => ele < 30);
console.log(data);

/* Javascript array.findIndex () Method */

data = [10, 20, 30, 40, 50, 60, 70];
data = data.findIndex((ele) => ele > 50);
console.log(data);

/* Javascript array.every() Method */

data = [10, 20, 30, 40, 50, 60, 70];
data = data.every((ele) => ele < 70);
console.log(data);

/* Javascript array.some() Method */

data = [10, 20, 30, 40, 50, 60, 70];
data = data.some((ele) => ele < 70);
console.log(data);

/* Javascript array.reduce() Method */

data = [10, 20, 30, 40, 50, 60, 70];
data = data.reduce((total, ele) => (total += ele), 10);
console.log(data);

/* Javascript array.reduceRight() Method */
data = [10, 20, 30, 40, 50, 60, 70];
data = data.reduceRight((total, ele) => (total += ele / 10), 50);
console.log(data);

/* Javascript array.entries() Method */

data = [10, 20, 30, 40, 50, 60, 70];
let a = data.entries();
console.log(a.next().value);
console.log(a.next().value);
console.log(a.next().value);
console.log(a.next().value);
console.log(a.next().value);
console.log(a.next().value);
console.log(a.next().value);

/* Javascript array.copywithin() Method */
data = [10, 20, 30, 40, 50, 60, 70];
console.log(data.copyWithin(3, 0));
console.log(data.copyWithin(3, 0, 2));
