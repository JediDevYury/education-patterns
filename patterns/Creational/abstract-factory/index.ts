export interface Film {
  title: string;
  duration: number;
}
export interface TvSeries {
  title: string;
  episodeCount: number;
}
export interface TvShow {
  title: string;
  seasonCount: number;
}

interface MovieFactory {
  createFilm(): Film;
  createTvSeries(): TvSeries;
  createTvShow(): TvShow;
}

const horrorFactory: MovieFactory = {
  createFilm() {
    return { title: "", duration: 124 };
  },
  createTvSeries() {
    return { title: "", episodeCount: 124 };
  },
  createTvShow() {
    return { title: "", seasonCount: 124 };
  },
};
const comedyFactory: MovieFactory = {
  createFilm() {
    return { title: "", duration: 124 };
  },
  createTvSeries() {
    return { title: "", episodeCount: 124 };
  },
  createTvShow() {
    return { title: "", seasonCount: 124 };
  },
};

function createMovieSeason(movieFactory: MovieFactory) {
  movieFactory.createFilm();
  movieFactory.createTvSeries();
  movieFactory.createTvShow();
}

createMovieSeason(horrorFactory);
createMovieSeason(comedyFactory);
