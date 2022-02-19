const numberOffilms = +prompt('Сколько фильмов вы уже посмотрели?', '');




 const personalMovieDB = {
    count : numberOffilms,
    movies : {},
    actors : {},
    genres : [],
    privat : false
};

const a = prompt('Один из просмотренныз фильмов', ''),
      b = prompt('На сколько оцените его?', ''),
      c = prompt('Один из просмотренныз фильмов', ''),
      d = prompt('На сколько оцените его?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);

                         



