<template>
  <div class="item-row">
    <div v-for="(item, index) in source.chunk" class="item-card" :key="index">
      <div class="item-card-img">
        <img src="https://via.placeholder.com/300/09f/fff.png" width="100%" />
      </div>
      <div>{{ item.id }} - {{ item.text }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "item",
  props: {
    source: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style scoped>
.item-row {
  display: flex;
}
.item-card {
  flex: 1 1 0px;
  display: flex;
  flex-direction: column;
  border: 1px solid lightgray;
  padding: 1rem;
  margin: 1rem;
}

.item-card-img img {
  max-width: 200px;
  height: 150px;
  object-fit: cover;
}
</style>
