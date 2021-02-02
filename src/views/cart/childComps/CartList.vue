<template>
 <div class="cart-list">
    <scroll class="content" ref="scroll">
      <cart-list-item v-for="item in cartList" :key="item.iid" :item-info="item"></cart-list-item>
    </scroll>
  </div>
</template>

<script>
import CartListItem from './CartListItem';
import Scroll from "components/common/scroll/Scroll";
import { mapGetters } from "vuex";
export default {
  name: "CartList",
  components: {
    CartListItem,
    Scroll
  },
  computed: {
    ...mapGetters(["cartList"]),
  },
  activated() {
    this.$refs.scroll.refresh();
  }
};
</script>

<style scoped>
.cart-list {
  position: relative;
  height: 87.4vh;
  background-color: #fff;
}
.content {
  position: absolute;
  top: 0px;
  bottom: 49px;
  background-color: #fff;
  width: 100%;
  height: 100%;
}

</style>