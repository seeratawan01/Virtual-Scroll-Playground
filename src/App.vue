<template>
  <div id="app">
    <div class="wrapper">
      <h2>Virtual Scroll</h2>
      <virtual-list
        class="list"
        wrap-class="list-wrapper"
        :data-key="'id'"
        :data-sources="items"
        :data-component="item"
        :estimate-size="200"
        v-on:totop="onScrollToTop"
        v-on:tobottom="onScrollToBottom"
      >
        <div slot="footer" class="loading-spinner">Loading ...</div>
      </virtual-list>
    </div>
  </div>
</template>

<script>
import Item from "./components/Item";
import { getData, resetCounter } from "./data";

export default {
  name: "App",
  data() {
    return {
      chunkSize: this.getChunkSize(document.body.clientWidth),
      item: Item,
      items: getData(40, this.getChunkSize(document.body.clientWidth)),
    };
  },
  mounted() {
    console.log(this.items);
  },
  created() {
    window.addEventListener("resize", this.setVirtualItems);
  },
  destroyed() {
    window.removeEventListener("resize", this.setVirtualItems);
  },
  methods: {
    setVirtualItems() {
      let width = document.body.clientWidth;
      let newChunkSize = this.getChunkSize(width);
      if (newChunkSize === this.chunkSize) {
        return;
      } else {
        this.chunkSize = newChunkSize;
        resetCounter();
        this.items = getData(40, newChunkSize);
      }
    },
    getChunkSize(width) {
      if (width >= 1200) {
        return 5;
      } else if (width >= 992) {
        return 4;
      } else if (width >= 768) {
        return 3;
      } else if (width >= 576) {
        return 2;
      } else {
        return 1;
      }
    },
    onScrollToTop() {
      console.log("at top");
    },
    onScrollToBottom() {
      setTimeout(() => {
        this.items = this.items.concat(getData(40, this.chunkSize));
      }, 1000);
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 1rem;
}

h2 {
  margin-bottom: 1rem;
}
.list {
  border: 2px solid steelblue;
  border-radius: 3px;
  overflow-y: auto;
  height: calc(100vh - 200px);
}

.list-wrapper {
  /*display: grid;*/
  /*grid-template-columns: 1fr 1fr;*/
}
</style>
