export const UserService = {
  currentUser,
  getUser() {},

  loadCurrentUser() {
    this.currentUser = {};
  },

  createNewUser() {},
};

Object.freeze(UserService);
