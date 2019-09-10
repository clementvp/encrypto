<template>
  <div class="old-friend">
    <div class="up">
      <div class="container-up">
        <h4 class="has-text-centered has-text-white title is-4">
          Welcome back to Encrypto
        </h4>
        <h5 class="has-text-centered has-text-white title is-5">
          Please unseal your vault to continue
        </h5>
      </div>
    </div>
    <div class="down">
      <div class="container-down">
        <b-field label="Master Password:">
          <b-input type="password" v-model="password" password-reveal></b-input>
        </b-field>
        <button
          class="button btn-unseal-vault is-medium is-fullwidth"
          @click="unsealVault"
        >
          Unseal vault
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import electron from "electron";
import { comparePassword } from "../../services/passwordService";
export default {
  name: "old-friend",
  data() {
    return {
      password: ""
    };
  },
  methods: {
    unsealVault() {
      electron.ipcRenderer.send("verifyHash");
    },
    openToastMessage(msg) {
      this.$buefy.toast.open({
        duration: 3000,
        message: msg,
        position: "is-bottom",
        type: "is-danger"
      });
    }
  },
  mounted() {
    electron.ipcRenderer.on("hashResponse", (event, hash) => {
      if (comparePassword(this.password, hash)) {
        this.$router.push("home");
      } else {
        this.openToastMessage("Incorrect master password");
      }
    });
  }
};
</script>

<style scoped>
.old-friend {
  height: 100%;
}
.up {
  height: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #2c3e50;
}
.down {
  height: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #7f8c8d;
}
.container-down {
  width: 50%;
}
.button.btn-unseal-vault {
  background-color: #2c3e50;
  border-color: #2c3e50;
  color: white;
}
.button.btn-unseal-vault:hover {
  background-color: #34495e;
  border-color: #34495e;
  color: white;
}
</style>
