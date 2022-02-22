'use strict';


console.log(typeof(String(null)));

console.log(typeof(5 + ''));

const num = 5;

console.log('https://vk.com/catalog/' + num);


const fontSize = 26+'px';


console.log(typeof(Number('4')));

console.log(typeof(+'5'));


// to boolean

// 0,'',null,undefined,Nan; - false

let switcher = null;
if(switcher){
    console.log('Working...');
}

switcher = 1;

if(switcher){
    console.log('Working1...');
}


