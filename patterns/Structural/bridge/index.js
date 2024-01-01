const player = {
  play() {},
  pause() {},
  setVolume() {},
};

export const playerSkin = {
  player: player,
  play() {
    this.player.play();
  },

  pause() {
    this.player.pause();
  },

  upVolume() {
    this.player.setVolume(10);
  },

  downVolume() {
    this.player.setVolume(-10);
  },
};
