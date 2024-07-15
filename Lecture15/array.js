/*Array ==> similar data store in one variable */
/*let data = []==>empty array */
let arr = new Array("Hello", "World", "Skill", "Qode");
console.log(arr);
arr[2] = "hi";
console.log(arr);
console.log(arr.length);

let data = [10, 20, 30, 40, 110, 220];
console.log(data);
console.log(Array.isArray(data));
console.log(data.length);

/*push => insert at last */
data.push(60);
data.push(70, 90);
console.log(data);

/*pop ==> remove from last  */
data.pop();
data.pop();
data.pop();
console.log(data);

/*unshift ==>  insert at first*/
data.unshift(100);
data.unshift(200, 300, 400);
console.log(data);

/*shift ==>  delete from first*/
data.shift();
data.shift();
data.shift();
console.log(data);

/*splice(startindex,removecount,..adddata)==>remove or insert at middle */
data.splice(2, 3, 420, 40, 23, 45);
console.log(data);
data.splice(3, 0, 33, 77); //only add no delete
console.log(data);

console.log(arr.sort()); //alpha sorting

console.log(data.sort((a, b) => a - b)); //assending order
console.log(data.sort((a, b) => b - a)); //dessending order

console.log(data.slice(1, 6));
console.log(data.reverse());

let num = [11, 22];
console.log(data.concat(num, ["a", "c", "d"]));
console.log(data);

console.log(data.includes(77));

const maxFun = (e) => {
  return Math.max.apply(null, e);
};

const minFun = (e) => {
  return Math.min.apply(null, e);
};

console.log(maxFun(data));
console.log(minFun(data));
