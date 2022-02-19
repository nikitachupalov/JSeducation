"use strict";

const numberOffilms = +prompt('Сколько фильмов вы уже посмотрели?', '');




 const personalMovieDB = {
    count : numberOffilms,
    movies : {},
    actors : {},
    genres : [],
    privat : false
};


let x = 100;
while( x == 100){
    const a = prompt('Один из просмотренныз фильмов', ''),
      b = prompt('На сколько оцените его?', ''),
      c = prompt('Один из просмотренныз фильмов', ''),
      d = prompt('На сколько оцените его?', '');
    if((a.length < 1 || a.length > 50 || a == null) || (b.length < 1 || b.length > 50 || b == null )|| (c.length < 1 || c.length > 50 || c == null)||( d.length < 1 || d.length > 50 || c == null)){
        alert('Answer again, please');
    }else{
        personalMovieDB.movies[a] = b;
        personalMovieDB.movies[c] = d;
        break;
    }
}



console.log(personalMovieDB);

                         




