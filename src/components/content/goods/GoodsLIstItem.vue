<template>
  <div class="goods-item">
    <img :src="goodsItem.show.img" alt="" />
    <div class="goods-info">
      <p>{{ goodsItem.title }}</p>
      <span class="price">{{ goodsItem.price }}</span>
      <span class="collect">{{ goodsItem.cfav }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsListItem",
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style>
.goods-item {
  position: relative;
  width: 48%;
  padding-bottom: 40px;
  margin-bottom: 10px;
}
.goods-item img {
  width: 100%;
  border-radius: 5px;
  box-shadow: 0px 0px 5px rgba(200, 0, 0, 0.8);
}
.goods-info {
  font-size: 12px;

  text-align: center;
  position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
}
.goods-info p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin: 0 0 3px 0;
}
.price {
  color: var(--color-high-text);
  margin-right: 20px;
}
.goods-info .collect {
    position: relative;
  }
.goods-info .collect::before {
  content: "";
  position: absolute;
    left: -15px;
    top: 1px;
  width: 14px;
  height: 14px;
  background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
}
</style>