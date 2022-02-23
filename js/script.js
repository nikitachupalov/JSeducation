'use strict';

const box = document.getElementById('box');
console.log(box);

// const head = document.getElementsByTagName('h1')[2];

// console.log(head);

const classs = document.getElementsByClassName('head');

console.log(classs);


const head = document.querySelectorAll('.head');

head.forEach(item => {
    console.log(item);
});

const oneHead = document.querySelector('.head');
console.log(oneHead);