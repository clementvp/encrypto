<template>
  <div class="itemsList">
    <div class="columns-container">
      <div class="columns is-mobile is-gapless">
        <div class="column">
          <h5 class="title is-5 has-text-white has-text-right categorie-title">
            {{ categorieTitle }}
          </h5>
        </div>
        <div class="column has-text-centered">
          <button class="button is-small btn-add-item">
            <font-awesome-icon icon="plus" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import getCatgorieTitle from "../../services/catgeoriesTitlesService";
export default {
  name: "itemsList",
  computed: {
    categorieTitle() {
      return getCatgorieTitle(this.$store.state.categorie);
    }
  }
};
</script>

<style scoped>
.itemsList {
  height: 100%;
}
.btn-add-item {
  background-color: #ecf0f1;
  border-color: #ecf0f1;
}
.btn-add-item:hover {
  background-color: #bdc3c7;
  border-color: #bdc3c7;
}
.columns-container {
  margin-top: 10px;
}
</style>
