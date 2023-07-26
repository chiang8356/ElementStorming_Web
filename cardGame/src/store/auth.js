//管理身分驗證狀態，以及用户資訊的存儲庫

import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    //token: null,
    isLoggedIn: false,
    userAccount: null,
    userCoins: null,
  }),
  actions: {
    // setToken(token) {
    //   //this.token = token;
    //   this.isLoggedIn = true;
    // },
    // clearToken() {
    //   //this.token = null;
    //   this.isLoggedIn = false;
    // },
    setUserAccount(username) {
      this.userAccount = username;
      this.isLoggedIn = true;
    },
    clearUserAccount() {
      this.userAccount = null;
    },
    setUserCoins(coins) {
      this.userCoins = coins;
    },
    clearUserCoins() {
      this.userCoins = null;
    },
  },
});

export default useAuthStore;

