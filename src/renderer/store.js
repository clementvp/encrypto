import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    hash: "",
    iv: "",
    salt: "",
    data: ""
  },
  mutations: {
    setHash(state, hash) {
      state.hash = hash;
    },
    setData(state, data) {
      state.data = data;
    },
    setIv(state, iv) {
      state.iv = iv;
    },
    setSalt(state, salt) {
      state.salt = salt;
    }
  },
  actions: {
    encryptAndStoreDb() {},
    decryptAnStoreState() {}
  }
});
