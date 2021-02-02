<template>
  <div class="goods">
   <slot></slot>
  </div>
</template>

<script>
import GoodsListItem from './GoodsLIstItem'
export default {
 name:'GoodsList',
 props:{
   goods:{
     type:Array,
     default(){
       return []
     }
   }
 },
 components:{
   GoodsListItem
 }
}
</script>

<style scoped>
.goods {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 2px;
}
</style>