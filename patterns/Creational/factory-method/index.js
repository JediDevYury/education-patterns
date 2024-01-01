"use strict";
class FilmCreator {
    create() {
        return { title: "", duration: 123 };
    }
}
class TvShowCreator {
    create() {
        return { title: "", seasons: 123 };
    }
}
class TvSeriesCreator {
    create() {
        return { title: "", episodeCount: 123 };
    }
}
function publicContent(creator) {
    const movie = creator.create();
}
publicContent(new FilmCreator());
publicContent(new TvShowCreator());
publicContent(new TvSeriesCreator());
