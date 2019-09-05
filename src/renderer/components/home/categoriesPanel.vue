<template>
  <div class="categories-panel">
    <div class="container-panel">
      <div
        class="row"
        @click="choosenCategory(0)"
        :class="{ 'row-active': isActive[0] }"
      >
        <div class="columns is-mobile is-gapless columns-row">
          <div class="column is-one-fifth">
            <h5 class="has-text-white title is-5">
              <font-awesome-icon icon="address-card" />
            </h5>
          </div>
          <div class="column">
            <h5 class="title has-text-white is-5">Identity</h5>
          </div>
        </div>
      </div>
      <div
        class="row"
        @click="choosenCategory(1)"
        :class="{ 'row-active': isActive[1] }"
      >
        <div class="columns is-mobile is-gapless columns-row">
          <div class="column is-one-fifth">
            <h5 class="has-text-white title is-5">
              <font-awesome-icon icon="user-circle" />
            </h5>
          </div>
          <div class="column">
            <h5 class="title has-text-white is-5">Socials</h5>
          </div>
        </div>
      </div>
      <div
        class="row"
        @click="choosenCategory(2)"
        :class="{ 'row-active': isActive[2] }"
      >
        <div class="columns is-mobile is-gapless columns-row">
          <div class="column is-one-fifth">
            <h5 class="has-text-white title is-5">
              <font-awesome-icon icon="credit-card" />
            </h5>
          </div>
          <div class="column">
            <h5 class="title has-text-white is-5">Credit cards</h5>
          </div>
        </div>
      </div>
      <div
        class="row"
        @click="choosenCategory(3)"
        :class="{ 'row-active': isActive[3] }"
      >
        <div class="columns is-mobile is-gapless columns-row">
          <div class="column is-one-fifth">
            <h5 class="has-text-white title is-5">
              <font-awesome-icon icon="gamepad" />
            </h5>
          </div>
          <div class="column">
            <h5 class="title has-text-white is-5">Games</h5>
          </div>
        </div>
      </div>
      <div
        class="row"
        @click="choosenCategory(4)"
        :class="{ 'row-active': isActive[4] }"
      >
        <div class="columns is-mobile is-gapless columns-row">
          <div class="column is-one-fifth">
            <h5 class="has-text-white title is-5">
              <font-awesome-icon icon="globe" />
            </h5>
          </div>
          <div class="column">
            <h5 class="title has-text-white is-5">Websites</h5>
          </div>
        </div>
      </div>
      <div
        class="row"
        @click="choosenCategory(5)"
        :class="{ 'row-active': isActive[5] }"
      >
        <div class="columns is-mobile is-gapless columns-row">
          <div class="column is-one-fifth">
            <h5 class="has-text-white title is-5">
              <font-awesome-icon icon="address-book" />
            </h5>
          </div>
          <div class="column">
            <h5 class="title has-text-white is-5">Others</h5>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "categories-panel",
  data() {
    return {
      isActive: [false, false, false, false, false, false]
    };
  },
  methods: {
    choosenCategory(key) {
      this.isActive = this.isActive.map((elem, index) => {
        if (index === key) {
          elem = true;
        } else {
          elem = false;
        }
        return elem;
      });
      this.$emit("choosenCategory", key);
    }
  }
};
</script>

<style scoped>
.categories-panel {
  overflow: hidden;
  height: 100%;
  background-color: #2c3e50;
}
.columns.is-gapless > .column {
  margin-top: 6px;
}
.row {
  position: relative;
}
.row:hover {
  cursor: pointer;
  background-color: #7f8c8d;
}

.columns-row {
  margin-left: 10px;
  height: 35px;
}

.row-active {
  background-color: #7f8c8d;
}
</style>
