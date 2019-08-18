/* eslint no-restricted-globals: 'off' */

// Iteration 1: All rates average - Get the average of all rates with 2 decimals 

const roundNumber = (number, digits) => Math.round(number * 10 ** digits) / 10 ** digits

const ratesAverage = (movies) => {
  let sum = 0;
  let avg = 0;
  for (let val of movies) {
    sum += parseFloat(val.rate);
  }
  avg = sum / movies.length;
  return roundNumber(avg, 2);
}

// Iteration 2: Drama movies - Get the average of Drama Movies

const dramaMoviesRate = (movies) => {
  let dramaMovies = movies.filter(movie => {
    if (movie.genre.includes('Drama')) {
      return true;
    } else {
      return false;
    }
  });

  if (dramaMovies.length === 0) return 0;
  const averageDramaMovieRating = ratesAverage(dramaMovies);
  return averageDramaMovieRating;
}

// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)

const orderByDuration = (movies) => {
  let durationArray = movies.map(dura => {
    return dura.duration;
  })
  return durationArray.sort();
}


// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct


const howManyMovies = (movies) => {
  let spielbergs = movies.filter(movie => {
    if (movie.genre.includes('Drama')) {
      return true;
    } else {
      return false;
    }
  }).filter(film => {
    if (film.director.includes('Steven Spielberg')) {
      return true;
    } else {
      return false;
    }
  });
  return spielbergs.length
};

// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles

const orderAlphabetically = (movies) => {
  let alphabet = movies.slice(0, 21).map(abc => {
    return abc.title;
  })
  if (movies.length < 20) {
    return alphabet.sort();
  }
}


// Iteration 6: Time Format - Turn duration of the movies from hours to minutes


const turnHoursToMinutes = (movies) => {
  //let hour = parseInt('1h') || parseInt('1m');
  //let minute = parseInt('1m');
  let converter = movies.map(time => {
       let hour = time.duration.map(hours => parseInt(hours));
       let minute = time.map(minutes => parseInt(minutes))
       return hour + minute
}) 
}

// BONUS Iteration: Best yearly rate average - Best yearly rate average