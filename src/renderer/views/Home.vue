<template>
  <div class="home">
    <div class="columns is-mobile is-gapless">
      <div class="column is-one-fifth">
        <categories-panel></categories-panel>
      </div>
      <div class="column">
        <menu-items-container></menu-items-container>
      </div>
    </div>
  </div>
</template>

<script>
import categoriesPanel from "../components/home/categoriesPanel";
import menuAndItemsContainer from "../components/home/menuAndItemsContainer";
export default {
  name: "Home",
  components: {
    "categories-panel": categoriesPanel,
    "menu-items-container": menuAndItemsContainer
  }
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
