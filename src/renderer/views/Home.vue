<template>
  <div class="home">
    <div class="columns is-mobile is-gapless">
      <div class="column is-one-quarter">
        <categories-panel></categories-panel>
      </div>
      <div class="column">
        another column
      </div>
    </div>
  </div>
</template>

<script>
import categoriesPanel from "../components/home/categoriesPanel";
export default {
  name: "Home",
  components: { "categories-panel": categoriesPanel }
};
</script>
<style scoped>
.home {
  height: 100%;
}
.columns {
  height: 100%;
}
</style>
