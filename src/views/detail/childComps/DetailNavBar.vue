<template>
  <div class="detail-bav-bar">
    <nav-bar>
      <div slot="left" class="back-home" @click="backClick">
        <img src="~assets/img/common/back.svg" alt="" />
      </div>
      <div slot="center" class="titles">
        <div
          v-for="(item, index) in titles"
          class="titles-item"
          @click="titlesClick(index)"
          :class="{ active: index === currentIndex }"
        >
          {{ item }}
        </div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue";
export default {
  naem: "DetailNavBar",
  components: {
    NavBar,
  },
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0,
    };
  },
  methods: {
    titlesClick(index) {
      this.currentIndex = index;
    },
    backClick() {
    this.$router.back();
  },
  },
  
};
</script>

<style scoped>
.detail-bav-bar {
  background-color: #f6f6f6;
  box-shadow: 0 1px 3px rgba(100, 100, 100, 0.2);
}
.titles {
  display: flex;
  font-size: 15px;
}
.titles-item {
  flex: 1;
}
.back-home {
  margin: 12px 0 0 15px;
}
.active {
  color: var(--color-high-text);
}
</style>