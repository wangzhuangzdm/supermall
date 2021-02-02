<template>
  <div id="cart">
    <!-- 导航 -->
    <nav-bar class="cart-nav"><div slot="center" >购物车({{cartLength}})</div></nav-bar>
    <!-- 商品展示 -->
   <cart-list></cart-list>
    <!-- 全选合计 -->
    <cart-bottom-bar></cart-bottom-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar';
import CartList from './childComps/CartList';
import CartBottomBar from './childComps/CartBottomBar';

import {mapGetters} from 'vuex';
export default {
  name:'Cart',
  components:{
    NavBar,
    CartList,
    CartBottomBar
    
  },
  computed:{
      ...mapGetters(['cartLength'])
    
  }
}
</script>

<style scoped>
.cart-nav {
    font-weight: 700;
    color: #fff;
    background-color: var(--color-tint);
    z-index: 99;
}
</style>