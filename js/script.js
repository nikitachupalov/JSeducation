'use strict';

const box = document.getElementById('box');

// box.style.backgroundColor = 'blue';
// box.style.fontSize = '100px';

// box.style.cssText = 'background-color: red';

// const div = document.createElement('div');

box.classList.add('black');

document.body.append(box);

// document.querySelector('wrapper').append();

box.innerHTML = '<h1>Hello world</h1>';

// box.textContent = 'Hello wolrd';

box.insertAdjacentHTML('afterbegin', '<h2>Hello</h2>');



