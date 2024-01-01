export interface Player {
  play(): void;
}

const shakaPlayer = {
  play() {},
};

const yaPlayer = {
  start() {},
};

const yaPlayerAdapter = {
  player: yaPlayer,

  play() {
    this.yaPlayer.start();
  },
};

function playContent(player: Player) {
  player.play();
}

playContent(shakaPlayer);
playContent(yaPlayerAdapter);
