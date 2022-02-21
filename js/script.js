"use strict";

const arr = [7, 3, 4, 6, 8];
arr.sort();
console.log(arr);


function compare(a, b) {
    return a - b;
}
arr.pop();

arr.push(10);
console.log(arr);

for(let i = 0;i < arr.length; i++){
    console.log(arr[i]);
}

for(let value of arr){
    console.log(value);
}


arr.forEach(function (i, n, arr){
    console.log(`${n}: ${i} in ${arr}`);
});

const str = prompt('', '');
const products = str.split(', ');
products.sort();
console.log(products.join(';'));








