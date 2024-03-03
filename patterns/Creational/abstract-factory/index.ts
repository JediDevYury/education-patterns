export interface Film {
  title: string;
  duration: number;
}
export interface TvMiniSeries {
  title: string;
  episodeCount: number;
}
export interface TvShow {
  title: string;
  seasonCount: number;
}

interface MovieFactory {
  createFilm(): Film;
  createTvMiniSeries(): TvMiniSeries;
  createTvShow(): TvShow;
}

const horrorFactory: MovieFactory = {
  createFilm() {
    return { title: "", duration: 124 };
  },
  createTvMiniSeries() {
    return { title: "", episodeCount: 10 };
  },
  createTvShow() {
    return { title: "", seasonCount: 5 };
  },
};
const comedyFactory: MovieFactory = {
  createFilm() {
    return { title: "", duration: 124 };
  },
  createTvMiniSeries() {
    return { title: "", episodeCount: 12 };
  },
  createTvShow() {
    return { title: "", seasonCount: 6 };
  },
};

function createMovieSeason(movieFactory: MovieFactory) {
  movieFactory.createFilm();
  movieFactory.createTvMiniSeries();
  movieFactory.createTvShow();
}

createMovieSeason(horrorFactory);
createMovieSeason(comedyFactory);
