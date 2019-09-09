import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    hash: "",
    iv: "",
    salt: "",
    data: {},
    categorie: null
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
    },
    setCategorie(state, categorie) {
      state.categorie = categorie;
    }
  },
  actions: {
    encryptAndStoreDb() {},
    decryptAnStoreState() {}
  }
});
