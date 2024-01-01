interface Movie {
  title: string;
}

interface MovieCreator {
  create(): Movie;
}

class FilmCreator implements MovieCreator {
  create() {
    return { title: "", duration: 123 };
  }
}
class TvShowCreator implements MovieCreator {
  create() {
    return { title: "", seasons: 123 };
  }
}
class TvSeriesCreator implements MovieCreator {
  create() {
    return { title: "", episodeCount: 123 };
  }
}

function publicContent(creator: MovieCreator) {
  const movie = creator.create();
}

publicContent(new FilmCreator());
publicContent(new TvShowCreator());
publicContent(new TvSeriesCreator());
