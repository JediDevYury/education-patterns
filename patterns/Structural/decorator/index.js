export const player = {
  play() {},
  pause() {},
  seek() {},
};

const livePlayer = {
  player: player,
  play() {
    this.player.seek(999);
    this.player.play();
  },

  pause() {},

  toAir() {
    this.player.seek(999);
  },
};
