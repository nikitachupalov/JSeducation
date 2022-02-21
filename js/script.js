"use strict";

function learnJS(lang, callback) {
    console.log(`I learn ${lang}`);
    callback();
}

function done(){
    console.log('Я прошел этот урок!');
}


learnJS('JavaScript', done);









