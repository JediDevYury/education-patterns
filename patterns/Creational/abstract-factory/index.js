"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const horrorFactory = {
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
const comedyFactory = {
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
function createMovieSeason(movieFactory) {
    movieFactory.createFilm();
    movieFactory.createTvSeries();
    movieFactory.createTvShow();
}
createMovieSeason(horrorFactory);
createMovieSeason(comedyFactory);
