export const Mediator = {
  subscribers: new Map(),

  notify(action) {
    this.subscribers.forEach((callback) => callback(action));
  },

  subscribe(callback) {
    this.subscribers.set(callback, callback);
  },
  unsubscribe(callback) {
    this.subscribers.delete(callback);
  },
};

Mediator.notify({ type: "createUser" });
