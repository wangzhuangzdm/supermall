<template>
  <div class="goods">
    <div class="title">{{ goods.title }}</div>
    <div>
      <span class="price">{{ goods.price }}</span>
      <span class="oldPrice">{{ goods.oldPrice }}</span>
      <span
        :style="{ background: goods.discountBgColor }"
        class="discountDesc"
        >{{ goods.discountDesc }}</span
      >
    </div>
    <div class="columns">
      <div v-for="item in goods.columns">{{ item }}</div>
    </div>
    <div class="services" v-if="goods.services">
      <div v-for="index in goods.services.length - 1">
        <img :src="goods.services[index - 1].icon" alt="" />
        <span> {{ goods.services[index - 1].name }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBaseInfo",
  props: {
    goods: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style scoped>
.goods {
  padding: 10px;
}
.title {
  font-size: 16px;
  color: #222;
  font-weight: 600;
  margin-bottom: 5px;
}
.price {
  color: #eb4868;
  font-size: 24px;
  padding-right: 5px;
}
.oldPrice {
  text-decoration: line-through;
  color: #999;
  font-size: 14px;
}
.discountDesc {
  position: relative;
  bottom: 5px;
  border-radius: 10px;
  font-size: 12px;
  color: #ffffff;
  padding: 4px 6px;
  margin-left: 5px;
  margin-bottom: 100px;
}
.columns {
  display: flex;
  justify-content: space-between;
  color: #999;
  font-size: 14px;
  border-bottom: 1px solid #f2f5f8;
  padding-top: 15px;
  padding-bottom: 5px;
}
.services {
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 50px;
}
.services img {
  width: 12px;
  height: 12px;
}
.services span {
  color: #666;
  font-size: 14px;
}
</style>