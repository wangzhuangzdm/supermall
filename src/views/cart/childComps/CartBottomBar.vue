<template>
  <div class="cart-bottom-bav">
    <check-buttom class="select-all" :ischecked="isSelectAll" @click.native="clickCheckAll"></check-buttom>
     <span>全选</span>
    <span class="total-price">合计:{{totalPrice}}</span>
    <span class="buy-product" @click="calcClick">去计算({{checkLength}})</span>
  </div>
</template>

<script>
import CheckButtom from 'components/content/checkButtom/CheckButtom';
export default {
  name:'CarBottomBar',
  components:{
    CheckButtom
  },
  computed:{
    totalPrice() {
      return '¥' + this.$store.state.cartList.filter(item=>{
        return item.checked
      }).reduce((pre,item)=>{
        return pre+item.newPrice * item.count
      },0).toFixed(2)
    },
    checkLength() {
      return this.$store.state.cartList.filter(item=>item.checked).length
    },
     isSelectAll() {
      //  return !(this.$store.state.cartList.filter(item=>!item.checked).length)
      if(this.$store.state.cartList.length === 0) {
        return false
      }
      return !(this.$store.state.cartList.find(item=>!item.checked))
     }
  },
  methods:{
    clickCheckAll() {
      if(this.isSelectAll) {
        this.$store.state.cartList.forEach(item=>item.checked=false)
      } else {
         this.$store.state.cartList.forEach(item=>item.checked=true)
      }
    },
    calcClick() {
     
      if(!this.isSelectAll) {
        this.$toast.show('请选择购买的商品',2000)
      }
    }
  }
}
</script>

<style scoped>
.cart-bottom-bav {
   width: 100%;
    height: 44px;
    background-color: #eee;
 position: fixed;
    bottom: 50px;
    left: 0;
    box-shadow: 0 -2px 3px rgba(0, 0, 0, .2);
    font-size: 14px;
    color: #888;
    line-height: 44px;
    padding-left: 35px;
    box-sizing: border-box;
}
.select-all {
   position: absolute;
    line-height: 0;
    left: 12px;
    top: 13px;
}
.total-price {
    margin-left: 20px;
    font-size: 16px;
    color: #666;
  }
  .buy-product {
    background-color: orangered;
    color: #fff;
    width: 100px;
    height: 44px;
    text-align: center;
    line-height: 44px;
    float: right;
  }
</style>