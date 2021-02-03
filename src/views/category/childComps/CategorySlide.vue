<template>
  <div class="slide-left">
    <scroll class="slide-scroll">
      <div
        v-for="(item, index) in categoryName"
        class="slide-item"
        @click="itemClick(index, item.maitKey)"
        :class="{ active: currentIndex === index }"
      >
        {{ item.title }}
      </div>
    </scroll>
  </div>
</template>

<script>
import Scroll from "components/common/scroll/Scroll";
export default {
  name: "CategorySlide",
  components: {
    Scroll,
  },
  props: {
    categoryName: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      currentIndex: 0,
        // newCategoryName:  []
    };
  },
  methods: {
    itemClick(index, maitKey) {
      this.currentIndex = index;
      const obj = {
        maitKey,
        index,
      };
      this.$emit("slideItemClick", obj);
    },
  },
  //  watch:{
  //     categoryName(value,i){
  //       this.newCategoryName = value;
  //       this.currentIndex =i;
  //     }
  //   },
};
</script>

<style scoped>
.slide-left {
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  align-items: center;
  width: 100px;
  height: 100vh;
  position: fixed;
  top: 0px;
  left: 0;
  right: 0;
}
.slide-scroll {
  position: absolute;
  top: 44px;
  bottom: 49px;
  background-color: #fff;
}
.slide-item {
  width: 100px;
  font-size: 14px;
  height: 45px;
  line-height: 45px;
  color: #666;
  background-color: #eef5eebf;
}
.active {
  font-weight: 700;
  color: #ff5777;
  border-left: 3px solid #ff5777;
  background-color: #fff;
}
</style>