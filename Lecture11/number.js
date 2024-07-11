/*Number Function */

let no = "1050";
console.log(+no);
console.log(Number(no)); //string to no

let x = 1125667.896;
let y = 0.00000000182;
console.log(x);
console.log(x.toString());
console.log(x.toExponential());
console.log(x.toExponential(2));
console.log(x.toExponential(4));
console.log(x.toPrecision());
console.log(x.toPrecision(5));
console.log(x.toFixed());
console.log(x.toFixed(1));
console.log(x.valueOf());

console.log(parseInt("10"));
console.log(parseInt("-10"));
console.log(parseInt("10.33"));
console.log(parseInt("10Yes"));
console.log(parseInt("10 Yes"));
console.log(parseInt("yes10"));

console.log(parseFloat("9"));
console.log(parseFloat("9.77"));
console.log(parseFloat("-9.99"));
console.log(parseFloat("9.77Yes"));
console.log(parseFloat("9.77 Yes"));
console.log(parseFloat("yes9.99"));

console.log(Number.isInteger(1232435345));
console.log(Number.isSafeInteger(12324543434435345));
console.log(Number.isFinite(1 / 0));
console.log(Number.isFinite(0 / 1));
