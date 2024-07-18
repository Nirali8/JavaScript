/*swallow copy */
let data = [11, 22, 33, 44, 55];
let copy_data = data; //swallow copy

console.log(data);
console.log(copy_data);

data.unshift(66);
copy_data.pop();
console.log(data);
console.log(copy_data);

copy_data.push(77);
data.shift();
console.log(data);
console.log(copy_data);

/*deep copy */
let data1 = [11, 22, 33, 44, 55];
let copy_data1 = [...data1]; //deep copy

console.log(data1);
console.log(copy_data1);

data1.unshift(66);
copy_data1.pop();
console.log(data1);
console.log(copy_data1);

copy_data1.push(77);
data1.shift();
console.log(data1);
console.log(copy_data1);
