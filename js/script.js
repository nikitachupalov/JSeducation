"use strict";
// let a = 5,
//     b = a;

// b = b + 5;

// console.log(b, a);

// const obj = {
//     a : 5,
//     b : 1

// };

// const copy = obj;
// copy.a = 10;
// console.log(copy);
// console.log(obj);



function copy(mainObj){
    let objCopy = {};

    let key;
    for (key in mainObj){
        objCopy[key] = mainObj[key];
    }

    return objCopy;
}

const numbers = {
    a : 2,
    b : 5,
    c : {
        d : 4,
        e : 7
    }
};

const newNumbers = copy(numbers);

newNumbers.a = 10;

console.log(newNumbers);
console.log(numbers);


const add = {
    d : 17,
    e : 20
};




const clon = Object.assign({},add);

clon.e = 22;

// console.log(clon);
// console.log(add);

const oldArray = ['a', 'b', 'c'];

const newArray = oldArray.slice();

newArray[1] = 'd';

console.log(newArray);
console.log(oldArray);

const video = ['youtube', 'vimeo','rutube'],
      blogs = ['wordpress' , 'livejournal'],
      internet = [...video, ...blogs, 'vk', 'facebook'];

console.log(internet);

function log (a, b, c){
    console.log(a);
}



