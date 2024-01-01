export const UserService = {
  getCurrentUser() {},

  getUserRole() {},

  getUserGroup() {},
};

const CachedUserService = {
  baseService: UserService,
  currentUser,

  getCurrentUser() {
    if (!this.currentUser) {
      this.currentUser = this.baseService.getCurrentUser();
    }

    return this.currentUser;
  },

  getUserRole() {},

  getUserGroup() {},
};
