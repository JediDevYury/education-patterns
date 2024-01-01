const PlayerConfigBuilder = {
  config: {},

  setAnalytics(analyticEvents = []) {
    analyticEvents.forEach((event) => {
      this.config.analytic[event] = {};
    });
  },

  setStreams(streams) {
    // this.config.streams =
  },

  getConfig() {
    return this.config;
  },

  clear() {
    this.config = {};
  },
};
