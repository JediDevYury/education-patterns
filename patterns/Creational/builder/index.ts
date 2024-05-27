// PlayerConfig.ts
export interface IPlayerConfig {
  width: number;
  height: number;
  controls: boolean;
  autoplay: boolean;
  loop: boolean;
  volume: number;
  source: string;
}

export class PlayerConfig implements IPlayerConfig {
  width: number = 640;
  height: number = 360;
  controls: boolean = true;
  autoplay: boolean = false;
  loop: boolean = false;
  volume: number = 1.0;
  source: string = '';
}

class PlayerConfigBuilder {
  private playerConfig: PlayerConfig;

  constructor() {
    this.playerConfig = new PlayerConfig();
  }

  setWidth(width: number): PlayerConfigBuilder {
    this.playerConfig.width = width;
    return this;
  }

  setHeight(height: number): PlayerConfigBuilder {
    this.playerConfig.height = height;
    return this;
  }

  setControls(controls: boolean): PlayerConfigBuilder {
    this.playerConfig.controls = controls;
    return this;
  }

  setAutoplay(autoplay: boolean): PlayerConfigBuilder {
    this.playerConfig.autoplay = autoplay;
    return this;
  }

  setLoop(loop: boolean): PlayerConfigBuilder {
    this.playerConfig.loop = loop;
    return this;
  }

  setVolume(volume: number): PlayerConfigBuilder {
    this.playerConfig.volume = volume;
    return this;
  }

  setSource(source: string): PlayerConfigBuilder {
    this.playerConfig.source = source;
    return this;
  }

  build(): PlayerConfig {
    return this.playerConfig;
  }
}

const builder = new PlayerConfigBuilder();

const playerConfig = builder
 .setWidth(800)
 .setHeight(450)
 .setControls(true)
 .setAutoplay(true)
 .setLoop(false)
 .setVolume(0.8)
 .setSource('http://example.com/video.mp4')
 .build();

console.log(playerConfig);
