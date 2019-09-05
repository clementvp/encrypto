<template>
  <div class="new-comer">
    <div class="up">
      <div class="container-up">
        <h4 class="has-text-centered has-text-white title is-4">
          Welcome to Mirmidon
        </h4>
        <h5 class="has-text-centered has-text-white title is-5">
          It seems you have not set up a vault yet
        </h5>
      </div>
    </div>
    <div class="down">
      <div class="container-down">
        <b-field label="Master Password:">
          <b-input type="password" v-model="password"></b-input>
        </b-field>
        <b-field label="Confirm Master Password:">
          <b-input type="password" v-model="confirmPassword"></b-input>
        </b-field>
        <button
          class="button btn-setup-vault is-medium is-fullwidth"
          @click="setUpVault"
        >
          Set up vault
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import electron from "electron";
import { hashPassword } from "../../services/passwordService";
export default {
  name: "new-comer",
  data() {
    return {
      password: "",
      confirmPassword: ""
    };
  },
  methods: {
    setUpVault() {
      if (this.password === "") {
        this.openToastMessage("Password cannot be empty !");
      } else if (this.password !== this.confirmPassword) {
        this.openToastMessage(`Passwords does not match !`);
      } else if (this.password.length <= 8) {
        this.openToastMessage(`Password must be at least 8 chars !`);
      } else {
        electron.ipcRenderer.send("initVault", hashPassword(this.password));
      }
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
    electron.ipcRenderer.on("initVaultOk", () => {
      this.$router.push("home");
    });
  }
};
</script>

<style scoped>
.new-comer {
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
.button.btn-setup-vault {
  background-color: #2c3e50;
  border-color: #2c3e50;
  color: white;
}
.button.btn-setup-vault:hover {
  background-color: #34495e;
  border-color: #34495e;
  color: white;
}
</style>
