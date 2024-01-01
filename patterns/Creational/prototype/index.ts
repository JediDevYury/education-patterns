interface Prototype {
  clone(): Prototype;
}

class Ad implements Prototype {
  duration: number;
  ageRestriction: number;
  isWatched: boolean;
  play() {}
  refresh() {}
  sendAnalytic() {}

  clone() {
    const copy = new Ad();
    copy.ageRestriction = this.ageRestriction;
    copy.duration = this.duration;
    copy.isWatched = false;

    return copy;
  }
}

const ad = new Ad();

const adCopy = ad.clone();
