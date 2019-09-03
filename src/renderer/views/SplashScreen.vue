<template>
  <div class="splash-screen">
    <new-comer v-if="newComer"></new-comer>
    <old-friend v-else></old-friend>
  </div>
</template>

<script>
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
      newComer: false
    };
  }
};
</script>

<style scoped>
.splash-screen {
  height: 100%;
}
</style>
