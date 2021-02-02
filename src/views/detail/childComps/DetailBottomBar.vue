<template>
  <div class="bottom-bar">
    <div class="bar-left">
      <div>
        <i class="icon service"></i>
        <span class="text">客服</span>
      </div>
      <div>
        <i class="icon shop"></i>
        <span class="text">店铺</span>
      </div>
      <div>
        <i class="icon select"></i>
        <span class="text">收藏</span>
      </div>
    </div>
    <div class="bar-right">
      <div class="cart" @click="addToCart">加入购物车</div>
      <div class="buy">购买</div>
    </div>
  </div>
</template>

<script>
export default {
  name:'DetailBottomBar',
  methods:{
    addToCart() {
      this.$emit('addToCart')
    }
  }
}
</script>

<style scoped>
.bottom-bar {
  display: flex;
    text-align: center;
  height: 49px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #fff;
}
.bar-left {
  display: flex;
   flex: 1;
}
.bar-left>div {
  flex: 1;
}
.bar-left .text {
    font-size: 13px;
  }
   .bar-left .icon {
    display: block;
    width: 22px;
    height: 22px;
    margin: 4px auto 3px;
    background: url("~assets/img/detail/detail_bottom.png") 0 0/100%;
  }
   .bar-left .service {
    background-position:0 -54px;
  }

  .bar-left .shop {
    background-position:0 -98px;
  }
   .bar-right {
     display: flex;
    font-size: 15px;
    color: #fff;
    line-height: 49px;
    flex: 1;
  }

  .bar-right .cart {
    background-color: #ffe817;
    color: #333;
    width: 120px;

  }

  .bar-right .buy {
    background-color: #f69;
    flex: 1;
  }
</style>