// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

// Iteration 4: Drama movies - Get the average of Drama Movies

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average


//Iteration 1: All directors

function getAllDirectors(movies) {
    let directors = movies.map(function(movie) {
        return movie.director;
    });
    return directors; 
}


//Bonus - Iteration 1.1: Clean the array of directors

//Iteration 2: Steven Spielberg. The best?
function howManyMovies(movies) {
    let spielbergDramaMovies = movies.filter(function(movie) {
        return movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
    });
    return spielbergDramaMovies.length;
}
howManyMovies(movies)


//Iteration 3: All rates average
function ratesAverage(movies) {
    let Average = movies.reduce(function(acc, current) {
        if (current.rate === "" || current.rate === undefined) {
            return acc;
        };
        return acc + current.rate / movies.length
    },0);
    return Number(Average.toFixed(2));
}
ratesAverage(movies)


//Iteration 4: Drama movies
function dramaMoviesRate(array) {
    let drama = array.filter ((movie) => {
        return movie.genre.includes("Drama")
    });
    let dramaAvg = drama.reduce((acc, elem, index, arr) => {
        acc += elem.rate / drama.length;
        return acc;
    }, 0)
    return Number(dramaAvg.toFixed(2));
}

//Iteration 5: Order by year
function orderByYear(movies) {
    let newMoviesArray = movies.map(function(movie) {
        return movie
    });

    let moviesByYear = newMoviesArray.sort(function(movie1, movie2) {
        if (movie1.year !== movie2.year){
            return movie1.year - movie2.year 
        } else {
            return movie1.year - movie2.year && movie1.title > movie2.title
        }
    });
    return moviesByYear
}
orderByYear(movies)


//Iteration 6: Alphabetic order
function orderAlphabetically(movies){
    return movies
    .map(movie => movie.title)
    .sort((a, b) => {
      const firstMovie = a.toLowerCase();
      const secondMovie = b.toLowerCase();
      if (firstMovie > secondMovie) {
        return 1;
      } else if (firstMovie < secondMovie) {
        return -1;
      } else {
        return 0;
      }
    })
}

//BONUS - Iteration 7: Time format

//BONUS - Iteration 8: Best yearly rate average
