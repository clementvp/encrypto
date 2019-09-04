<template>
  <div class="splash-screen">
    <new-comer v-if="isNewComer"></new-comer>
    <old-friend v-else></old-friend>
  </div>
</template>

<script>
import electron from "electron";
import newComer from "../components/splash-screen/NewComer";
import oldFriend from "../components/splash-screen/OldFriend";

export default {
  name: "splash-screen",
  components: {
    "new-comer": newComer,
    "old-friend": oldFriend
  },
  data() {
    return {
      isNewComer: null
    };
  },
  mounted() {
    electron.ipcRenderer.send("frontReady");
    electron.ipcRenderer.on("newComer", () => {
      this.isNewComer = true;
    });
    electron.ipcRenderer.on("oldFriend", () => {
      this.isNewComer = false;
    });
  }
};
</script>

<style scoped>
.splash-screen {
  height: 100%;
}
</style>
