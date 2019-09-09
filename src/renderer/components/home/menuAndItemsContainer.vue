<template>
  <div class="menu-items-container">
    <div class="columns is-mobile is-gapless">
      <div class="column is-two-fifths categorie-list">
        <items-list></items-list>
      </div>
      <div class="column item">column</div>
    </div>
  </div>
</template>

<script>
import itemsList from "./itemsList";
export default {
  name: "menu-items-container",
  components: { "items-list": itemsList }
};
</script>

<style scoped>
.menu-items-container,
.columns,
.column {
  height: 100%;
}
.categorie-list {
  background-color: #34495e;
}
.item {
  background-color: #ecf0f1;
}
</style>
