<template>
    <div class="wrapper">
      <h2>Vue Virtual Scroller (<a target="_blank" href="https://github.com/Akryum/vue-virtual-scroller">Github</a>)</h2>

      <DynamicScroller
          ref="scroller"
          :items="items"
          :min-item-size="10"
          class="scroller"
          :page-mode="true"
          key-field="id"
      >
        <DynamicScrollerItem
            slot-scope="{ item, index, active }"
            :item="item"
            :active="active"
            :data-index="index"
            :size-dependencies="[
              item.text,
            ]"
        >
          <div class="item-row">
            <div v-for="(item, index) in item.chunk" class="item-card" :key="index">
              <div class="item-card-img">
                <img src="https://via.placeholder.com/3000/df4d4d/fff.png" width="100%"/>
              </div>
              <div> {{ item.text }}</div>
            </div>
          </div>
        </DynamicScrollerItem>

        <template v-slot:after>
          <Loader v-show="at_bottom"/>
        </template>
      </DynamicScroller>

    </div>
</template>

<script>
import 'vue-virtual-scroller/dist/vue-virtual-scroller.css'
import faker from 'faker'
import Loader from "@/components/Loader";

export default {
  name: "VirtualScroller",
  components: {
    Loader
  },
  data() {
    return {
      chunkSize: this.getChunkSize(document.body.clientWidth),
      items:this.getData(40, this.getChunkSize(document.body.clientWidth)),
      at_bottom: false
    };
  },
  mounted() {
    this.getData(40,  this.getChunkSize(document.body.clientWidth))
    console.log(this.items)
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
    window.addEventListener("resize", this.setVirtualItems);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
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
        this.items = this.getData(40, newChunkSize);
      }
    },
    handleScroll() {
      let scrollHeight, totalHeight;
      scrollHeight = document.body.scrollHeight;
      totalHeight = window.scrollY + window.innerHeight;

      if(totalHeight >= scrollHeight && !this.at_bottom)
      {
        this.at_bottom = true
        console.log("at the bottom");
        setTimeout(() => {
          this.items = this.items.concat(this.getData(40, this.chunkSize));
          this.at_bottom = false
        }, 3000);
      }
    },
    spliteArray(arr, size) {
      let arrays = []
      while (arr.length > 0) {

        let chunk = arr.splice(0, size)

        arrays.push({
          id: this.generateId(10),
          chunk
        });
      }
      return arrays
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
    getData(count = 1, chunk) {
      const data = []
      for (let index = 0; index < count; index++) {
        data.push({
          id: this.generateId(10),
          text:  faker.lorem.sentence()
        })
      }
      return this.spliteArray(data, chunk)

    },
    // generateId :: Integer -> String
    generateId(len) {
      // dec2hex :: Integer -> String
      // i.e. 0-255 -> '00'-'ff'
      function dec2hex(dec) {
        return dec.toString(16).padStart(2, "0")
      }

      var arr = new Uint8Array((len || 40) / 2)
      window.crypto.getRandomValues(arr)
      return Array.from(arr, dec2hex).join('')
    }
  },


};
</script>


<style>

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

.scroller {
  border: 2px solid #ddd;
  height: 100%;
}
.message {
  padding: 10px 10px 9px;
  border-bottom: solid 1px #eee;
}
</style>