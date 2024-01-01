const pauseStage = {
  play() {
    return playStage;
  },

  pause() {
    console.log("already paused");
    return this;
  },
};

const playStage = {
  play() {
    console.log("already playing");
    return this;
  },

  pause() {
    return pauseStage;
  },
};

export const player = {
  stage: pauseStage,

  play() {
    this.stage = this.stage.play();
  },
  pause() {
    this.stage = this.stage.pause();
  },
};

player.play();
