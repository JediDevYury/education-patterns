export function calculateBad(typeSum) {
  if (typeSum === 1) {
    return 56 + 5 + 5;
  }
  if (typeSum === 4) {
    return 56 + 67 + 5;
  }
  if (typeSum === 5) {
    return 45 + 5 + 5;
  }
  return 2 + 5;
}

export function calculateGood(calculateSum) {
  return calculateSum() + 2 + 5;
}

calculateGood(() => 56 + 45);
calculateGood(() => 56 + 34);

class MovieBuilder {
  movieTransformer;

  constructor(movieTransformer) {
    this.movieTransformer = movieTransformer;
  }

  setMovie(title, duration) {
    const movie = this.movieTransformer(title, duration);
  }
}

const transformMovieStrategy = (title, duration) => ({
  name: title,
  duration: duration * 1000,
});

new MovieBuilder(transformMovieStrategy);
