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
          :estimate-size="50"
          v-on:totop="onScrollToTop"
          v-on:tobottom="onScrollToBottom"
      >
        <div slot="footer" class="loading-spinner">Loading ...</div>
      </virtual-list>
    </div>
  </div>
</template>

<script>
import Item from './components/Item'
import { getData } from './data'

export default {
  name: 'App',
  data() {
    return {
      item: Item,
      items: getData(40)
    }
  },
  mounted() {
    console.log(this.items)
  },
  methods: {
    onScrollToTop () {
      console.log('at top')
    },
    onScrollToBottom () {
      setTimeout(() => {
        this.items = this.items.concat(getData(40))
      }, 1000);

    }
  }
}
</script>

<style>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 1em;
  padding: 1em;
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
