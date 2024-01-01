"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const shakaPlayer = {
    play() { },
};
const yaPlayer = {
    start() { },
};
const yaPlayerAdapter = {
    player: yaPlayer,
    play() {
        this.yaPlayer.start();
    },
};
function playContent(player) {
    player.play();
}
playContent(shakaPlayer);
playContent(yaPlayerAdapter);
